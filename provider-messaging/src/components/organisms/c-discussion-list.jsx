import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { conversations } from "../../../test-data";
import { getData } from "../../adapters";
import { getQueryConversation } from "../../hooks/useApi";
import { useStore } from "../../state";

import MDiscussionTab from "../molecules/m-discussion-tab";
import MSearch from "../molecules/m-search";
import CNotFound from "./c-not-found";

const CDiscussionList = () => {
  
  /* To be checked ion what causes this infinite loop*/
  //const {data, isError, isLoading} = getQueryConversation();
  const [data,setData] = useState({});

  useEffect(() => {
    setData(conversations);

    //Fetch Here - You can delete the set above if it works
    /* fetch("http://localhost:8426/api/vcn/conversations").then((result) => result.json).then((data) =>{
      setData("data na gusto nimu i change")
    }) */
  },[data])

  console.log(data)

  const searchHandler = (e) => {
    console.log(e.target.value + "is being searched...")
  }

  /* if(isError) return <div>Loading....</div>

  if(isLoading) return <div>Error....</div> */

  return (
    <div className="mx-2.5">
      <MSearch onInput={searchHandler} />
      {
        data?.results && data?.results.length ? (
          <>
            {data?.results.map(discussion => {
              return (
                <MDiscussionTab discussion={discussion}/>
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
