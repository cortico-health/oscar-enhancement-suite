import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { conversations } from "../../../test-data";
import { getData } from "../../adapters";
import { getQueryConversation } from "../../hooks/useApi";
import { useStore } from "../../state";

import MDiscussionTab from "../molecules/m-discussion-tab";
import MSearch from "../molecules/m-search";
import CNotFound from "./c-not-found";
import axios from 'axios';

const CDiscussionList = () => {
  const { store } = useStore();

  /* To be checked ion what causes this infinite loop*/
  //const {data, isError, isLoading} = getQueryConversation();
  const [data, setData] = useState({});

  useEffect(() => {
    setData(conversations);

    axios.get('http://localhost:8426/api/vcn/conversations/', {
      headers: {
        'Authorization': `Bearer ${store.accessToken}`
      }
    })
      .then((response) => {
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
