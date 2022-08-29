import { h } from 'preact';

import AButton from '../Atoms/AButton';
import useUtils from '../../../../Hooks/useUtils';

import { multipleObjectDataFormatting } from "../../../../helper/name-formatting";

import AddLogo from "../../../../../resources/icons/add.svg";
import FilesLogo from "../../../../../resources/icons/files.svg";
import LinksLogo from "../../../../../resources/icons/links.svg";
import MSearch from './MSearch';

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
    <div { ...props } className='tw-flex tw-justify-between tw-items-center tw-mt-10 tw-mb-2 tw-mx-5 tw-pb-10 tw-border-b tw-border-secondary-100'>
      <div className='tw-flex tw-gap-x-2.5 tw-items-center'>
        <div className='tw-w-fit'>
          <h1 className='tw-text-secondary-500 tw-font-bold tw-text-title3'>
            { multipleObjectDataFormatting(getOtherMembersName(selectedConversationInfo?.members)) }
          </h1>
          {/* TODO: will uncomment this if patient will be available. */ }
          {/* {
            patient==null ? null :
            <p className='text-select2 text-secondary-300'> RE: {
              `${patient.first_name} ${patient.last_name}, ${patient.facility}`
            } </p>
          } */}
        </div>
        <img src={ AddLogo } />
      </div>

      <div className='tw-flex tw-gap-x-4'>
        <AButton
          href={ location.hash == "#assets" ? '#' : '#assets' }
          className={ `tw-flex ${location.hash == "#assets" ? 'tw-bg-primary-500 tw-text-white child:first:child:tw-stroke-white' : 'tw-text-secondary-500'}` }
          variant='tab'
        >
          <img src={ FilesLogo } className="tw-w-8" />
          <p className='tw-font-medium tw-text-h2'>{ `${numberOfAssets[0]}/${numberOfAssets[0] + numberOfAssets[1]}` }</p>
        </AButton>

        <AButton className='tw-flex' variant='tab'>
          <img src={ LinksLogo } className="tw-w-8" />
          <p className='tw-text-secondary-500 tw-font-medium tw-text-h2'>{ `${numberOfAssets[1]}/${numberOfAssets[0] + numberOfAssets[1]}` }</p>
        </AButton>

        <MSearch placeholder="Search this chat"/*  onInput={ searchHandler } */ />
      </div>

    </div>
  )
}

export default MChatTools