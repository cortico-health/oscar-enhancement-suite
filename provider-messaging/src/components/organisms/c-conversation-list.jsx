import { h } from "preact";
import { useEffect,useState } from "preact/hooks";
import { useStore } from "../../state";

import MConversationTab from "../molecules/m-conversation-tab";
import MSearch from "../molecules/m-search";
import CNotFound from "./c-not-found";
import { observer } from "mobx-react-lite";

const CConversationList = () => {
  const { conversationStore,patientStore } = useStore();

  const [patientName,setPatientName] = useState("");
  const [conversations,setConversations] = useState({});

  /* useEffect(() => {
    if(patients?.all.length){
      getDiscussions(patients?.selected);
    }
  }, [patientStore.patients]) */

  useEffect(() => {
    /* TODO: getUsers and Patients */
    /* getPatients();
    getUsers(); */
  },[])

  useEffect(() => {
    setConversations(conversationStore.conversations)
  },[conversationStore.conversations])

  const searchHandler = (e) => {
    /* TODO: Improved if needed */
    const nameQuery = e.target.value;
    const filteredData = conversationStore.conversations.filter((conversation) => {
      return conversation.members.find((member) => {
        return member.full_name.includes(nameQuery);
      })
    })

    setConversations(filteredData);
    setPatientName(nameQuery);
  }

  return (
    <div className="mx-2.5">
      <MSearch onInput={ searchHandler } />
      {
        conversations && conversations?.length ? (
          <>
            { conversations.map(conversation => {
              return (
                <MConversationTab conversation={ conversation } />
              )
            }) }
          </>
        )
          : <CNotFound name={ patientName } />
      }
    </div>
  );
};

export default observer(CConversationList);
