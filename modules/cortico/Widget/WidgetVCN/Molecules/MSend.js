import { h } from 'preact';
import AInput from '../Atoms/AInput';

import AttachLogo from "../../../../../resources/icons/attach.svg";
import SendLogo from "../../../../../resources/icons/send.svg";

const MSend = ({ handlers,className,...props }) => {

    return (
        <AInput onKeyDown={ handlers.onSend } type='textarea' name='send' { ...props } className={ className }
            inputClass="tw-rounded-l-full tw-rounded-r-full tw-px-16 tw-py-4">
            <label htmlFor="file">
                <img className='tw-absolute tw-cursor-pointer tw-pointer-events-auto tw-left-2 tw-top-[1.2rem]' src={ AttachLogo } />
                <input onChange={ handlers.onUpload } type="file" id="file" className='tw-hidden' name="file"
                    multiple=""
                    data-original-title="upload photos"
                    accept="image/jpeg,.png,.doc,.docx,.mp3,.pdf,.txt,.csv,.xls,.xlsx,.html,.htm"
                />
            </label>
            <div onClick={ handlers.onSend } >
                <img className='tw-absolute tw-cursor-pointer tw-pointer-events-auto tw-right-2 tw-top-[1.2rem]' src={ SendLogo } />
            </div>
        </AInput>
    )
}

export default MSend