import { isAudio,isDocument,isHTML,isImage,isSheet,isTextFile } from '../../../../helper/determine-file-type';
import ASvg from './ASvg';


const AFileInputShow = ({ fileInput,exit }) => {

    if (!fileInput) return null;

    return (
        <div className="tw-flex tw-items-center tw-gap-4">
            { isImage(fileInput.type) && <img width="50" src={ fileInput.dataURL } /> }
            { isAudio(fileInput.type) && <ASvg src="music" className="tw-h-16 tw-w-16" /> }
            { isDocument(fileInput.type) && <ASvg src="document" className="tw-h-16 tw-w-16" /> }
            { isTextFile(fileInput.type) && <ASvg src="document-text" className="tw-h-16 tw-w-16" /> }
            { isSheet(fileInput.type) && <ASvg src="table" className="tw-h-16 tw-w-16" /> }
            { isHTML(fileInput.type) && <ASvg src="code" className="tw-h-16 tw-w-16" /> }
            <p>{ fileInput.name }</p>
            <ASvg src="exit" className="tw-cursor-pointer" onClick={ exit } />
        </div>
    )
}

export default AFileInputShow