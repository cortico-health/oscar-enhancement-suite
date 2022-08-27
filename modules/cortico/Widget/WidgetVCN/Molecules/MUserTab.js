import MProfilePicture from "./MProfilePicture"


const MUserTab = ({ user,onChange,index }) => {
    return (
        <div className='tw-flex tw-justify-between tw-items-center tw-gap-5 tw-pb-4 tw-px-4 tw-cursor-pointer'>
            <div className="tw-flex tw-items-center tw-gap-3">
                <div
                    onClick={ () => setOpenModal(true) }
                    className="tw-cursor-pointer"
                >
                    <MProfilePicture avatar={ user.avatar } />
                </div>
                <label for={ 'name' + index } className='tw-cursor-pointer tw-text-left'>
                    <h2 className='tw-text-secondary-500 tw-text-contact1 tw-font-medium'> { user.title ? `${user.title}. ` : "" } { user.full_name }</h2>
                    <p className='tw-text-secondary-300 tw-text-select3'> { user.clinic_name }</p>
                </label>
            </div>
            <input onChange={ onChange } index={ index } className='tw-w-5 tw-h-5 tw-rounded-md' type="checkbox" id={ "name" + index } name="name" value={ user.id } />
        </div>
    )
}

export default MUserTab