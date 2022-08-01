import React from 'react'
import ARadio from '../atoms/a-radio'

const MUserTab = ({ user, onChange, index }) => {
  return (
    <div className='flex justify-between items-center pb-4 tw-cursor-pointer'>
      <div className='o-aspect-ratio w-12.5 tw-cursor-pointer'>
        <img className='o-aspect-ratio__content object-cover rounded-full' onClick={ () => alert('profile here') } src={ user.avatar } alt="" />
      </div>
      <label for={ 'name' + index } className='tw-cursor-pointer tw-text-left'>
        <h2 className='text-secondary-500 text-contact1 font-medium'> { user.name }</h2>
        <p className='text-secondary-300 text-select3'> { `${user.title}, ${user.clinic}` }</p>
      </label>
      <input onChange={ onChange } index={ index } className='w-5 h-5 tw-rounded-md' type="checkbox" id={ "name" + index } name="name" value={ user.id } />
    </div>
  )
}

export default MUserTab