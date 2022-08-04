import { h } from 'preact';
import AInput from '../atoms/a-input';
import ASvg from '../atoms/a-svg';

const MSearch = ({className, onInput, ...props}) => {

  return (
    <AInput onInput={onInput} style={{ minWidth: '140px'}} name='search' {...props} className={`m-search ${className ? className: ''}`}>
      <ASvg className='absolute cursor-pointer pointer-events-auto left-4 top-1/2 -translate-y-1/2' src='search'/>
    </AInput>
  )
}

export default MSearch