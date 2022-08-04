import { h } from 'preact';
import AInput from '../atoms/a-input';
import ASvg from '../atoms/a-svg';

const MSend = ({ handlers, className, ...props}) => {

  return (
    <AInput onKeyDown={handlers.onSend} type='textarea' name='send' {...props} className={`m-send ${className}`}>
      <label htmlFor="file">
        <ASvg className='absolute cursor-pointer pointer-events-auto left-2 top-[1.2rem]' src="attach"/>
        <input onChange={handlers.onUpload} type="file" id="file" className='hidden' name="file" accept="image/gif,image/jpeg,image/jpg,image/png" multiple="" data-original-title="upload photos"/>
      </label>
      <div onClick={handlers.onSend} >
        <ASvg className='absolute cursor-pointer pointer-events-auto right-2 top-[1.2rem]' src="send"/>
      </div>
    </AInput>
  )
}

export default MSend