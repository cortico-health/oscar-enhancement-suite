import { createContext } from 'preact';
import { useContext, useEffect, useReducer } from 'preact/hooks';
import { GET_DISCUSSIONS, ADD_MESSAGE, GET_PATIENTS, SELECT_DISCUSSION, SELECT_PATIENT, LOGIN, LOGOUT, GET_USER } from '../actions';
import { usersData } from '../data';
import reducers from '../reducers';
import axios from 'axios';
import { observer, useLocalObservable } from 'mobx-react-lite'
import { action } from 'mobx';
import useBackend from '../hooks/useBackend';

// const discussionsSocket = new WebSocket(process.env.WEBSOCKET_URL);



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
  // discussionsSocket: discussionsSocket
};

const StateContext = createContext();

export const StateProvider = observer(({ children }) => {
  //get necessary backend
  const { getConversationsList, getUserData, postLoginAccess } = useBackend();

  const [state, dispatch] = useReducer(reducers, initialState);

  const userStore = useLocalObservable(() => ({
    users: {
      all: []
    },
    user: null,
  }))

  const authStore = useLocalObservable(() => ({
    accessToken: localStorage["vcnAccessToken"] || null,
    auth: localStorage["user"] || {},
    login(email, password) {
      postLoginAccess(email, password).then((response) => {
        this.accessToken = response.data.access;
        localStorage.setItem('vcnAccessToken', this.accessToken)
      })
      .catch((error) => {
        console.log(error);
      });
    },
    logout() {
      userStore.user = null;
      this.accessToken = null;
      localStorage.setItem('vcnAccessToken', null)
    }
  }))

  const conversationStore = useLocalObservable(() => ({
    selectedConversation: null,
    setSelectedConversation(id) {
      getConversationsList(authStore.accessToken).then((response) => {
        this.selectedConversation = response.data?.results.filter((result) => {
          return result.id === parseInt(id);
        })[0]
      }).catch((error) => {
        console.log(error)
      })
    }
  }))

  useEffect(() => {
    if (!authStore?.accessToken) return;

    getUserData(authStore.accessToken).then((response) => {
      userStore.user = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  },[authStore.accessToken])

  /* TODO: will convert everything t Mobx, but not yet priority. */

  const value = {
    // This is the MobX store. TODO: move any other global state here too, it's easier.
    userStore,
    authStore,
    conversationStore,
    /* TODO: remove the ones below once I'll do their functions */
    //patients
    patients: state.patients,
    getPatients: () => {
      dispatch({ type: GET_PATIENTS })
    },
    selectPatient: (id) => {
      dispatch({ type: SELECT_PATIENT, payload: id })
    },
    //discussions
    discussions: state.discussions,
  }

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  )
});

export const useStore = () => useContext(StateContext);