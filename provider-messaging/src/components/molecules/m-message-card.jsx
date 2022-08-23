import { h } from 'preact';

import { useRef } from 'preact/hooks';
import ASvg from '../atoms/a-svg';
import DOMPurify from 'dompurify'
import { useStore } from '../../state';
import MProfilePicture from './m-profile-picture';
import MMessageFile from './m-message-file';

const formatURL = (string) => {
  return string.replace(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g, (url) => '<a class="text-primary-500" href="' + url + '">' + url + '</a>')
}

const MMessageCard = ({ messageDetails }) => {
  const { file_url, author, body, created_date, from_user } = messageDetails;

  const message = () => ({
    __html: DOMPurify.sanitize(formatURL(body))
  });

  const getFileExtension = () => {
    if (file_url) return file_url.split(".").pop().toLowerCase()
    return ''
  }

  const { userStore } = useStore();

  const textRef = useRef(null);
  return (
    from_user.id === userStore.user.id
      ?
      <div className="mb-10">
        <p className='text-secondary-200 text-title6 text-center'>{(new Date(created_date)).toLocaleTimeString('en-us',
          { hour: 'numeric', minute: '2-digit' })}
        </p>
        <div className='ml-auto mt-3 mb-1 rounded-2xl flex flex-col items-end'>
          <div>
            <div className="flex items-center tw-gap-3">
              <p className='text-secondary-500 text-h1 font-medium'>
                {from_user.full_name}
              </p>
              <div className="text-white bg-blue-600 rounded-full -tw-ml-2">
                <ASvg src="verified" />
              </div>
            </div>
            {/* TODO - Dwight: Change this once there is an info for clinic */}
            <p className='text-secondary-300 text-select2 text-right'>
              {from_user.full_name}'s Clinic
            </p>
          </div>
          <div className='flex items-center rounded-2xl p-4 mb-2 mt-3 bg-secondary-200 gap-x-5 max-w-[45%]'>
            <p ref={textRef} dangerouslySetInnerHTML={message()} className='text-secondary-500 text-message1' />
            {
              file_url
              &&
              <ASvg onClick={async () => {
                await navigator.clipboard.writeText(textRef.current.innerHTML)
                alert('Uploaded file to charts.')

              }} className="cursor-pointer min-w-max w-7 h-7" src="download" />
            }
          </div>
          <div className='flex justify-end'>
            {
              file_url
              &&
              <MMessageFile dataURL={file_url}
                extension={getFileExtension()}
              />
            }
          </div>
        </div>
      </div>
      :
      <div className="mb-10">
        <p className='text-secondary-200 text-title6 text-center'>{(new Date(created_date)).toLocaleTimeString('en-us',
          { hour: 'numeric', minute: '2-digit' })}</p>
        <div className='mb-10 mt-3 mr-auto'>
          <div>
            <div className="flex items-center tw-gap-3">
              <p className='text-secondary-500 text-h1 font-medium'>
                {from_user.full_name}
              </p>
              <div className="text-white bg-blue-600 rounded-full -tw-ml-2">
                <ASvg src="verified" />
              </div>
            </div>
            {/* TODO - Dwight: Change this once there is an info for clinic */}
            <p className='text-secondary-300 text-select2'>
              {from_user.full_name}'s Clinic
            </p>
          </div>
          <div className="flex gap-3 mt-3">
            <MProfilePicture avatar={author?.avatar} className="relative w-11 h-11" />
            <div className="flex flex-col gap-2 w-full">
              <div className="bg-white rounded-2xl p-4 inline-block w-[45%] max-w-fit">
                <p className='text-secondary-500 text-message1' dangerouslySetInnerHTML={message()} />
              </div>
              <div className='flex'>
                {
                  file_url
                  &&
                  <MMessageFile dataURL={file_url}
                    extension={getFileExtension()}
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MMessageCard;