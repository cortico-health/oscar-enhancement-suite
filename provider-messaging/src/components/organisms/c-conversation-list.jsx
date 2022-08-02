import { h } from "preact";
import { useEffect,useState } from "preact/hooks";
import { useStore } from "../../state";

import MConversationTab from "../molecules/m-conversation-tab";
import MSearch from "../molecules/m-search";
import CNotFound from "./c-not-found";
import useBackend from "../../hooks/useBackend";
import { observer } from "mobx-react-lite";

const CConversationList = () => {
  const { getConversationsList } = useBackend();
  const { authStore,conversationStore } = useStore();

  const [conversations,setConversations] = useState({});
  useEffect(() => {
    /* TODO: in case this solution failed I can just uncomment this. */
    /* getConversationsList(authStore.accessToken).then((response) => {
        setConversations(response.data.results)
      })
      .catch((error) => {
        console.log(error);
      }); */
    setConversations(conversationStore.conversations)
  },[conversationStore.conversations])

  const searchHandler = (e) => {
    console.log(e.target.value + "is being searched...")
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
          : <CNotFound name="Hello" />
      }
    </div>
  );
};

export default observer(CConversationList);
