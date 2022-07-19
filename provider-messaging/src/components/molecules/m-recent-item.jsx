import { h } from 'preact';
import AInput from '../atoms/a-input';
import ASvg from '../atoms/a-svg';

const MRecentItem = ({className, patient, ...props}) => {

  return (
    <div {...props} className='flex justify-between my-4 cursor-pointer'>

      <div className='flex items-center'>
        <div className='rounded-full border-primary-500 border-2 bg-primary-300 w-12 h-12'>
          <div className='border border-white flex items-center justify-center rounded-full w-full h-full'>
            <ASvg src='user2'/>
          </div>
        </div>
        <div className='ml-3.5'>
          <h2 className='text-secondary-500 font-medium text-contact1'>{ patient.firstName + " " + patient.lastName }</h2>
          <p className='text-secondary-300 text-contact2'>Tempora et placeat</p>
        </div>
      </div>

      <div className='rounded-full flex items-center justify-center text-contact2 w-7 h-7 text-white bg-primary-500'>
        2
      </div>


    </div>
  )
}

export default MRecentItem