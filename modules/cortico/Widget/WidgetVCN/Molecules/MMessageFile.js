import { useState } from "preact/hooks";
import { isAudio,isDocument,isHTML,isImage,isSheet,isTextFile } from "../../../../helper/determine-file-type";
import ASvg from "../Atoms/ASvg";

const ShowSVGFile = ({ dataURL,icon,name,isUser }) => {
    return (
        <div className={ `tw-flex tw-items-center tw-gap-4 ${isUser ? "tw-bg-secondary-200" : "tw-bg-white"} tw-rounded-2xl tw-p-4` }>
            <ASvg src={ icon } className="tw-h-12 tw-w-12" />
            <p className='tw-text-secondary-500 tw-text-sm'>{ name }</p>
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
    dataURL = `${import.meta.env.VITE_CEREBRO_URL}${dataURL}`

    return (
        <>
            {
                /* If there is missing fields */
                (!dataURL || !name || !extension) && null
            }
            {
                isImage(extension)
                &&
                <ShowImgFile url={ dataURL } />
            }
            {
                isAudio(extension)
                &&
                <audio controls>
                    <source src={ dataURL } type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>
            }
            {
                isDocument(extension)
                &&
                <ShowSVGFile icon="document" name={ name } isUser={ isUser } />
            }
            {
                isTextFile(extension)
                &&
                <ShowSVGFile icon="document-text" name={ name } isUser={ isUser } />
            }
            {
                isSheet(extension)
                &&
                <ShowSVGFile icon="table" name={ name } isUser={ isUser } />
            }
            {
                isHTML(extension)
                &&
                <ShowSVGFile icon="code" name={ name } isUser={ isUser } />
            }
        </>
    )
}

export default MMessageFile;