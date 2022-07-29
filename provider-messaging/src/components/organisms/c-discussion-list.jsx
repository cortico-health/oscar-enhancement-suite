import { h } from "preact";
import { useEffect,useState } from "preact/hooks";
import { useStore } from "../../state";

import MDiscussionTab from "../molecules/m-discussion-tab";
import MSearch from "../molecules/m-search";
import CNotFound from "./c-not-found";
import useBackend from "../../hooks/useBackend";
import { observer } from "mobx-react-lite";

const CDiscussionList = () => {
  const { getConversationsList } = useBackend();
  const { authStore, conversationStore } = useStore();

  /* TODO: To be checked ion what causes this infinite loop*/
  //const {data, isError, isLoading} = getQueryConversation();
  const [data, setData] = useState({});
  useEffect(() => {
    /* TODO: in case this solution failed I can just uncomment this. */
    /* getConversationsList(authStore.accessToken).then((response) => {
        setData(response.data.results)
      })
      .catch((error) => {
        console.log(error);
      }); */
      setData(conversationStore.conversations)
  }, [conversationStore.conversations])

  const searchHandler = (e) => {
    console.log(e.target.value + "is being searched...")
  }

  /* if(isError) return <div>Loading....</div>

  if(isLoading) return <div>Error....</div> */

  return (
    <div className="mx-2.5">
      <MSearch onInput={searchHandler} />
      {
        data && data?.length ? (
          <>
            {data.map(conversation => {
              return (
                <MDiscussionTab discussion={conversation} />
              )
            })}
          </>
        )
          : <CNotFound name="Hello" />
      }
    </div>
  );
};

export default observer(CDiscussionList);
