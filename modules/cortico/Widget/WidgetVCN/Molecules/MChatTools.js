import AButton from '../Atoms/AButton';
import useUtils from '../../../../Hooks/useUtils';

import { multipleObjectDataFormatting } from "../../../../helper/name-formatting";

import AddLogo from "../../../../../resources/icons/add.svg";
import FilesLogo from "../../../../../resources/icons/files.svg";
import MSearch from './MSearch';

const MChatTools = ({ fileStats,conversation,patient,loading,...props }) => {
  const { getOtherMembersName } = useUtils();

  return (
    <div {...props} className='tw-flex tw-justify-between tw-items-center tw-mt-10 tw-mb-2 tw-mx-5 tw-pb-10 tw-border-b tw-border-secondary-100'>
      <div className='tw-flex tw-gap-x-2.5 tw-items-center'>
        <div className='tw-w-fit'>
          { !loading ? (
            <>
              <h1 className='tw-text-secondary-500 tw-font-bold tw-text-title3'>
                { multipleObjectDataFormatting(getOtherMembersName(conversation?.members)) }
              </h1>
              {
                patient ? <p className='tw-text-gray-500 tw-text-title-4'>{ `${patient.first_name} ${patient.last_name}` }</p> : ''
              }
            </>
          )
            :
            <div class="tw-animate-pulse tw-flex tw-space-x-4">
              <div class="tw-h-4 tw-w-48 tw-bg-slate-200 tw-rounded-md"></div>
            </div>
          }
        </div>
        <img src={AddLogo} />
      </div>

      <div className='tw-flex tw-gap-x-4'>
        <AButton
          href={location.hash == "#assets" ? '#' : '#assets'}
          className='tw-flex'
          variant='tab'
        >
          <img src={FilesLogo} className="tw-w-8" />
          { !loading ? <p className='tw-font-medium tw-text-h2'>{ fileStats ? (
            `${fileStats.upload_count} / ${fileStats.total_files - fileStats.dismiss_count}`
          ) : '0/0' }</p> : (
            <div class="tw-animate-pulse tw-flex tw-space-x-4">
              <div class="tw-h-4 tw-w-8 tw-bg-slate-200 tw-rounded-md"></div>
            </div>
          ) }
        </AButton>

        { !loading && <MSearch placeholder="Search this chat" /> }
      </div>

    </div>
  )
}

export default MChatTools