import { h } from 'preact';

import { useRef } from 'preact/hooks';
import ASvg from '../atoms/a-svg';
import DOMPurify from 'dompurify'
import { useStateValue } from '../../state';

const formatURL = (string) => {
  return string.replace(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g, (url) => '<a class="text-primary-500" href="' + url + '">' + url + '</a>')
}

const MMessageCard = ({ messageDetails }) => {

  const message = () => ({
    __html: DOMPurify.sanitize(formatURL(messageDetails.content))
  });

  const { auth } = useStateValue();

  
  const textRef = useRef(null);
  return (
    messageDetails.author.name===auth.name ?
      <div className='w-1/2 ml-auto my-14 rounded-2xl relative'>

          {
            messageDetails.assets.map( asset => {
              if(asset.type="jpg"){
                return <div className='flex justify-end'>
                    <img className='rounded-3xl object-cover' src={asset.src}/>
                    </div>
              }
            })
          }
        <div className='flex justify-between rounded-2xl mt-3 p-5.5 bg-secondary-200 items-center gap-x-10'>
          <p ref={textRef} dangerouslySetInnerHTML={message()} className='text-secondary-500 text-message1'/>
          <ASvg onClick={async () => {
            await navigator.clipboard.writeText(textRef.current.innerHTML)
            alert('Copied text to clipboard')
            
            }} className="cursor-pointer min-w-max w-7 h-7" src="download"/>
        </div>
        <p className='absolute -top-8 right-0 text-secondary-200 text-title6'>{messageDetails.date.toLocaleTimeString('en-us', 
            { hour: 'numeric', minute: '2-digit' })}</p>
        </div>:


      <div className='my-14 w-1/2 relative ml-24'>
        <div>
          <img className='rounded-full absolute -left-16 -top-8 w-12 h-12 object-cover' src={messageDetails.author.avatar}/>
          <p className='text-secondary-500 text-h2 absolute left-0 -top-7 font-medium'>{messageDetails.author.name}</p>
          <p className='text-secondary-200 text-title6 absolute right-9 -top-8'>{messageDetails.date.toLocaleTimeString('en-us', 
            { hour: 'numeric', minute: '2-digit' })}</p>

          {
            messageDetails.assets.map( asset => {
              if(asset.type="jpg"){
                return <img className='rounded-3xl max-w-xs' src={asset.src}/>
              }
            })
          }
          <p className='text-secondary-500 bg-white rounded-2xl mt-3 p-5.5 text-message1' dangerouslySetInnerHTML={message()}/>
        </div>

        
      </div>
  )
}

export default MMessageCard