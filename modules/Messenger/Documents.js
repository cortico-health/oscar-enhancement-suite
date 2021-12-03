import { render } from "preact";
import { PaperClipIcon, TrashIcon } from "../Icons/HeroIcons";

function Documents({ name, onDelete }) {
  return (
    <div>
      <div className="tw-flex tw-justify-between tw-items-center">
        <div className="tw-flex">
          <PaperClipIcon className="tw-text-gray-800 tw-w-6 tw-h-6"></PaperClipIcon>
          <div>
            <p className="tw-ml-2 tw-text-sm tw-text-gray-600">{name}</p>
          </div>
        </div>
        <button
          onClick={onDelete}
          className="tw-bg-red-600 tw-rounded-md tw-p-2"
        >
          <TrashIcon className="tw-text-white tw-w-4 tw-h-4" />
        </button>
      </div>
    </div>
  );
}

export default Documents;