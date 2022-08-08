import { useEffect, useState } from "preact/hooks";
import React from "react";
import { useStore } from "../../state";
import AButton from "../atoms/a-button";
import ASvg from "../atoms/a-svg";
import CConversationList from "../organisms/c-conversation-list";

const MMobileNav = ({ /* patient,  */setIsOpened }) => {
  const { conversationStore } = useStore();

  const [conversation,setConversation] = useState(undefined);

  const [ numberOfAssets, setNumberOfAssets ] = useState([0,0]);

  useEffect(() => {
    const { conversations } = conversationStore;
    if (conversations?.length && conversations?.selected) {
      setConversation(conversations?.find(disc => disc.id == conversations?.selected))
      setIsOpened(false)
    }
  },[conversationStore.conversations])

  useEffect(() => {
    if (conversation) {
      setNumberOfAssets(conversation.messages.reduce((acc,current) => {
        acc[0]+=current.assets.length
        acc[1]+=current.links.length
          return acc;
        },[0,0]))
    }
  },[conversation])

  return (
    <div style={ { width: '425px' } } className="m-mobile-nav relative overflow-y-auto h-screen bg-white rounded-r-lg px-5 pt-5.5">
      <ASvg className="cursor-pointer tw-absolute tw-top-2 tw-right-2" src="exit" onClick={ () => setIsOpened(false) } />
      <div className="mb-2" />
      <div className="flex mb-5 gap-x-5 flex-row-reverse items-center">

        {/*
          TODO Dwight - Patient: Return this if this is functional
          { patient ?
          <>
            {
              patient?.image ? (
                <img className="h-12.5 min-w-12.5" src={patient?.image} />
              ) : (
                <ASvg className="first:child:fill-primary-300 min-w-12.5 min-h-12.5" src="avatar"/>
              )
            }
            <div>
              <h1 className="text-h1 mb-0.5 text-secondary-500 font-medium">
                {patient?.firstName + " " + patient?.lastName}
              </h1>
              <h2 className="text-h3 text-secondary-500">
                {patient?.facility}
              </h2>
            </div>
          </> : <p>No patient selected - no figma design</p>
          }
        */}

        <AButton className='py-2.5' variant='tab'>
          <ASvg src="files"/>
          <p className='text-secondary-500 font-medium text-h3'>{ numberOfAssets[0] }</p>
        </AButton>

        <AButton className='py-2.5' variant='tab'>
          <ASvg src="links"/>
          <p className='text-secondary-500 font-medium text-h3'>{ numberOfAssets[1] }</p>
        </AButton>

      </div>
      <div className="flex justify-center gap-x-2.5 mb-8">
        {/*
          TODO Dwight - Patient: Return this if this is functional
          <AButton
            onClick={() => setIsOpened(false)}
            href="/select"
            className="w-full flex gap-x-2.5 font-medium text-h3"
            variant="button-primary-sm"
          >
            {" "}
            <ASvg className="w-3.5 child:stroke-white" src="users" /> Switch
            Patient{" "}
          </AButton>
        */}
        <AButton
          onClick={() => setIsOpened(false)}
          href="/chat"
          className="w-full flex gap-x-2.5 font-medium text-h3"
          variant="button-primary-sm"
        >
          {" "}
          <ASvg className="w-3.5" src="selected" /> General Chat{" "}
        </AButton>
      </div>

      <h2 className="text-secondary-500 font-bold text-h3">Directory</h2>

      <CConversationList />

    </div>
  );
};

export default MMobileNav;
