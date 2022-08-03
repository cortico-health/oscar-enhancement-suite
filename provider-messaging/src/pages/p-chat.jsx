import { observer } from "mobx-react-lite";
import { h } from "preact";
import { useEffect,useState } from "preact/hooks";
import ASvg from "../components/atoms/a-svg";
import CConversationList from "../components/organisms/c-conversation-list";
import CFilesList from "../components/organisms/c-files-list";
import CMessageList from "../components/organisms/c-message-list";
import CPatientCard from "../components/organisms/c-patient-card";

import { useStore } from "../state";

const PChat = () => {

  const { patientStore } = useStore();

  useEffect(() => {
    patientStore.getPatientList();
  },[])

  if (!patientStore.patients.all?.length) {
    return <div>loading...</div>
  }

  return (
  <div className="flex">
    <div className="hidden h-screen lg:block" style={{ minWidth: "350px" }}>
      <CPatientCard
        className="mt-7 pb-6 px-5.5 h-min border-b border-secondary-100"
      />
      {
          location.hash == "#assets" ?
            <CFilesList />
            :
            <>
              <div className="flex mt-7 mx-5 justify-between items-center">
                <h2 className="text-secondary-500 font-bold text-h2">
                  {
                    patientStore.patients?.selected ? <>
                      Conversations on
                      <span className="text-primary-500">
                        { " " + patientStore.patients?.selected.firstName
                          + " " + patientStore.patients?.selected.lastName }
                      </span>
                    </>
                      : "All conversations"
                  }
                </h2>
                <a href="/add-to-chat">
                  <ASvg className="cursor-pointer" src="add" />
                </a>
              </div>
              <CConversationList />
            </>
      }

    </div>
    <CMessageList />
  </div>
  )
};

export default observer(PChat);
