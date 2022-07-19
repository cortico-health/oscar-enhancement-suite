import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useStateValue } from "../../state";
import AButton from "../atoms/a-button";

import MSearch from "../molecules/m-search";
import MUserTab from "../molecules/m-user-tab";

const CUsersList = () => {

  const { getUsers, users, auth } = useStateValue();

  const [checked, setChecked] = useState(undefined);

  const [ confirm, setConfirm ] = useState(false);

  const searchHandler = (e) => {
    let filteredData = users?.all.filter( user => {
      return user.name.toLowerCase().includes(e.target.value.toLowerCase()) 
      || user.title.toLowerCase().includes(e.target.value.toLowerCase())
      || user.clinic.toLowerCase().includes(e.target.value.toLowerCase())
    });
    setShowUsers(filteredData)
  }

  const [ showUsers, setShowUsers] = useState(undefined);

  useEffect(() => {
    getUsers();
  },[]);


  useEffect(() => {
    if(users?.all){
      setShowUsers(users?.all);

      const res = {}
      users?.all.forEach( user => {
        res[user.id] = false
      })
      setChecked( res)
    }
  }, [users])

  const handleOnChange = (e) => {
    setChecked({ ...checked,  [e.target.value]: e.target.checked  })
  }

  const nextHandle = () => {
    if(Object.values(checked).includes(true))
    {
      setConfirm(true)
    }
    else {
      alert("users not selected")
    }
  }

  if(!users.all.length || !showUsers){
    return <div>loading...</div>
  }
  
  return (
    <div className="mx-2.5">

    { confirm ?
      <div className="fixed top-0 left-20 z-50 bg-white/40 w-screen h-screen">

        <div className="bg-white max-w-72 px-9 pt-16 pb-8 fixed left-26 top-1/2 -translate-y-1/2">
          <p className="text-secondary-500 text-h2 pb-4">Are you sure you want to start a new conversation with the following users?</p>

          {
            users?.all.map( user => {
              return checked[user.id] ? <p className="text-secondary-500 text-h2 font-bold mb-2" key={user.name}>{ user.name }</p>: null 
            })
          }
        <div className="flex w-full mt-8 justify-center">
          <AButton onClick={() => setConfirm(false)} className="px-5">Start Conversation</AButton>
          </div>
        </div>

      </div> : null }



      <div className="flex mt-7 mx-5 gap-x-3.5 justify-between items-center">
        <AButton href="/chat" className="w-full" variant="button-secondary-sm"> Cancel </AButton>
          <h2 className="text-secondary-500 font-bold text-h3"> New conversation</h2>
        <AButton onClick={nextHandle} className="w-full" variant="button-primary-sm"> Next </AButton>
      </div>

      <MSearch 
        onInput={searchHandler} 
      />
    {
      showUsers.map((user) => {
        // const selected = discussionListed.id == discussions?.selected;
        return (
          <MUserTab
            key={user.id}
            onChange={handleOnChange}
            user={user}
          />
        );
      })
    }
    </div>
  );
};

export default CUsersList;
