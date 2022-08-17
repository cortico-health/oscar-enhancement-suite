import { PlusIcon } from "@heroicons/react/outline";
import { useRef } from "preact/hooks";

export default function FileUploader() {
  const fileRef = useRef(null);

  const openFileUpload = () => {
    fileRef.current.click();
  };

  const handleFileChange = (e) => {
    console.log("File change", e);
    const files = e.target.files;
  };

  return (
    <>
      <input
        className="tw-hidden"
        type="file"
        ref={fileRef}
        onChange={handleFileChange}
        multiple={true}
      />
      <div
        className="tw-flex tw-justify-end tw-space-x-1 tw-items-center tw-w-full tw-cursor-pointer"
        onClick={openFileUpload}
      >
        <PlusIcon className="tw-cursor-pointer tw-h-4 tw-w-4 tw-text-gray-700 tw-text-center" />
        <span className="tw-text-sm tw-cursor-pointer">Attach File</span>
      </div>
    </>
  );
}
