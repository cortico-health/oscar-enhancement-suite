import { useState } from "preact/hooks";
import { isAudio,isDocument,isHTML,isImage,isSheet,isTextFile } from "../../../../helper/determine-file-type";
import { cerebroUrl } from "../../../../Utils/VcnUtils";
import ASvg from "../Atoms/ASvg";

import DocumentLogo from "../../../../../resources/icons/document.svg";
import DocumentTextLogo from "../../../../../resources/icons/document-text.svg";
import TableLogo from "../../../../../resources/icons/table.svg";
import CodeLogo from "../../../../../resources/icons/code.svg";

const ShowSVGFile = ({ url,icon,name,isUser }) => {
    return (
        <div className={ `tw-flex tw-items-center tw-gap-4 tw-rounded-2xl tw-p-4 ${isUser ? "tw-bg-secondary-200" : "tw-bg-white"}` }>
            <ASvg src={ icon } className="tw-h-12 tw-w-12" />
            <a href={ url } target="_blank" className='tw-text-secondary-500 tw-text-sm'>{ name || "File" }</a>
            { isUser && <ASvg src="download" className="tw-cursor-pointer tw-w-7 tw-h-7" /> }
        </div>
    )
}

const ShowImgFile = ({ url }) => {
    const [confirm,setConfirm] = useState(false);
    return (
        <>
            {
                confirm ?
                    (
                        <div className="tw-fixed tw-z-50 tw-top-0 tw-left-0 tw-bottom-0 tw-right-0 tw-bg-black/50 tw-w-screen tw-h-screen tw-cursor-pointer"
                            onClick={ () => setConfirm(false) }
                        >
                            <div className="tw-text-center tw-fixed tw-left-1/2 -tw-translate-x-2/4 tw-top-1/2 -tw-translate-y-1/2">
                                <img className='tw-rounded-2xl tw-object-cover tw-h-auto' src={ url } />
                            </div>
                        </div >
                    )
                    : null
            }
            <img className='tw-rounded-2xl tw-object-cover tw-max-w-md tw-cursor-pointer' src={ url } onClick={ () => setConfirm(true) } />
        </>
    );
}

const MMessageFile = ({ dataURL,name,extension,isUser }) => {
    const fileUrl = `${cerebroUrl}${dataURL}`

    return (
        <>
            {
                /* If there is missing fields */
                (!fileUrl || !name || !extension) && null
            }
            {
                isImage(extension)
                &&
                <ShowImgFile url={ fileUrl } />
            }
            {
                isAudio(extension)
                &&
                <audio controls>
                        <source src={ fileUrl } type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>
            }
            {
                isDocument(extension)
                &&
                <ShowSVGFile url={ fileUrl } icon={ DocumentLogo } name={ name } isUser={ isUser } />
            }
            {
                isTextFile(extension)
                &&
                <ShowSVGFile url={ fileUrl } icon={ DocumentTextLogo } name={ name } isUser={ isUser } />
            }
            {
                isSheet(extension)
                &&
                <ShowSVGFile url={ fileUrl } icon={ TableLogo } name={ name } isUser={ isUser } />
            }
            {
                isHTML(extension)
                &&
                <ShowSVGFile url={ fileUrl } icon={ CodeLogo } name={ name } isUser={ isUser } />
            }
        </>
    )
}

export default MMessageFile;