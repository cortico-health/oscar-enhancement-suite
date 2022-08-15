import { createContext } from 'preact';
import { useContext, useEffect, useReducer } from 'preact/hooks';
import { patientsData, usersData } from '../data';
import { observer, useLocalObservable } from 'mobx-react-lite'
import { getConversationsList } from '../api/conversations';
import { getPatients } from '../api/patients';
import { getUserData, getUsersData } from '../api/users';
import { login } from '../api/auth';

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
      getConversationsList(this.patientStore?.patients.selected).then((response) => {
        this.conversations = response.data.results;
      }).catch((error) => {
        console.log(error);
      });
    }
  }))

  useEffect(() => {
    if (!authStore?.accessToken) return;

    // Fetch all initial data after logging in
    userStore.setUserData();
    userStore.setUsersData();
    conversationStore.setConversations();
    patientStore.getPatientList();
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