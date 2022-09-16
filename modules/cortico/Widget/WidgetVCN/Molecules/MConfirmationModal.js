import { PencilIcon, UploadIcon, XCircleIcon } from "@heroicons/react/outline";
import classNames from "classnames";

const MConfirmationModal = ({ setIsOpen, onConfirm, type, isLoading }) => {
    return (
        <div id="popup-modal" tabindex="-1" className="tw-absolute tw-bg-white/40 tw-overflow-y-auto tw-overflow-x-hidden tw-w-full tw-h-full tw-z-50">
            <div className="tw-relative tw-p-4 tw-w-full tw-max-w-md tw-h-full md:tw-h-auto tw-top-1/2 -tw-translate-y-1/2 tw-left-1/2 -tw-translate-x-1/2">
                <div className="tw-relative tw-bg-white tw-rounded-lg tw-shadow">
                    <button onClick={() => setIsOpen(false)} type="button" disabled={isLoading} className="tw-absolute tw-top-3 tw-right-2.5 tw-text-gray-400 tw-bg-transparent hover:tw-bg-gray-200 hover:tw-text-gray-900 tw-rounded-lg tw-text-sm tw-p-1.5 tw-ml-auto tw-inline-flex tw-items-center" data-modal-toggle="popup-modal">
                        <svg aria-hidden="true" className="tw-w-5 tw-h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span className="tw-sr-only">Close modal</span>
                    </button>
                    <div className="tw-p-6 tw-text-center">
                        {type === "upload" && <UploadIcon className="tw-mx-auto tw-mb-4 tw-w-14 tw-h-14 tw-text-gray-400" />}
                        {type === "dismiss" && <XCircleIcon className="tw-mx-auto tw-mb-4 tw-w-14 tw-h-14 tw-text-gray-400" />}
                        {type === "encounter" && <PencilIcon className="tw-mx-auto tw-mb-4 tw-w-14 tw-h-14 tw-text-gray-400" />}
                        <h3 className="tw-mb-5 tw-text-lg tw-font-normal tw-text-gray-500">
                            {type === "upload" && "Are you sure you want to upload this to the patient's EMR?"}
                            {type === "dismiss" && "Are you sure you want to dismiss this file?"}
                            {type === "encounter" && "Are you sure you want to upload the chat to EChart?"}
                        </h3>
                        <button onClick={onConfirm} type="button"
                            className={classNames("tw-text-white focus:tw-ring-4 focus:tw-outline-none tw-font-medium tw-rounded-lg tw-text-sm tw-inline-flex tw-items-center tw-px-5 tw-py-2.5 tw-text-center tw-mr-2",
                                type === "upload" && "tw-bg-green-500 hover:tw-bg-green-700 focus:tw-ring-green-300",
                                type === "dismiss" && "tw-bg-red-500 hover:tw-bg-red-700 focus:tw-ring-red-300",
                                type === "encounter" && "tw-bg-blue-500 hover:tw-bg-blue-700 focus:tw-ring-blue-300")}
                            disabled={isLoading}>
                            {isLoading && <svg aria-hidden="true" role="status" class="tw-inline tw-mr-3 tw-w-4 tw-h-4 tw-text-white tw-animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                            </svg>}
                            Yes
                        </button>
                        <button onClick={() => setIsOpen(false)} type="button"
                            className="tw-text-gray-500 tw-bg-white hover:tw-bg-gray-100 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-gray-200 tw-rounded-lg border tw-border-gray-200 tw-text-sm tw-font-medium tw-px-5 tw-py-2.5 hover:tw-text-gray-900 focus:tw-z-10"
                            disabled={isLoading}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MConfirmationModal