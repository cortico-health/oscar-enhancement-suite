import { h } from 'preact';
import AInput from '../Atoms/AInput';
import ASvg from '../Atoms/ASvg';

import SearchLogo from "../../../../../resources/icons/search.svg"

const MSearch = ({ className = "",onInput,...props }) => {
  return (
    <AInput onInput={ onInput } name='search' { ...props } className={ `${className}` } inputClass="tw-rounded-l-full tw-rounded-r-full tw-pl-11 tw-py-3 tw-w-full">
      <img src={ SearchLogo } className='tw-absolute tw-cursor-pointer tw-pointer-events-auto tw-left-4 tw-top-1/2 -tw-translate-y-1/2' />
    </AInput>
  )
}

export default MSearch;