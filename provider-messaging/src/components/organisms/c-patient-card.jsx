import { h } from 'preact';
import ASvg from '../atoms/a-svg';
import AButton from '../atoms/a-button';
import { useEffect, useState } from 'preact/hooks';
import { useStore } from '../../state';
import { observer } from 'mobx-react-lite';

const CPatientCard = ({ ...props }) => {
  const [patient, setPatient] = useState(undefined);

  const { patientStore } = useStore();

  useEffect(() => {
    if (!patientStore.patients.all) {
      patientStore.getPatientList();
    }
  }, []);

  useEffect(() => {
    setPatient(patientStore.patients?.selected);
  }, [patientStore.patients?.selected])

  return (
    <div {...props}>
      {patient ?
        <>
          <div className='flex mb-5 gap-x-5 justify-between'>
            {
              patient.image ? <img className="h-12.5 min-w-12.5" src={patient.image} /> : <ASvg className="h-12.5 min-w-12.5 border-2 rounded-full p-0.25 border-primary-500" src="avatar" />
            }
            <div>
              <h1 className='text-h1 text-secondary-500 font-medium'>{patient.first_name + " " + patient.last_name}</h1>
              <h2 className='text-h2 text-secondary-500 mb-2.5'>{patient.facility}</h2>
              <p className='text-h4 text-secondary-300'> <span className='font-medium'>Gender:</span> {patient.gender}  </p>
              <p className='text-h4 text-secondary-300'> <span className='font-medium'>Date of birth: </span> {new Date(patient.birth_date).toLocaleDateString()}  </p>
              <p className='text-h4 text-secondary-300'> <span className='font-medium'>Health card number: </span> {patient.hin}  </p>
            </div>
            {/* TODO: Will definitely improved this since I don't know why the 2nd useEffect above won't retrigger */}
            <ASvg onClick={() => { patientStore.setSelectedPatient(null); setPatient(null); }} className="cursor-pointer" src="exit" />
          </div>
          <AButton href="/select" className='w-full flex items-center justify-center gap-x-2' variant='button-tertiary-sm'> <ASvg src="switch" /> Switch patient</AButton>
        </>
        :
        <>
          <h1 className='text-h1 text-secondary-500 font-medium mb-1.5'>Viewing all conversations</h1>
          <p className='text-h3 text-secondary-300 mb-5'>No patient selected</p>
          <AButton href="/select" className='w-full' variant='button-primary-sm'> Select patient</AButton>
        </>
      }
    </div>
  )
}

export default observer(CPatientCard);