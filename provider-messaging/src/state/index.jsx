import { createContext } from 'preact';
import { useContext, useEffect, useReducer } from 'preact/hooks';
import { GET_DISCUSSIONS, ADD_MESSAGE, GET_PATIENTS, SELECT_DISCUSSION, SELECT_PATIENT, LOGIN, LOGOUT, GET_USER } from '../actions';
import { usersData } from '../data';
import reducers from '../reducers';
import axios from 'axios';
import { useLocalObservable } from 'mobx-react-lite'

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

export const StateProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducers, initialState);

  const store = useLocalObservable(() => ({
    users: {
      all: []
    }
  }))

  useEffect(() => {
    // TODO: Fetch here.
    store.users.all = usersData
  }, [])

  const value = {
    // This is the MobX store. TODO: move any other global state here too, it's easier.
    store,

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
    getDiscussions: (patientId) => {
      dispatch({ type: GET_DISCUSSIONS, payload: patientId })
    },
    selectDiscussion: (id) => {
      dispatch({ type: SELECT_DISCUSSION, payload: id })
    },
    addNewMessage: (message) => {
      dispatch({ type: ADD_MESSAGE, payload: message })
    },
    //users
    users: state.users,
    getUsers: () => {
      dispatch({ type: GET_USERS })
    },
    selectUser: (id) => {
      dispatch({ type: SELECT_USER, payload: id })
    },
    addUser: (newUser) => {
      dispatch({ type: ADD_USER, payload: newUser })
    },
    auth: state.auth,
    login: (email, password) => {
      localStorage.setItem('user',
        JSON.stringify({
          email: email,
          password: password
        })
      )
      let auth;
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        auth = usersData.find(users => users.email == user.email)
      }
      else { auth = null }
      dispatch({ type: LOGIN, payload: auth })
    },
    logout: () => {
      localStorage.clear();
      dispatch({ type: LOGOUT })
    },
    getUser: () => {
      let auth;
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        auth = usersData.find(users => users.email == user.email)
      }
      else { auth = null }
      dispatch({ type: GET_USER, payload: auth })
    }
  }

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  )
};

export const useStore = () => useContext(StateContext);