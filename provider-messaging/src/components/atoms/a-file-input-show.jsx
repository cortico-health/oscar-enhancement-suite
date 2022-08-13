import React from 'react'
import { isAudio,isDocument,isHTML,isImage,isSheet,isTextFile } from '../../helper/determine-file-type'
import ASvg from './a-svg';

const AFileInputShow = ({ fileInput,exit }) => {

    if (!fileInput) return null;

    return (
        <div className="flex items-center gap-4">
            { isImage(fileInput.type) && <img width="50" src={ fileInput.dataURL } /> }
            { isAudio(fileInput.type) && <ASvg src="music" className="h-16 w-16" /> }
            { isDocument(fileInput.type) && <ASvg src="document" className="h-16 w-16" /> }
            { isTextFile(fileInput.type) && <ASvg src="document-text" className="h-16 w-16" /> }
            { isSheet(fileInput.type) && <ASvg src="table" className="h-16 w-16" /> }
            { isHTML(fileInput.type) && <ASvg src="code" className="h-16 w-16" /> }
            <p>{ fileInput.name }</p>
            <ASvg src="exit" className="cursor-pointer" onClick={ exit } />
        </div>
    )
}

export default AFileInputShow