
const MRecentItem = ({ className,patient = null,...props }) => {

    return (
        <div { ...props } className='tw-flex tw-flex-col tw-justify-center tw-mb-2 tw-cursor-pointer tw-p-4 tw-rounded-md hover:tw-bg-blue-200 hover:tw-text-white'>
            <h2 className='tw-text-secondary-500 tw-font-medium tw-text-contact1 tw-cursor-pointer tw-pt-0'>{ patient?.first_name + " " + patient?.last_name }</h2>
            <p className='tw-text-secondary-300 tw-text-contact2 tw-cursor-pointer'>Tempora et placeat</p>
        </div>
    )
}

export default MRecentItem