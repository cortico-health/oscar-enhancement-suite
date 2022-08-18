import AButton from "../Atoms/AButton";

const PatientCard = (props) => {
    const patient = null;
    return (
        <div { ...props }>
            {/* <ASvg className="h-12.5 min-w-12.5 border-2 rounded-full p-0.25 border-primary-500" src="avatar" /> */ }
            { patient ?
                <>
                    <div className='tw-flex tw-mb-5 tw-gap-x-5 tw-justify-between'>
                        {
                            patient.image ? <img className="tw-h-12.5 tw-min-w-12.5" src={ patient.image } /> : null
                        }
                        <div>
                            <h1 className='tw-text-md tw-font-medium'>{ patient.first_name + " " + patient.last_name }</h1>
                            <h2 className='tw-text-md tw-mb-2.5'>{ patient.facility }</h2>
                            <p className='tw-text-md'> <span className='tw-font-medium'>Gender:</span> { patient.gender }  </p>
                            <p className='tw-text-md'> <span className='tw-font-medium'>Date of birth: </span> { new Date(patient.birth_date).toLocaleDateString() }  </p>
                            <p className='tw-text-md'> <span className='tw-font-medium'>Health card number: </span> { patient.hin }  </p>
                        </div>
                        {/* TODO: Will definitely improved this since I don't know why the 2nd useEffect above won't retrigger */ }
                        {/* <ASvg onClick={ () => { patientStore.setSelectedPatient(null); setPatient(null); } } className="cursor-pointer" src="exit" /> */ }
                    </div>
                    {/* <AButton href="/select" className='w-full flex items-center justify-center gap-x-2' variant='button-tertiary-sm'> <ASvg src="switch" /> Switch patient</AButton> */ }
                </>
                :
                <>
                    <h1 className='tw-text-md tw-text-secondary-500 tw-font-bold tw-mb-1.5'>Viewing all conversations</h1>
                    <p className='tw-text-sm tw-mb-5'>No patient selected</p>
                    <AButton href="/select" className='tw-w-full' variant='button-primary-sm'> Select patient</AButton>
                </>
            }
        </div>
    )
}

export default PatientCard