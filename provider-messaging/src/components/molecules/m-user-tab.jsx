import React from 'react'
import MProfilePicture from './m-profile-picture'

const MUserTab = ({ user, onChange, index }) => {
  return (
    <div className='flex justify-evenly items-center pb-4 tw-cursor-pointer'>
      <div className='o-aspect-ratio w-12.5 tw-cursor-pointer'>
        <MProfilePicture className='o-aspect-ratio__content' avatar={ user.avatar } onClick={ () => alert('profile here') } />
      </div>
      <label for={'name' + index} className='tw-cursor-pointer tw-text-left'>
        <h2 className='text-secondary-500 text-contact1 font-medium'> {user.full_name}</h2>
        <p className='text-secondary-300 text-select3'> {`${user.title}, ${user.clinic_name}`}</p>
      </label>
      <input onChange={onChange} index={index} className='w-5 h-5 tw-rounded-md' type="checkbox" id={"name" + index} name="name" value={user.id} />
    </div>
  )
}

export default MUserTab