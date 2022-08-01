import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useStore } from "../../state";
import AButton from "../atoms/a-button";
import { observer } from 'mobx-react-lite'

import MSearch from "../molecules/m-search";
import MUserTab from "../molecules/m-user-tab";
import useBackend from "../../hooks/useBackend";

const CUsersList = observer(() => {

  const { userStore } = useStore();
  const { createConversation } = useBackend();

  const [checked,setChecked] = useState(undefined);
  const [ confirm, setConfirm ] = useState(false);

  const searchHandler = (e) => {
    let filteredData = userStore.users?.filter(user => {
      return user.name.toLowerCase().includes(e.target.value.toLowerCase())
      || user.title.toLowerCase().includes(e.target.value.toLowerCase())
      || user.clinic.toLowerCase().includes(e.target.value.toLowerCase())
    });
    setShowUsers(filteredData)
  }

  const [ showUsers, setShowUsers] = useState(undefined);

  useEffect(() => {
    if (userStore.users) {
      setShowUsers(userStore.users);

      const res = {}
      userStore.users?.forEach(user => {
        res[user.id] = false
      })
      setChecked(res)
    }
  },[userStore.users])

  const handleOnChange = (e) => {
    setChecked({ ...checked,  [e.target.value]: e.target.checked  })
  }

  const getCheckedPatients = () => {
    return userStore.users?.filter(user => {
      return checked[user.id]
    })
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


  const handleCreateConversation = () => {
    createConversation(getCheckedPatients())/* .then((response) => {
      setIsLoading(false);
      setConfirm(false);
    }).catch((error) => {
      setIsLoading(false);
      setConfirm(false);
    }) */
  }

  if(!showUsers){
    return <div>loading...</div>
  }

  return (
    <div className="mx-2.5">

    { confirm ?
      <div className="fixed top-0 left-20 z-50 bg-white/40 w-screen h-screen">

        <div className="bg-white max-w-72 px-9 pt-16 pb-8 fixed left-26 top-1/2 -translate-y-1/2">
            <p className="text-secondary-500 text-h2 pb-4">Are you sure you want to start a new conversation with the following users?</p>
            {
              userStore.users?.map(user => {
                return checked[user.id] ? <p className="text-secondary-500 text-h2 font-bold mb-2" key={ user.name }>{ user.name }</p> : null
              })
            }
            <div className="flex w-full mt-8 justify-center">
              <AButton onClick={ () => setConfirm(false) } className="px-5" variant="button-secondary-sm">Cancel</AButton>
              <AButton onClick={ handleCreateConversation } className="px-5 ml-5">Confirm</AButton>
            </div>
        </div>

      </div> : null }

      <div className="flex mt-7 gap-x-3.5 justify-between items-center">
        <AButton href="/chat" className="w-full" variant="button-secondary-sm">Cancel</AButton>
        <h2 className="text-secondary-500 font-bold text-h2 text-center"> New conversation</h2>
        <AButton onClick={ nextHandle } className="w-full" variant="button-primary-sm">Next</AButton>
      </div>

      <MSearch
        onInput={ searchHandler }
      />
    {
        showUsers.map((user,index) => {
        // const selected = discussionListed.id == discussions?.selected;
        return (
          <MUserTab
            key={user.id}
            onChange={handleOnChange}
            user={user}
            index={ index }
          />
        );
      })
    }
    </div>
  );
});

export default CUsersList;
