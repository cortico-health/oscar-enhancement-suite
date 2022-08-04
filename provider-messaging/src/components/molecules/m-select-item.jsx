import { h } from 'preact';
import AInput from '../atoms/a-input';
import ASvg from '../atoms/a-svg';

const MSelectItem= ({className, patient, selected, ...props}) => {

  return (
    <tr {...props} className={` ${selected ? 'bg-primary-500': ''} cursor-pointer`}>
     <td className='rounded-l-lg py-5 pl-7'> <p className={`${selected ? 'text-white' : 'text-secondary-500'} text-select1 font-medium`}>{ patient.firstName +" " + patient.lastName }</p></td>
     <td className='px-6'><p className={`${selected ? 'text-white' : 'text-secondary-200'} text-select2 font-medium`}>{ patient.birthDate.toLocaleDateString() }</p></td>
     <td className='px-6'><p className={`${selected ? 'text-white' : 'text-secondary-500'} text-select2 font-medium`}>{ patient.healthCardNumber }</p></td>
     <td className='rounded-r-lg py-5 pr-7'><a className={`${selected ? 'text-white' : 'text-primary-500'} text-select2 font-medium`} href={`mailto:${patient.email}`}>{patient.email}</a></td>
    </tr>
  )
}

export default MSelectItem