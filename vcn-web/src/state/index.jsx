import { createContext } from 'preact';
import { useContext, useReducer } from 'preact/hooks';
import { GET_DISCUSSIONS, ADD_MESSAGE, GET_PATIENTS, SELECT_DISCUSSION, SELECT_PATIENT, GET_USERS, SELECT_USER, ADD_USER, LOGIN, LOGOUT, GET_USER } from '../actions';
import { usersData } from '../data';
import reducers from '../reducers';

// const discussionsSocket = new WebSocket(process.env.WEBSOCKET_URL);

export const initialState = {
  users: {
    all: [],
    selected: null
  },
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

export const StateContext = createContext();

export const StateProvider = ({children}) => {

  const [ state, dispatch ]  = useReducer(reducers, initialState);

  const value = {
    //patients
    patients: state.patients,
    getPatients: () => {
      dispatch({ type: GET_PATIENTS })
    },
    selectPatient: (id) => {
      dispatch({ type: SELECT_PATIENT, payload: id  })
    },
    //discussions
    discussions: state.discussions,
    getDiscussions: (patientId) => {
      dispatch({ type: GET_DISCUSSIONS, payload: patientId  })
    },
    selectDiscussion: (id) => {
      dispatch({ type: SELECT_DISCUSSION, payload: id  })
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
      dispatch({ type: SELECT_USER, payload: id  })
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
      if(user){
        auth = usersData.find( users => users.email == user.email)
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
      if(user){
        auth = usersData.find( users => users.email == user.email)
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

export const useStateValue = () => useContext(StateContext);