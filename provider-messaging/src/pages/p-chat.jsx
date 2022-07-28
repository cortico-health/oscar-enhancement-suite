import { observer } from "mobx-react-lite";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import ASvg from "../components/atoms/a-svg";
import CDiscussionList from "../components/organisms/c-discussion-list";
import CFilesList from "../components/organisms/c-files-list";
import CMessageList from "../components/organisms/c-message-list";
import CPatientCard from "../components/organisms/c-patient-card";

import { useStore } from "../state";

const PChat = observer(() => {
  
  const { store } = useStore();
  
  const { patients, getPatients } = useStore();

  useEffect(() => {
    getPatients();
  },[])

  if(!patients?.all.length){
    return <div>loading...</div>
  }

  return (
  <div className="flex">
    <div className="hidden h-screen lg:block" style={{ minWidth: "350px" }}>
      <CPatientCard
        className="mt-7 pb-6 px-5.5 h-min border-b border-secondary-100"
      />
      {
        location.hash== "#assets" ? <CFilesList />: <>
        <div className="flex mt-7 mx-5 justify-between items-center">
          <h2 className="text-secondary-500 font-bold text-h2">
            {
              patients?.selected ? <>
                Conversations on
                <span className="text-primary-500">
                  {" "+ patients?.all.find( patient => patient.id == patients?.selected).firstName
                  +" " + patients?.all.find( patient => patient.id == patients?.selected).lastName}
                </span>
                </>
                : "All conversations"
            }
          </h2>
          <ASvg className="cursor-pointer" src="add" />
        </div>
        <CDiscussionList />
        </>
      }
      
    </div>
    <CMessageList />
  </div>
  )
});

export default PChat;
