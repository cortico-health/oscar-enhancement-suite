import DOMPurify from "dompurify";
import { useRef } from "preact/hooks";
import { PencilIcon } from "@heroicons/react/outline";
import { useStore } from "../../store/mobx";
import ASvg from "../Atoms/ASvg";
import MMessageFile from "./MMessageFile";

import VerifiedLogo from "../../../../../resources/icons/verified.svg"
import MProfilePicture from "./MProfilePicture";

const formatURL = (string) => {
    return string.replace(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g, (url) => '<a class="text-primary-500" href="' + url + '">' + url + '</a>')
}

const MMessageCard = ({ messageDetails, readHistory }) => {
    const { files, author, body, created_date, from_user } = messageDetails;

    const message = () => ({
        __html: DOMPurify.sanitize(formatURL(body))
    });

    const { userStore } = useStore();

    const textRef = useRef(null);

    const getReaderNames = (readHistory) => {
        return readHistory.map((message) => message.user_name).join(", ");
    }

    return (
        <div>
            {
                from_user.id === userStore.user.id
                    ?
                    <div className="tw-mt-10">
                        <p className='tw-text-secondary-200 tw-text-title6 tw-text-center'>{(new Date(created_date)).toLocaleTimeString('en-us',
                            { hour: 'numeric', minute: '2-digit' })}
                        </p>
                        <div className='tw-ml-auto tw-mt-3 tw-mb-1 tw-rounded-2xl tw-flex tw-flex-col tw-items-end'>
                            <div>
                                <div className="tw-flex tw-items-center tw-gap-5">
                                    <p className='tw-text-secondary-500 tw-text-h1 tw-font-medium'>
                                        {from_user.full_name}
                                    </p>
                                    <ASvg src={VerifiedLogo} className="tw-text-white tw-bg-blue-600 tw-rounded-full -tw-ml-2 tw-w-6 tw-h-6" />
                                </div>
                                {/* TODO - Dwight: Change this once there is an info for clinic */}
                                <p className='tw-text-secondary-300 tw-text-select2 tw-text-right'>
                                    {from_user.clinic_name}
                                </p>
                            </div>
                            {
                                body &&
                                (
                                    <div className="tw-max-w-[60%] tw-flex tw-items-center tw-gap-2 tw-flex-row-reverse">
                                        <div className='tw-rounded-2xl tw-p-4 tw-mb-2 tw-mt-3 tw-bg-secondary-200 tw-max-w-[80%]'>
                                            <p ref={ textRef } dangerouslySetInnerHTML={ message() } className='tw-text-secondary-500 tw-text-message1' />
                                        </div>
                                        <div className="tw-p-2 hover:tw-bg-blue-500/60 hover:tw-rounded-full tw-w-10 tw-h-10">
                                            <PencilIcon
                                                className="tw-cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                )

                            }
                            {
                                files.map(file => {
                                    return (
                                        <div className='tw-flex tw-justify-end tw-mt-3'>
                                            <MMessageFile
                                                id={file.id}
                                                dataURL={file.data}
                                                name={file.name}
                                                extension={file.extension}
                                                status={file.status}
                                                isUser={from_user.id === userStore.user.id}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    :
                    <div className="tw-mt-10">
                        <p className='tw-text-secondary-200 tw-text-title6 tw-text-center'>{(new Date(created_date)).toLocaleTimeString('en-us',
                            { hour: 'numeric', minute: '2-digit' })}</p>
                        <div className='tw-mt-3 tw-mr-auto'>
                            <div>
                                <div className="tw-flex tw-items-center tw-gap-5">
                                    <p className='tw-text-secondary-500 tw-text-h1 tw-font-medium'>
                                        {from_user.full_name}
                                    </p>
                                    <ASvg src={VerifiedLogo} className="tw-text-white tw-bg-blue-600 tw-rounded-full -tw-ml-2 tw-w-6 tw-h-6" />
                                </div>
                                <p className='tw-text-secondary-300 tw-text-select2'>
                                    {from_user.clinic_name}
                                </p>
                            </div>
                            <div className="tw-flex tw-gap-3 tw-mt-3">
                                <MProfilePicture avatar={author?.avatar} className="tw-relative tw-w-11 tw-h-11" />
                                <div className="tw-flex tw-flex-col tw-gap-2 tw-w-full">
                                    {
                                        body &&
                                        (
                                            <div className="tw-max-w-[60%] tw-flex tw-items-center tw-gap-2">
                                                <div className="tw-bg-white tw-rounded-2xl tw-p-4 tw-inline-block tw-max-w-[80%]">
                                                    <p className='tw-text-secondary-500 tw-text-message1' dangerouslySetInnerHTML={ message() } />
                                                </div>
                                                <div className="tw-p-2 hover:tw-bg-blue-500/60 hover:tw-rounded-full tw-w-10 tw-h-10">
                                                    <PencilIcon
                                                        className="tw-cursor-pointer"
                                                    />
                                                </div>
                                            </div>
                                        )

                                    }
                                    {
                                        files.map(file => {
                                            return (
                                                <div className='tw-flex tw-mb-2'>
                                                    <MMessageFile
                                                        id={file.id}
                                                        dataURL={file.data}
                                                        name={file.name}
                                                        extension={file.extension}
                                                        status={file.status}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            }
            {
                readHistory && readHistory.length > 0 &&
                <div className="tw-text-right tw-text-xs tw-text-secondary-200 tw-mb-2">Seen by {getReaderNames(readHistory)}</div>
            }
        </div>
    )
}

export default MMessageCard;