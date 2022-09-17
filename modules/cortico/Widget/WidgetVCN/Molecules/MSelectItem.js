const MSelectItem = ({ className,patient = null,selected = false,...props }) => {

    return (
        <tr { ...props } className={ ` ${selected ? 'tw-bg-primary-500' : ''}` }>
            <td className='tw-rounded-l-lg tw-py-5 tw-pl-7 tw-cursor-pointer'> <p className={ `${selected ? 'tw-text-white' : 'tw-text-secondary-500'} tw-text-select1 tw-font-medium` }>{ patient.first_name + " " + patient.last_name }</p></td>
            <td className='tw-px-6 tw-cursor-pointer'><p className={ `${selected ? 'tw-text-white' : 'tw-text-secondary-200'} tw-text-select2 tw-font-medium tw-cursor-pointer` }>{ new Date(patient.birth_date).toLocaleDateString() }</p></td>
            <td className='tw-px-6 tw-cursor-pointer'><p className={ `${selected ? 'tw-text-white' : 'tw-text-secondary-500'} tw-text-select2 tw-font-medium tw-cursor-pointer` }>{ patient.hin }</p></td>
            <td className='tw-rounded-r-lg tw-py-5 tw-pr-7 tw-cursor-pointer'><a className={ `${selected ? 'tw-text-white' : 'tw-text-primary-500'} tw-text-select2 tw-font-medium` } href={ `mailto:${patient.email}` }>{ patient.email }</a></td>
        </tr>
    )
}

export default MSelectItem