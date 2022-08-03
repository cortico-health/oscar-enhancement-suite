import { h } from 'preact';

import { useRef } from 'preact/hooks';
import ASvg from '../atoms/a-svg';
import DOMPurify from 'dompurify'
import { useStore } from '../../state';
import MProfilePicture from './m-profile-picture';

const formatURL = (string) => {
  return string.replace(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g, (url) => '<a class="text-primary-500" href="' + url + '">' + url + '</a>')
}

const MMessageCard = ({ messageDetails }) => {

  const message = () => ({
    __html: DOMPurify.sanitize(formatURL(messageDetails.body))
  });

  const { userStore } = useStore();

  const textRef = useRef(null);
  return (
    messageDetails.from_user.id === userStore.user.id ?
      <div>
        <p className='text-secondary-200 text-title6 text-center'>{(new Date(messageDetails.created_date)).toLocaleTimeString('en-us',
          { hour: 'numeric', minute: '2-digit' })}</p>
        <div className='w-1/2 ml-auto mt-3 mb-14 rounded-2xl relative'>
          {
            messageDetails?.assets && messageDetails?.assets.map(asset => {
              if (asset.type = "jpg") {
                return <div className='flex justify-end'>
                  <img className='rounded-3xl object-cover' src={asset.src} />
                </div>
              }
            })
          }
          <div className='flex justify-between rounded-2xl p-5.5 bg-secondary-200 items-center gap-x-10'>
            <p ref={textRef} dangerouslySetInnerHTML={message()} className='text-secondary-500 text-message1' />
            <ASvg onClick={async () => {
              await navigator.clipboard.writeText(textRef.current.innerHTML)
              alert('Copied text to clipboard')

            }} className="cursor-pointer min-w-max w-7 h-7" src="download" />
          </div>
        </div>
      </div>
      :
      <div>
        <p className='text-secondary-200 text-title6 text-center'>{(new Date(messageDetails.created_date)).toLocaleTimeString('en-us',
          { hour: 'numeric', minute: '2-digit' })}</p>
        <div className='mb-14 w-1/2 mt-3'>
          <div className="flex items-center tw-gap-3">
            <div>
              <p className='text-secondary-500 text-h1 font-medium'>
                { messageDetails.from_user.full_name }
              </p>
              {/* TODO: Change this once there is an info for clinic */ }
              <p className='text-secondary-300 text-select2'>
                { messageDetails.from_user.full_name }'s Clinic
              </p>
            </div>
            <div className="text-white bg-blue-600 rounded-full -tw-ml-2">
              <ASvg src="verified" />
            </div>
          </div>
          <div className="flex mt-3">
            <MProfilePicture avatar={ messageDetails.author?.avatar } className="relative w-11 h-11" />
            {
              messageDetails?.assets && messageDetails.assets.map(asset => {
                if (asset.type = "jpg") {
                  return <img className='rounded-3xl max-w-xs' src={asset.src} />
                }
              })
            }
            <p className='text-secondary-500 bg-white rounded-2xl ml-3 p-5.5 text-message1' dangerouslySetInnerHTML={message()} />
          </div>
        </div>
      </div>
  )
}

export default MMessageCard