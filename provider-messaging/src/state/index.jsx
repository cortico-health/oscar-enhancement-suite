import { createContext } from 'preact';
import { useContext, useEffect, useState } from 'preact/hooks';
import { patientsData, usersData } from '../data';
import { observer, useLocalObservable } from 'mobx-react-lite'
import { getConversationsList } from '../api/conversations';
import { getPatients } from '../api/patients';
import { getUserData, getUsersData } from '../api/users';
import { login } from '../api/auth';
import useWebSocket from "react-use-websocket";
import _ from 'lodash';

export const initialState = {
  user: {},
  patients: {
    all: [],
    selected: null
  },
  discussions: {
    all: [],
    selected: null
  }
};

const StateContext = createContext();

export const StateProvider = observer(({ children }) => {
  const [socketUrl, setSocketUrl] = useState(null);

  const { getWebSocket } = useWebSocket(socketUrl, {
    onOpen: () => console.log('WebSocket connection for Updates opened.'),
    onClose: () => console.log('WebSocket connection for Updates closed.'),
    shouldReconnect: (closeEvent) => true,
    onMessage: (event) => processMessage(event)
  });

  const processMessage = (e) => {
    const data = JSON.parse(e.data);
    const updatedConversation = JSON.parse(data.text);
    conversationStore.updateOrInsertConversation(updatedConversation)
  }

  const userStore = useLocalObservable(() => ({
    users: [],
    setUsersData() {
      getUsersData(authStore.accessToken).then((response) => {
        this.users = response.data.results;
      }).catch((error) => {
        console.log(error);
      });
    },
    user: null,
    setUserData() {
      getUserData(authStore.accessToken).then((response) => {
        if (!response.data.profile) {
          userStore.user = null;
          this.accessToken = null;
          localStorage.removeItem('vcnAccessToken');
        } else {
          this.user = response.data;
        }
      }).catch((error) => {
        console.log(error);
      });
    }
  }))

  const patientStore = useLocalObservable(() => ({
    patients: {
      all: [],
      selected: null,
    },
    getPatientList() {
      getPatients().then((response) => {
        this.patients.all = response.data.results;
      }).catch((error) => {
        console.log(error);
      });
    },
    setSelectedPatient(patient) {
      if (patient) {
        this.patients.selected = patient;
      } else {
        this.patients.selected = null;
      }
      // conversationStore.setConversations();
    }
  }))

  const authStore = useLocalObservable(() => ({
    accessToken: localStorage["vcnAccessToken"] || null,
    auth: localStorage["user"] || {},
    login(email, password) {
      login(email, password).then((response) => {
        this.accessToken = response.data.access;
        localStorage.setItem('vcnAccessToken', this.accessToken)
        console.log("Login Successful")
      }).catch((error) => {
        console.log(error);
        console.log("Login Failed")
      });
    },
    logout() {
      userStore.user = null;
      this.accessToken = null;
      localStorage.removeItem('vcnAccessToken');
    }
  }))

  const conversationStore = useLocalObservable(() => ({
    selectedConversation: null,
    conversations: [],
    setSelectedConversation(id) {
      if (id) {
        this.selectedConversation = this.conversations.find((conversation) => {
          return conversation.id === parseInt(id);
        })
        patientStore.setSelectedPatient(this.selectedConversation.patient);
      } else {
        this.selectedConversation = null;
      }
    },
    setConversations() {
      getConversationsList().then((response) => {
        this.conversations = response.data.results;
      }).catch((error) => {
        console.log(error);
      });
    },
    updateOrInsertConversation(updatedConversation) {
      const existingConversation = this.conversations.find((conversation) => {
        return conversation.id === updatedConversation.id;
      })
      console.log('IS CONVERSATION EXISTING: ', existingConversation)
      if (existingConversation) {
        this.conversations = this.conversations.map((conversation) => {
          return conversation.id === updatedConversation.id ? updatedConversation : conversation;
        });
      } else {
        this.conversations.push(updatedConversation)
      }
      this.conversations = _.orderBy(this.conversations, ['last_message.created_date'], ['desc']);
    }
  }))

  useEffect(() => {
    if (!authStore?.accessToken) return;

    // Fetch all initial data after logging in
    userStore.setUserData();
    userStore.setUsersData();
    conversationStore.setConversations();
    patientStore.getPatientList();

    setSocketUrl(`${import.meta.env.VITE_WEBSOCKET_URL || "ws://localhost:8426"}/updates/?token=${authStore.accessToken}`)
  }, [authStore.accessToken])

  /* TODO: will convert everything t Mobx, but not yet priority. */

  const value = {
    // This is the MobX store. TODO: move any other global state here too, it's easier.
    userStore,
    authStore,
    conversationStore,
    patientStore
  }

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  )
});

export const useStore = () => useContext(StateContext);