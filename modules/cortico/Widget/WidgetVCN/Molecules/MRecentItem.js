import { UserCircleIcon } from '@heroicons/react/outline';
import DefaultAvatarLogo from "../../../../../resources/icons/avatar.svg";

const MRecentItem = ({ className,patient = null,...props }) => {

    return (
        <div { ...props } className='tw-flex tw-justify-between tw-items-center tw-my-4 tw-cursor-pointer'>
            <div className='tw-flex tw-items-center'>
                <img className="tw-w-[40px] tw-mx-auto" src={ DefaultAvatarLogo } alt="Default Avatar" />
                <div className='tw-ml-3.5'>
                    <h2 className='tw-text-secondary-500 tw-font-medium tw-text-contact1'>{ patient?.first_name + " " + patient?.last_name }</h2>
                    <p className='tw-text-secondary-300 tw-text-contact2'>Tempora et placeat</p>
                </div>
            </div>
        </div>
    )
}

export default MRecentItem