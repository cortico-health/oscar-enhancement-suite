import MProfilePicture from "./MProfilePicture"


const MUserTab = ({ user, onChange, index }) => {
    return (
        <div className='tw-flex tw-items-center tw-gap-3 tw-px-2 tw-mt-3'>
            <div
                onClick={ () => console.log("User Profile open") }
                className="tw-cursor-pointer"
            >
                <MProfilePicture avatar={ user.avatar } />
            </div>
            <label for={ 'name' + index } className='tw-cursor-pointer tw-text-left tw-w-4/5 tw-flex tw-items-center tw-justify-between'>
                <div>
                    <h2 className='tw-text-secondary-500 tw-text-contact1 tw-font-medium tw-capitalize tw-pt-0 tw-pb-2 tw-cursor-pointer'>
                        { user.title ? `${user.title} ` : "" } { user.full_name }
                    </h2>
                    <p className='tw-text-secondary-300 tw-text-select3 tw-cursor-pointer'> { user.clinic_name }</p>
                </div>
                <input onChange={ onChange } index={ index } className='tw-w-5 tw-h-5 tw-rounded-md' type="checkbox" id={ "name" + index } name="name" value={ user.id } />
            </label>
        </div>
    )
}

export default MUserTab