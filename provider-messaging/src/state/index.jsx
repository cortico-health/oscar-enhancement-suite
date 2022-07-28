import { createContext } from 'preact';
import { useContext, useEffect, useReducer } from 'preact/hooks';
import { GET_DISCUSSIONS, ADD_MESSAGE, GET_PATIENTS, SELECT_DISCUSSION, SELECT_PATIENT, LOGIN, LOGOUT, GET_USER } from '../actions';
import { usersData } from '../data';
import reducers from '../reducers';
import axios from 'axios';
import { observer, useLocalObservable } from 'mobx-react-lite'
import { action } from 'mobx';

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

  const [state, dispatch] = useReducer(reducers, initialState);

  const store = useLocalObservable(() => ({
    users: {
      all: []
    },
    user: null,
    accessToken: localStorage["vcnAccessToken"] || null,
    auth: localStorage["user"] || {},
    login(email, password) {
      axios.post('http://localhost:8426/api/token/', {
        username: email,
        password: password
      })
        .then((response) => {
          this.accessToken = response.data.access;
          localStorage.setItem('vcnAccessToken', this.accessToken)
        })
        .catch((error) => {
          console.log(error);
        });
    },
    logout() {
      this.user = null;
      this.accessToken = null;
      localStorage.setItem('vcnAccessToken', null)
    }
  }))

  useEffect(() => {
    if (!store.accessToken) return;

    axios.get('http://localhost:8426/api/vcn/user/', {
      headers: {
        'Authorization': `Bearer ${store.accessToken}`
      }
    })
      .then((response) => {
        store.user = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }, [store.accessToken])

  /* TODO: will convert everything t Mobx, but not yet priority. */
  /* const authStore = useLocalObservable(() => ({
    auth: localStorage["user"] ? JSON.parse(localStorage["user"]) : {},
    login: (email, password) => {
      console.log(email, password)
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
    },
    logout: () => {
      localStorage.clear();
    },
  })) */

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
    /* auth: JSON.parse(localStorage["user"]), */
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
});

export const useStore = () => useContext(StateContext);