import { isAudio,isDocument,isHTML,isImage,isSheet,isTextFile } from '../../../../helper/determine-file-type';
import ExitLogo from "../../../../../resources/icons/exit.svg";

import MusicLogo from "../../../../../resources/icons/music.svg";
import DocumentLogo from "../../../../../resources/icons/document.svg";
import DocumentTextLogo from "../../../../../resources/icons/document-text.svg";
import TableLogo from "../../../../../resources/icons/table.svg";
import CodeLogo from "../../../../../resources/icons/code.svg";


const AFileInputShow = ({ fileInput, exit }) => {
    const { data, name, extension } = fileInput;

    if (!fileInput) return null;

    return (
        <div className="tw-flex tw-p-1 tw-mr-1 tw-border tw-rounded-sm tw-items-center tw-gap-4 tw-bg-white">
            {/* TODO: Dwight - Convert this into tailwind */}
            {isImage(extension) && <img style="width: 40px!important; height: 40px!important; object-fit: cover;" src={data} />}
            { isAudio(extension) && <img src={ MusicLogo } className="tw-h-9 tw-w-9" /> }
            { isDocument(extension) && <img src={ DocumentLogo } className="tw-h-9 tw-w-9" /> }
            { isTextFile(extension) && <img src={ DocumentTextLogo } className="tw-h-9 tw-w-9" /> }
            { isSheet(extension) && <img src={ TableLogo } className="tw-h-9 tw-w-9" /> }
            { isHTML(extension) && <img src={ CodeLogo } className="tw-h-9 tw-w-9" /> }
            {!isImage(extension) && <p className="tw-text-sm">{name}</p>}
            <img src={ ExitLogo } className="tw-cursor-pointer" onClick={ exit } />
        </div>
    )
}

export default AFileInputShow