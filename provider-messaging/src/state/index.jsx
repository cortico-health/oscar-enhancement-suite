import { createContext } from 'preact';
import { useContext, useEffect, useReducer } from 'preact/hooks';
import { patientsData, usersData } from '../data';
import { observer, useLocalObservable } from 'mobx-react-lite'
import { getConversationsList } from '../api/conversations';
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
        this.user = response.data;
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
      this.patients.all = patientsData;
    },
    setSelectedPatient(id) {
      //Get the patient value
      const selectedPatient = patientsData.find(patient => patient.id == id);
      this.patients.selected = selectedPatient ? selectedPatient : null;
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
      localStorage.setItem('vcnAccessToken', null);
    }
  }))

  const conversationStore = useLocalObservable(() => ({
    selectedConversation: null,
    conversations: [],
    setSelectedConversation(id) {
      getConversationsList(authStore.accessToken).then((response) => {
        this.selectedConversation = response.data?.results.filter((result) => {
          return result.id === parseInt(id);
        })[0]
      }).catch((error) => {
        console.log(error)
      })
    },
    setConversations() {
      getConversationsList(authStore.accessToken).then((response) => {
        this.conversations = response.data.results;

      })
        .catch((error) => {
          console.log(error);
        });
    }
  }))

  useEffect(() => {
    if (!authStore?.accessToken) return;

    //Fetting the users
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