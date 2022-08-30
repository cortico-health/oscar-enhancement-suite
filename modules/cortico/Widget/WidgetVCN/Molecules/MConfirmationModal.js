import { UploadIcon } from "@heroicons/react/outline"

const MConfirmationModal = ({ setIsOpen,onConfirm }) => {
    return (
        <div id="popup-modal" tabindex="-1" className="tw-absolute tw-bg-white/40 tw-overflow-y-auto tw-overflow-x-hidden tw-w-full tw-h-full tw-z-50">
            <div className="tw-relative tw-p-4 tw-w-full tw-max-w-md tw-h-full md:tw-h-auto tw-top-1/2 -tw-translate-y-1/2 tw-left-1/2 -tw-translate-x-1/2">
                <div className="tw-relative tw-bg-white tw-rounded-lg tw-shadow">
                    <button onClick={ () => setIsOpen(false) } type="button" className="tw-absolute tw-top-3 tw-right-2.5 tw-text-gray-400 tw-bg-transparent hover:tw-bg-gray-200 hover:tw-text-gray-900 tw-rounded-lg tw-text-sm tw-p-1.5 tw-ml-auto tw-inline-flex tw-items-center" data-modal-toggle="popup-modal">
                        <svg aria-hidden="true" className="tw-w-5 tw-h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span className="tw-sr-only">Close modal</span>
                    </button>
                    <div className="tw-p-6 tw-text-center">
                        <UploadIcon className="tw-mx-auto tw-mb-4 tw-w-14 tw-h-14 tw-text-gray-400" />
                        <h3 className="tw-mb-5 tw-text-lg tw-font-normal tw-text-gray-500">Are you sure you to upload this on Oscar?</h3>
                        <button onClick={ onConfirm } type="button" className="tw-text-white tw-bg-green-500 hover:tw-bg-green-700 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-green-300 tw-font-medium tw-rounded-lg tw-text-sm tw-inline-flex tw-items-center tw-px-5 tw-py-2.5 tw-text-center tw-mr-2">
                            Yes
                        </button>
                        <button onClick={ () => setIsOpen(false) } type="button" className="tw-text-gray-500 tw-bg-white hover:tw-bg-gray-100 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-gray-200 tw-rounded-lg border tw-border-gray-200 tw-text-sm tw-font-medium tw-px-5 tw-py-2.5 hover:tw-text-gray-900 focus:tw-z-10">No</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MConfirmationModal