import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useStore } from "../../state";

import MDiscussionTab from "../molecules/m-discussion-tab";
import MSearch from "../molecules/m-search";
import CNotFound from "./c-not-found";

const CDiscussionList = () => {

  const { discussions, getDiscussions, 
    patients, getPatients, store } = useStore();
  const [showDiscussions, setShowDiscussions] = useState(undefined);

  const [ name, setName] = useState('');

  useEffect(() => {
    getPatients();
  },[])

  useEffect(() => {
    if(patients?.all.length){
      getDiscussions(patients?.selected);
    }
  },[patients])

  useEffect(() => {
    if(patients?.all.length){
      setShowDiscussions(discussions?.all);
    }
  },[discussions]);

  if(!discussions.all.length || !showDiscussions || !store.users.all.length){
    return <div>loading...</div>
  }

  const searchHandler = (e) => {
    let filteredData = discussions?.all.filter( discussion => {
      return discussion.participiants.find( participiant => participiant.name.toLowerCase().includes(e.target.value.toLowerCase()))
    } )
    setShowDiscussions(filteredData)
    setName(e.target.value)
  }
  
  return (
    <div className="mx-2.5">
      <MSearch onInput={searchHandler} />
      {
        showDiscussions && showDiscussions.length ?
      
      showDiscussions.map((discussionListed) => {
        return (
          <MDiscussionTab
            users={store.users}
            discussion={discussionListed}
          />
        );
      }): <CNotFound name={name}/>
      }
    </div>
  );
};

export default CDiscussionList;
