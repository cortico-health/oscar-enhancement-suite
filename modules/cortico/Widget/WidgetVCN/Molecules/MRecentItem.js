
const MRecentItem = ({ className,patient = null,...props }) => {
    const patientFullName = patient?.first_name + " " + patient?.last_name;
    return (
        <div { ...props } className='tw-flex tw-flex-col tw-justify-center tw-mb-2 tw-cursor-pointer tw-p-4 tw-rounded-md hover:tw-bg-blue-200 hover:tw-text-white'>
            <h2 className='tw-text-secondary-500 tw-font-medium tw-text-contact1 tw-cursor-pointer tw-pt-0'>{ patientFullName }</h2>
            <p className='tw-text-secondary-300 tw-text-contact2 tw-cursor-pointer'>{ patientFullName }'s Description</p>
        </div>
    )
}

export default MRecentItem