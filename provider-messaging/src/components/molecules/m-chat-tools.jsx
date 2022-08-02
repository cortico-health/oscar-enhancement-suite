import { h } from 'preact';
import { useMemo, useState } from 'preact/hooks';
import { useStore } from '../../state';
import { multipleObjectDataFormatting } from "../../helper/multipleDataFormatting";
import AButton from '../atoms/a-button';
import ASvg from '../atoms/a-svg';
import MSearch from './m-search';
import useUtils from '../../hooks/useUtils';

const MChatTools = ({ setDiscussion,selectedConversationInfo,...props }) => {
  const { getOtherMembersName } = useUtils();

  /* TODO: to be edited since patient is not prioritize now. */
  /* const patient = useMemo(() => {
    if(!patients.selected){
      return patients?.all.find( pat => pat.id == discussions?.all.find(disc => disc?.id== discussions?.selected).patientId)
    }
    return null
  },[patients]); */

  /* const searchHandler = (e) => {
    const discussion =  discussions?.all.find(disc => disc?.id== discussions?.selected)
    let filteredData = discussion.messages.filter( message => message.content.toLowerCase().includes(e.target.value.toLowerCase()) || message.author.name.includes(e.target.value.toLowerCase()) )
    setDiscussion({...discussion, messages: filteredData} )
  } */

  const numberOfAssets = [0,0];

  return (
    <div {...props} className='flex justify-between items-center my-10 mx-9 lg:mx-12 pb-10 border-b border-secondary-100'>
      <div className='flex gap-x-2.5 items-center'>
        <div className='w-fit'>
          <h1 className='text-secondary-500 font-bold text-title3'>
            { multipleObjectDataFormatting(getOtherMembersName(selectedConversationInfo?.members)) }
          </h1>
          {/* TODO: will uncomment this if patient will be available. */}
          {/* {
            patient==null ? null :
            <p className='text-select2 text-secondary-300'> RE: {
              `${patient.firstName} ${patient.lastName}, ${patient.facility}`
            } </p>
          } */}
        </div>
        <ASvg src="add" />
      </div>

      <div className='flex gap-x-1'>

        <AButton
          href={location.hash == "#assets" ? '#' : '#assets'}
          className={`lg:flex hidden ${location.hash == "#assets" ? 'bg-primary-500 text-white child:first:child:stroke-white' : 'text-secondary-500'}`}
          variant='tab'
        >
          <ASvg src="files" />
          <p className='font-medium text-h3'>{`${numberOfAssets[0]}/${numberOfAssets[0] + numberOfAssets[1]}`}</p>
        </AButton>

        <AButton className='lg:flex hidden' variant='tab'>
          <ASvg src="links" />
          <p className='text-secondary-500 font-medium text-h3'>{`${numberOfAssets[1]}/${numberOfAssets[0] + numberOfAssets[1]}`}</p>
        </AButton>

        <MSearch placeholder="Search this chat" /* onInput={searchHandler} */ />
      </div>

    </div>
  )
}

export default MChatTools