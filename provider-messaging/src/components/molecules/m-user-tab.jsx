import React from 'react'
import ARadio from '../atoms/a-radio'

const MUserTab = ({ user, onChange, index }) => {
  return (
    <div className='flex justify-between items-center pb-4'>
      <div className='o-aspect-ratio w-12.5'>
        <img className='o-aspect-ratio__content object-cover rounded-full' src={ user.avatar} alt="" />
      </div>
      <div>
        <h2 className='text-secondary-500 text-contact1 font-medium'> { user.name}</h2>
        <p className='text-secondary-300 text-select3'> {`${user.title}, ${user.clinic}`}</p>
      </div>
      <input onChange={onChange} index={index} className='w-5 h-5' type="checkbox" name="name" value={user.id}/>
    </div>
  )
}

export default MUserTab