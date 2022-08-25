import { useEffect,useState } from "preact/hooks";
import { useDispatch } from "react-redux";
import { useStore } from "../../store/mobx";
import AButton from "../Atoms/AButton";

import ExitLogo from "../../../../../resources/icons/exit.svg";
import SwitchLogo from "../../../../../resources/icons/switch.svg";
import ASvg from "../Atoms/ASvg";
import MProfilePicture from "../Molecules/MProfilePicture";

const PatientCard = (props) => {
    const [patient,setPatient] = useState(undefined);

    const { patientStore } = useStore();

    useEffect(() => {
        if (!patientStore.patients.all) {
            patientStore.getPatientList();
        }
    },[]);

    useEffect(() => {
        setPatient(patientStore.patients?.selected);
    },[patientStore.patients?.selected])

    const dispatch = useDispatch();

    const handleClick = (name) => {
        dispatch({
            type: "sidebar/setCurrent",
            payload: "VCN Patient",
        });
    };
    return (
        <div { ...props }>
            {/* <ASvg className="h-12.5 min-w-12.5 border-2 rounded-full p-0.25 border-primary-500" src="avatar" /> */ }
            { patient ?
                <>
                    <div className='tw-flex tw-mb-5 tw-gap-x-5 tw-justify-between tw-items-start'>
                        {
                            <MProfilePicture avatar={ patient.image } />
                        }
                        <div>
                            <h1 className='tw-text-h1 tw-text-secondary-500 tw-font-bold'>{ patient.first_name + " " + patient.last_name }</h1>
                            <h2 className='tw-text-h2 tw-text-secondary-500 tw-mb-2'>{ patient.facility }</h2>
                            <p className='tw-text-md tw-text-secondary-300'> <span className='tw-font-bold'>Gender:</span> { patient.gender }  </p>
                            <p className='tw-text-md tw-text-secondary-300'> <span className='tw-font-bold'>Date of birth: </span> { new Date(patient.birth_date).toLocaleDateString() }  </p>
                            <p className='tw-text-md tw-text-secondary-300'> <span className='tw-font-bold'>Health card number: </span> { patient.hin }  </p>
                        </div>
                        {/* TODO: Will definitely improved this since I don't know why the 2nd useEffect above won't retrigger */ }
                        <ASvg onClick={ () => { patientStore.setSelectedPatient(null); setPatient(null); } } className="tw-cursor-pointer" src={ ExitLogo } />
                    </div>
                    <AButton onClick={ handleClick } className='tw-w-full tw-flex tw-items-center tw-justify-center tw-gap-x-2' variant='button-tertiary-sm'> <ASvg src={ SwitchLogo } /> Switch patient</AButton>
                </>
                :
                <>
                    <h1 className='tw-text-md tw-text-secondary-500 tw-font-bold tw-mb-1.5'>Viewing all conversations</h1>
                    <p className='tw-text-sm tw-mb-5'>No patient selected</p>
                    <AButton onClick={ handleClick } className='tw-w-full' variant='button-primary-sm'> Select patient</AButton>
                </>
            }
        </div>
    )
}

export default PatientCard