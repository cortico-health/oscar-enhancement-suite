import { useState } from 'preact/hooks'
import React from 'react'
import { isAudio, isDocument, isHTML, isImage, isSheet, isTextFile } from '../../helper/determine-file-type'
import ASvg from '../atoms/a-svg'

/* "https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg" */

const linkToDataURL = (link) => {

}

const ShowSVGFile = ({ dataURL, icon, name, isUser }) => {
    return (
        <div className={`flex items-center gap-4 ${isUser ? "bg-secondary-200" : "bg-white"} rounded-2xl p-4`}>
            <ASvg src={icon} className="h-12 w-12" />
            <p className='text-secondary-500 text-sm'>{name}</p>
            {isUser && <ASvg src="download" className="cursor-pointer w-7 h-7" />}
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
                        <div className="fixed z-50 top-0 left-0 bottom-0 right-0 bg-black/50 w-screen h-screen cursor-pointer"
                            onClick={() => setConfirm(false)}
                        >
                            <div className="text-center fixed left-1/2 -translate-x-2/4 top-1/2 -translate-y-1/2">
                                <img className='rounded-2xl object-cover h-auto' src={url} />
                            </div>
                        </div >
                    )
                    : null
            }
            <img className='rounded-2xl object-cover max-w-md cursor-pointer' src={url} onClick={() => setConfirm(true)} />
        </>
    );
}

const MMessageFile = ({ dataURL, name, extension, isUser }) => {
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
                <ShowImgFile url={dataURL} />
            }
            {
                isAudio(extension)
                &&
                <audio controls>
                    <source src={dataURL} type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>
            }
            {
                isDocument(extension)
                &&
                <ShowSVGFile icon="document" name={name} isUser={isUser} />
            }
            {
                isTextFile(extension)
                &&
                <ShowSVGFile icon="document-text" name={name} isUser={isUser} />
            }
            {
                isSheet(extension)
                &&
                <ShowSVGFile icon="table" name={name} isUser={isUser} />
            }
            {
                isHTML(extension)
                &&
                <ShowSVGFile icon="code" name={name} isUser={isUser} />
            }
        </>
    )
}

export default MMessageFile