import _ from 'lodash';
import useWebSocket from "react-use-websocket";
import { createContext } from 'preact';
import { useContext, useEffect, useState } from 'preact/hooks';
import { observer, useLocalObservable } from 'mobx-react-lite'
import { getConversationsList } from '../../../Api/Vcn/Conversations.js';
import { getPatients } from '../../../Api/Vcn/Patients.js';
import { getUserData, getUsersData } from '../../../Api/Vcn/Users.js';
import { getWsUpdateUrl } from '../../../Utils/VcnUtils';
import { loadExtensionStorageValue } from '../../../Utils/Utils';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [socketUrl, setSocketUrl] = useState(null);

  const { getWebSocket } = useWebSocket(socketUrl, {
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
    users: [],
    user: null,
    fetchUsers() {
      getUsersData().then((res) => { return res.json() }).then(
        (data) => {
          this.users = data.results;
        }
      ).catch(
        (error) => console.error(error)
      )
    },
    fetchUser() {
      getUserData().then((res) => { return res.json() }).then(
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
        this.patients.selected = null;
        return;
      }
      this.patients.selected = patient;
    }
  }))

  const conversationStore = useLocalObservable(() => ({
    conversations: {
      all: null,
      selected: null,
    },
    fetchConversations(patient_hin = "") {
      this.conversations.all = null;
      getConversationsList(patient_hin).then((res) => { return res.json() }).then(
        (data) => {
          this.conversations.all = data.results;
        }
      ).catch(
        (error) => console.log(error)
      )
    },
    selectConversation(conversation) {
      if (!conversation) {
        this.conversations.selected = null;
        patientStore.selectPatient(null);
        return;
      }

      this.conversations.selected = conversation;
      if (conversation.patient) patientStore.selectPatient(conversation.patient);
    },
    updateOrInsertConversation(updatedConversation) {
      const existingConversation = this.conversations.all.find((conversation) => {
        return conversation.id === updatedConversation.id;
      })

      if (existingConversation) {
        this.conversations.all = this.conversations.all.map((conversation) => {
          return conversation.id === updatedConversation.id ? updatedConversation : conversation;
        });
      } else {
        this.conversations.all.push(updatedConversation)
      }

      this.conversations.all = _.orderBy(this.conversations.all, ['last_message.created_date'], ['desc']);
      if (this.conversations.selected.id === updatedConversation.id) this.conversations.selected = updatedConversation;
    }
  }))

  useEffect(() => {
    // PROVIDER MESSAGING FEATURE FLAG
    if (process.env.INCLUDE_PROVIDER_MESSAGING) {
      // FETCH ALL PROVIDER MESSAGING DATA
      loadExtensionStorageValue("jwt_access_token").then((accessToken) => {
        if (accessToken) {
          // Fetch all initial data after logging in
          userStore.fetchUser();
          userStore.fetchUsers();
          conversationStore.fetchConversations();
          patientStore.fetchPatients();

          setSocketUrl(getWsUpdateUrl(accessToken));
        }
      });
    }
  }, [])

  const value = {
    userStore,
    conversationStore,
    patientStore
  }

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  )
};

export const useStore = () => useContext(StateContext);