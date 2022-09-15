import { useState } from "preact/hooks";
import { createPortal } from "preact/compat";
import { isAudio, isDocument, isHTML, isImage, isSheet, isTextFile } from "../../../../helper/determine-file-type";
import ASvg from "../Atoms/ASvg";

import DocumentLogo from "../../../../../resources/icons/document.svg";
import DocumentTextLogo from "../../../../../resources/icons/document-text.svg";
import TableLogo from "../../../../../resources/icons/table.svg";
import CodeLogo from "../../../../../resources/icons/code.svg";
import UploadLogo from "../../../../../resources/icons/upload.svg";
import DismissedLogo from "../../../../../resources/icons/dismissed.svg";
import MConfirmationModal from "./MConfirmationModal";
import { CEREBRO_URL } from "../../../../Utils/VcnUtils";
import { cleanFileName } from "../../../../Utils/Utils";
import classNames from "classnames";

const ShowSVGFile = ({ url, icon, name, isUser }) => {
    return (
        <div className={`tw-flex tw-items-center tw-gap-2 tw-rounded-2xl tw-p-2 ${isUser ? "tw-bg-secondary-200" : "tw-bg-slate-200"}`}>
            <ASvg src={icon} className="tw-h-12 tw-w-12" />
            <a href={url} target="_blank" className='tw-text-secondary-500 tw-text-sm'>{name || "File"}</a>
        </div>
    )
}

const ShowImgFile = ({ url }) => {
    const [confirm, setConfirm] = useState(false);

    return (
        <>
            {
                confirm ?
                    (
                        <div className="tw-fixed tw-z-50 tw-top-0 tw-left-0 tw-bottom-0 tw-right-0 tw-bg-black/50 tw-w-screen tw-h-screen tw-cursor-pointer"
                            onClick={() => setConfirm(false)}
                        >
                            <div className="tw-text-center tw-fixed tw-left-1/2 -tw-translate-x-2/4 tw-top-1/2 -tw-translate-y-1/2">
                                <img className='tw-rounded-2xl tw-object-cover tw-h-auto' src={url} />
                            </div>
                        </div >
                    )
                    : null
            }
            <img className='tw-rounded-2xl tw-object-cover tw-max-w-3xs tw-border tw-border-zinc-200 tw-cursor-pointer' src={url} onClick={() => setConfirm(true)} />
        </>
    );
}

const MMessageFile = ({ dataURL, name, extension, isUser }) => {
    name = cleanFileName(name);
    const fileUrl = dataURL.startsWith("/") ? `${CEREBRO_URL}${dataURL}` : dataURL;

    const [isUploadOpen, setIsUploadOpen] = useState(false);
    const [isDismissOpen, setIsDismissOpen] = useState(false);

    const modalContainer = document.getElementById('upload-confirm');

    const onUpload = () => {
        console.log("File Uploaded to Oscar");
    }

    const onDismiss = () => {
        console.log("File is being dismissed");
    }

    return (
        <>
            <div className={ classNames("tw-flex tw-items-center tw-gap-2",!isUser) }>
                { isUser && <div className="tw-flex tw-justify-between tw-items-end tw-gap-2">
                    <div className="tw-p-2 hover:tw-bg-green-500/60 hover:tw-rounded-full tw-w-10 tw-h-10">
                        <ASvg src={ UploadLogo }
                            className="tw-cursor-pointer"
                            onClick={ () => setIsUploadOpen(true) }
                        />
                    </div>

                    <div className="tw-p-2 hover:tw-bg-red-500/60 hover:tw-rounded-full tw-w-10 tw-h-10">
                        <ASvg src={ DismissedLogo }
                            className="tw-cursor-pointer"
                            onClick={ () => setIsDismissOpen(true) }
                        />
                    </div>
                </div> }

                {
                    /* If there is missing fields */
                    (!fileUrl || !name || !extension) && null
                }
                {
                    isImage(extension)
                    &&
                    <ShowImgFile url={fileUrl} />
                }
                {
                    isAudio(extension)
                    &&
                    <audio controls>
                        <source src={fileUrl} />
                        Your browser does not support the audio element.
                    </audio>
                }
                {
                    isDocument(extension)
                    &&
                    <ShowSVGFile url={fileUrl} icon={DocumentLogo} name={name} isUser={isUser} />
                }
                {
                    isTextFile(extension)
                    &&
                    <ShowSVGFile url={fileUrl} icon={DocumentTextLogo} name={name} isUser={isUser} />
                }
                {
                    isSheet(extension)
                    &&
                    <ShowSVGFile url={fileUrl} icon={TableLogo} name={name} isUser={isUser} />
                }
                {
                    isHTML(extension)
                    &&
                    <ShowSVGFile url={fileUrl} icon={CodeLogo} name={name} isUser={isUser} />
                }

                { !isUser && <div className="tw-flex tw-justify-between tw-items-end tw-gap-2">
                    <div className="tw-p-2 hover:tw-bg-green-500/60 hover:tw-rounded-full tw-w-10 tw-h-10">
                        <ASvg src={ UploadLogo }
                            className="tw-cursor-pointer"
                            onClick={ () => setIsUploadOpen(true) }
                        />
                    </div>

                    <div className="tw-p-2 hover:tw-bg-red-500/60 hover:tw-rounded-full tw-w-10 tw-h-10">
                        <ASvg src={ DismissedLogo }
                            className="tw-cursor-pointer"
                            onClick={ () => setIsDismissOpen(true) }
                        />
                    </div>
                </div> }
            </div>

            {isUploadOpen && createPortal(
                <MConfirmationModal
                    setIsOpen={setIsUploadOpen}
                    onConfirm={onUpload}
                    type="upload" />
                , modalContainer)
            }

            {isDismissOpen && createPortal(
                <MConfirmationModal
                    setIsOpen={setIsDismissOpen}
                    onConfirm={onDismiss}
                    type="dismiss" />
                , modalContainer)
            }
        </>
    )
}

export default MMessageFile;