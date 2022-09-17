import { PencilIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import DOMPurify from "dompurify";
import { createPortal } from "preact/compat";
import { useState } from "preact/hooks";
import MConfirmationModal from "./MConfirmationModal";

const formatURL = (string) => {
    return string.replace(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,(url) => '<a class="text-primary-500" href="' + url + '">' + url + '</a>')
}

const MMessageText = ({ isUser,body,sender,dateCreated,isEncounterPage }) => {
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [isLoading,setIsLoading] = useState(false);

    const modalContainer = document.getElementById('upload-confirm');

    const message = () => ({
        __html: DOMPurify.sanitize(formatURL(body))
    });


    const uploadToChartNotes = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <div className={ classNames("tw-max-w-[60%] tw-flex tw-items-center tw-gap-2",
                isUser && "tw-flex-row-reverse")
            }>
                <div className={ classNames("tw-rounded-2xl tw-p-4 tw-mb-2 tw-mt-3 tw-max-w-[80%]",
                    isUser ? "tw-bg-secondary-200" : "tw-bg-white")
                }>
                    <p className="tw-text-secondary-500 tw-text-message1 tw-break-words" dangerouslySetInnerHTML={ message() } />
                </div>
                { isEncounterPage && <div className="tw-p-2 hover:tw-bg-blue-500/60 hover:tw-rounded-full tw-w-10 tw-h-10">
                    <PencilIcon
                        className="tw-cursor-pointer"
                        onClick={ () => setIsModalOpen(true) }
                    />
                </div> }
            </div>

            { isModalOpen && createPortal(
                <MConfirmationModal
                    setIsOpen={ setIsModalOpen }
                    onConfirm={ uploadToChartNotes }
                    type="encounter"
                    isLoading={ isLoading } />
                ,modalContainer)
            }
        </>
    )
}

export default MMessageText

