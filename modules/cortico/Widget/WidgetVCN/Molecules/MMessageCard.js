import DOMPurify from "dompurify";
import { useRef } from "preact/hooks";
import { useStore } from "../../store/mobx";
import ASvg from "../Atoms/ASvg";
import MMessageFile from "./MMessageFile";

import VerifiedLogo from "../../../../../resources/icons/verified.svg"
import MProfilePicture from "./MProfilePicture";

const formatURL = (string) => {
    return string.replace(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,(url) => '<a class="text-primary-500" href="' + url + '">' + url + '</a>')
}

const MMessageCard = ({ messageDetails }) => {
    const { file_url,author,body,created_date,from_user } = messageDetails;

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
            <div className="tw-mb-10">
                <p className='tw-text-secondary-200 tw-text-title6 tw-text-center'>{ (new Date(created_date)).toLocaleTimeString('en-us',
                    { hour: 'numeric',minute: '2-digit' }) }
                </p>
                <div className='tw-ml-auto tw-mt-3 tw-mb-1 tw-rounded-2xl tw-flex tw-flex-col tw-items-end'>
                    <div>
                        <div className="tw-flex tw-items-center tw-gap-5">
                            <p className='tw-text-secondary-500 tw-text-h1 tw-font-medium'>
                                { from_user.full_name }
                            </p>
                            <ASvg src={ VerifiedLogo } className="tw-text-white tw-bg-blue-600 tw-rounded-full -tw-ml-2 tw-w-6 tw-h-6" />
                        </div>
                        {/* TODO - Dwight: Change this once there is an info for clinic */ }
                        <p className='tw-text-secondary-300 tw-text-select2 tw-text-right'>
                            { from_user.full_name }'s Clinic
                        </p>
                    </div>
                    <div className='tw-flex tw-items-center tw-rounded-2xl tw-p-4 tw-mb-2 tw-mt-3 tw-bg-secondary-200 tw-gap-x-5 tw-max-w-[45%]'>
                        <p ref={ textRef } dangerouslySetInnerHTML={ message() } className='tw-text-secondary-500 tw-text-message1' />
                        {
                            file_url
                            &&
                            <ASvg onClick={ async () => {
                                await navigator.clipboard.writeText(textRef.current.innerHTML)
                                alert('Uploaded file to charts.')

                            } } className="tw-cursor-pointer tw-min-w-max tw-w-7 tw-h-7" src="download" />
                        }
                    </div>
                    <div className='tw-flex tw-justify-end'>
                        {/* TODO Justin or Dwight: this is just for view visual puposes, we will turn it back to site if it is workable */ }
                        {/* {
                            file_url
                            && */}
                            <MMessageFile dataURL={ file_url }
                                extension={ getFileExtension() }
                            isUser={ from_user.id === userStore.user.id }
                            />
                        {/* } */ }
                    </div>
                </div>
            </div>
            :
            <div className="tw-mb-10">
                <p className='tw-text-secondary-200 tw-text-title6 tw-text-center'>{ (new Date(created_date)).toLocaleTimeString('en-us',
                    { hour: 'numeric',minute: '2-digit' }) }</p>
                <div className='tw-mb-10 tw-mt-3 tw-mr-auto'>
                    <div>
                        <div className="tw-flex tw-items-center tw-gap-5">
                            <p className='tw-text-secondary-500 tw-text-h1 tw-font-medium'>
                                { from_user.full_name }
                            </p>
                            <ASvg src={ VerifiedLogo } className="tw-text-white tw-bg-blue-600 tw-rounded-full -tw-ml-2 tw-w-6 tw-h-6" />
                        </div>
                        <p className='tw-text-secondary-300 tw-text-select2'>
                            { from_user.full_name }'s Clinic
                        </p>
                    </div>
                    <div className="tw-flex tw-gap-3 tw-mt-3">
                        <MProfilePicture avatar={ author?.avatar } className="tw-relative tw-w-11 tw-h-11" />
                        <div className="tw-flex tw-flex-col tw-gap-2 tw-w-full">
                            <div className="tw-bg-white tw-rounded-2xl tw-p-4 tw-inline-block tw-w-[45%] tw-max-w-fit">
                                <p className='tw-text-secondary-500 tw-text-message1' dangerouslySetInnerHTML={ message() } />
                            </div>
                            <div className='tw-flex'>
                                {
                                    file_url
                                    &&
                                    <MMessageFile dataURL={ file_url }
                                        extension={ getFileExtension() }
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