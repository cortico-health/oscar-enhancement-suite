import { createContext } from 'preact';
import { useContext,useEffect,useState } from 'preact/hooks';
import { patientsData,usersData } from '../../../../provider-messaging/src/data';
import { observer,useLocalObservable,Observer } from 'mobx-react-lite'
import { getConversationsList } from '../../../Api/Vcn/Conversations.js';
import { getPatients } from '../../../Api/Vcn/Patients.js';
import { getUserData,getUsersData } from '../../../Api/Vcn/Users.js';
import { login } from '../../../Api/Vcn/Auth.js';
import useWebSocket from "react-use-websocket";
import _ from 'lodash';
import { getWsUpdateUrl } from '../../../Utils/VcnUtils';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [socketUrl,setSocketUrl] = useState(null);

  const { getWebSocket } = useWebSocket(socketUrl,{
    onOpen: () => { },
    onClose: () => { },
    shouldReconnect: (closeEvent) => true,
    onMessage: (event) => processMessage(event)
  });

  const processMessage = (e) => {
    const data = JSON.parse(e.data);
    const updatedConversation = JSON.parse(data.text);
    conversationStore.updateOrInsertConversation(updatedConversation)
  }

  const userStore = useLocalObservable(() => ({
    users: {
      all: [],
      selected: null,
    },
    user: {},
    fetchUsers() {
      getUsersData(authStore.accessToken).then((res) => { return res.json() }).then(
        (data) => {
          this.users.all = data.results;
        }
      ).catch(
        (error) => console.error(error)
      )
    },
    fetchUser() {
      getUserData(authStore.accessToken).then((res) => { return res.json() }).then(
        (data) => {
          if (!data?.profile) {
            this.user = {};
            this.accessToken = null;
            localStorage.removeItem('vcnAccessToken');
          } else {
            this.user = data;
          }
        }
      ).catch(
        (error) => console.error(error)
      )
    }
  }))

  const patientStore = useLocalObservable(() => ({
    patients: {
      all: [],
      selected: null,
    },
    fetchPatients() {
      getPatients().then((res) => { return res.json() }).then(
        (data) => {
          this.patients.all = data.results;
        }
      ).catch(
        (error) => console.log(error)
      )
    },
    selectPatient(patient) {
      if (!patient) {
        this.patient.selected = null;
        return;
      }

      this.patients.selected = patient;
    }
  }))

  const authStore = useLocalObservable(() => ({
    accessToken: localStorage["vcnAccessToken"] || null,
    login(email,password) {
      login(email,password).then((res) => { return res.json() }).then(
        (data) => {
          this.accessToken = data.access;
          localStorage.setItem('vcnAccessToken',this.accessToken)
          console.log("Login Successful");
        }
      ).catch(
        (error) => {
          console.log(error);
          console.log("Login Failed")
        }
      )
    },
    logout() {
      userStore.user = null;
      this.accessToken = null;
      localStorage.removeItem('vcnAccessToken');
    }
  }))

  const conversationStore = useLocalObservable(() => ({
    conversations: {
      all: [],
      selected: null,
    },
    fetchConversations() {
      getConversationsList().then((res) => { return res.json() }).then(
        (data) => {
          this.conversations.all = data.results;
        }
      ).catch(
        (error) => console.log(error)
      )
    },
    selectConversation(id) {
      if (!id) {
        this.conversations.selected = null;
        patientStore.selectPatient(null);
        return;
      }

      const selectedConversation = this.conversations.all.find((conversation) => {
        return conversation.id == id;
      });
      this.conversations.selected = selectedConversation;

      patientStore.selectPatient(selectedConversation?.patient);
    },
    updateOrInsertConversation(updatedConversation) {
      const existingConversation = this.conversations.find((conversation) => {
        return conversation.id === updatedConversation.id;
      })

      if (existingConversation) {
        this.conversations = this.conversations.map((conversation) => {
          return conversation.id === updatedConversation.id ? updatedConversation : conversation;
        });
      } else {
        this.conversations.push(updatedConversation)
      }

      this.conversations = _.orderBy(this.conversations,['last_message.created_date'],['desc']);
    }
  }))

  useEffect(() => {
    if (!authStore?.accessToken) return;

    // Fetch all initial data after logging in
    userStore.fetchUser();
    userStore.fetchUsers();
    conversationStore.fetchConversations();
    patientStore.fetchPatients();

    setSocketUrl(getWsUpdateUrl(authStore.accessToken));
  },[authStore.accessToken])

  const value = {
    userStore,
    authStore,
    conversationStore,
    patientStore
  }

  return (
    <StateContext.Provider value={ value }>
      { children }
    </StateContext.Provider>
  )
};

export const useStore = () => useContext(StateContext);