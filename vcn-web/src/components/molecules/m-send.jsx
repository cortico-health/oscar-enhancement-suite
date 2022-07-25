import { h } from 'preact';
import AInput from '../atoms/a-input';
import ASvg from '../atoms/a-svg';

const MSend = ({ className = "", ...props}) => {

  return (
    <AInput type='textarea' name='send' {...props} className={`m-send ${className}`}>
      <label htmlFor="file">
        <ASvg className='absolute cursor-pointer pointer-events-auto left-2 top-9 -translate-y-1/2' src="attach"/>
        <input type="file" id="file" className='hidden' name="file" accept="image/gif,image/jpeg,image/jpg,image/png" multiple="" data-original-title="upload photos"/>
      </label>
      <div class="mb-1">
        <ASvg className='absolute cursor-pointer pointer-events-auto right-2 top-9 -translate-y-1/2' src="send"/>
      </div>
    </AInput>
  )
}

export default MSend