import { isAudio, isDocument, isHTML, isImage, isSheet, isTextFile } from '../../../../helper/determine-file-type';
import ASvg from './ASvg';
import ExitLogo from "../../../../../resources/icons/exit.svg";

import MusicLogo from "../../../../../resources/icons/music.svg";
import DocumentLogo from "../../../../../resources/icons/document.svg";
import DocumentTextLogo from "../../../../../resources/icons/document-text.svg";
import TableLogo from "../../../../../resources/icons/table.svg";
import CodeLogo from "../../../../../resources/icons/code.svg";
import { getFileExtension } from '../../../../Utils/Utils';


const AFileInputShow = ({ fileInput, exit }) => {

    if (!fileInput) return null;

    const dataURL = fileInput.data;
    const fileName = fileInput.name;
    const type = getFileExtension(fileInput.name);

    return (
        <div className="tw-flex tw-p-1 tw-mr-1 tw-border tw-rounded-sm tw-items-center tw-gap-4 tw-bg-white">
            {/* TODO: Dwight - Convert this into tailwind */}
            {isImage(type) && <img style="width: 40px!important; height: 40px!important; object-fit: cover;" src={dataURL} />}
            {isAudio(type) && <ASvg src={MusicLogo} className="tw-h-9 tw-w-9" />}
            {isDocument(type) && <ASvg src={DocumentLogo} className="tw-h-9 tw-w-9" />}
            {isTextFile(type) && <ASvg src={DocumentTextLogo} className="tw-h-9 tw-w-9" />}
            {isSheet(type) && <ASvg src={TableLogo} className="tw-h-9 tw-w-9" />}
            {isHTML(type) && <ASvg src={CodeLogo} className="tw-h-9 tw-w-9" />}
            {!isImage(type) && <p className="tw-text-sm">{fileName}</p>}
            <ASvg src={ExitLogo} className="tw-cursor-pointer" onClick={exit} />
        </div>
    )
}

export default AFileInputShow