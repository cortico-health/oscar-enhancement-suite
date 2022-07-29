import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { conversations } from "../../../test-data";
import { useStore } from "../../state";

import MDiscussionTab from "../molecules/m-discussion-tab";
import MSearch from "../molecules/m-search";
import CNotFound from "./c-not-found";
import axios from 'axios';
import useBackend from "../../hooks/useBackend";

const CDiscussionList = () => {
  const { getConversationsList } = useBackend();
  const { store } = useStore();

  /* To be checked ion what causes this infinite loop*/
  //const {data, isError, isLoading} = getQueryConversation();
  const [data, setData] = useState({});

  useEffect(() => {
    setData(conversations);

    getConversationsList(store.accessToken).then((response) => {
        setData(response.data.results)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

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
            {data?.map(discussion => {
              return (
                <MDiscussionTab discussion={discussion} />
              )
            })}
          </>
        )
          : <CNotFound name="Hello" />
      }
    </div>
  );
};

export default CDiscussionList;
