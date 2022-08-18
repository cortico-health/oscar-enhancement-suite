
/* import MProfilePicture from './m-profile-picture' */

const MUserTab = ({ user,onChange,index }) => {
    return (
        <div className='tw-flex tw-justify-between tw-items-center tw-gap-5 tw-pb-4 tw-px-4 tw-cursor-pointer'>
            <div className="tw-flex tw-items-center tw-gap-3">
                {/* <div className='tw-absolute tw-top-0 tw-bottom-0 tw-left-0 tw-right-0 tw-h-full tw-w-full tw-w-12.5 tw-cursor-pointer'>
                    <MProfilePicture className='o-aspect-ratio__content' avatar={ user.avatar } onClick={ () => alert('profile here') } />
                </div> */}
                <label for={ 'name' + index } className='tw-cursor-pointer tw-text-left'>
                    <h2 className='tw-text-secondary-500 tw-text-contact1 tw-font-medium'> {/* { user.title && user.title + ". " }  */ }{ user.name }</h2>
                    <p className='tw-text-secondary-300 tw-text-select3'> { user.clinic_name }</p>
                </label>
            </div>
            <input onChange={ onChange } index={ index } className='tw-w-5 tw-h-5 tw-rounded-md' type="checkbox" id={ "name" + index } name="name" value={ user.id } />
        </div>
    )
}

export default MUserTab