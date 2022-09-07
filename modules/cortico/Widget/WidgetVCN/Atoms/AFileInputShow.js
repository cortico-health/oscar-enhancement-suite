import { isAudio,isDocument,isHTML,isImage,isSheet,isTextFile } from '../../../../helper/determine-file-type';
import ASvg from './ASvg';
import ExitLogo from "../../../../../resources/icons/exit.svg";

import MusicLogo from "../../../../../resources/icons/music.svg";
import DocumentLogo from "../../../../../resources/icons/document.svg";
import DocumentTextLogo from "../../../../../resources/icons/document-text.svg";
import TableLogo from "../../../../../resources/icons/table.svg";
import CodeLogo from "../../../../../resources/icons/code.svg";

const AFileInputShow = ({ fileInput,exit }) => {

    if (!fileInput) return null;

    return (
        <div className="tw-flex tw-items-center tw-gap-4">
            { isImage(fileInput.type) && <img width="50" src={ fileInput.dataURL } /> }
            { isAudio(fileInput.type) && <ASvg src={ MusicLogo } className="tw-h-9 tw-w-9" /> }
            { isDocument(fileInput.type) && <ASvg src={ DocumentLogo } className="tw-h-9 tw-w-9" /> }
            { isTextFile(fileInput.type) && <ASvg src={ DocumentTextLogo } className="tw-h-9 tw-w-9" /> }
            { isSheet(fileInput.type) && <ASvg src={ TableLogo } className="tw-h-9 tw-w-9" /> }
            { isHTML(fileInput.type) && <ASvg src={ CodeLogo } className="tw-h-9 tw-w-9" /> }
            <p className="tw-text-sm">{ fileInput.name }</p>
            <ASvg src={ ExitLogo } className="tw-cursor-pointer" onClick={ exit } />
        </div>
    )
}

export default AFileInputShow