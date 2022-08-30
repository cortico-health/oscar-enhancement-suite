import { useEffect,useState } from "preact/hooks";
import { useDispatch,useSelector } from "react-redux";
import { useStore } from "../../store/mobx";
import AButton from "../Atoms/AButton";

import ExitLogo from "../../../../../resources/icons/exit.svg";
import SwitchLogo from "../../../../../resources/icons/switch.svg";
import ASvg from "../Atoms/ASvg";
import MProfilePicture from "../Molecules/MProfilePicture";
import { observer } from "mobx-react-lite";

const PatientData = ({ patient,fromEChart,handleClick,handleClose }) => {
    let first_name = patient['First Name'] || patient.first_name || "N/A";
    let last_name = patient['Last Name'] || patient.last_name || "N/A";
    let gender = patient['Sex'] || patient.gender || "N/A";
    let birth_date = patient['Age'] || new Date(patient.birth_date).toLocaleDateString() || "N/A";
    let hin = patient['Health Ins'] || patient.hin || "N/A";
    let image = patient.image || null;
    let facility = patient.facility || null;

    console.log("Paient Data: ",{ first_name,last_name,gender,birth_date,hin })

    return (
        <>
            <div className='tw-flex tw-mb-5 tw-gap-x-5 tw-justify-between tw-items-start'>
                {
                    <MProfilePicture avatar={ image } />
                }
                <div>
                    <h1 className='tw-text-h1 tw-text-secondary-500 tw-font-bold'>{ first_name + " " + last_name }</h1>
                    <h2 className='tw-text-h2 tw-text-secondary-500 tw-mb-2'>{ facility }</h2>
                    <p className='tw-text-md tw-text-secondary-300'> <span className='tw-font-bold'>Gender:</span> { gender }  </p>
                    <p className='tw-text-md tw-text-secondary-300'> <span className='tw-font-bold'>Date of birth: </span> { birth_date }  </p>
                    <p className='tw-text-md tw-text-secondary-300'> <span className='tw-font-bold'>Health card number: </span> { hin }  </p>
                </div>
                {/* TODO: Will definitely improved this since I don't know why the 2nd useEffect above won't retrigger */ }
                { fromEChart && <ASvg onClick={ handleClose } className="tw-cursor-pointer" src={ ExitLogo } /> }
            </div>
            { fromEChart && <AButton onClick={ handleClick } className='tw-w-full tw-flex tw-items-center tw-justify-center tw-gap-x-2' variant='button-tertiary-sm'> <ASvg src={ SwitchLogo } /> Switch patient</AButton> }
        </>
    )
}

const PatientCard = (props) => {
    const { info } = useSelector((state) => state.patient);

    const [patient,setPatient] = useState(undefined);

    const { patientStore } = useStore();

    useEffect(() => {
        setPatient(() => { return info ? info : patientStore.patients?.selected });
    },[patientStore.patients?.selected,info]);

    const dispatch = useDispatch();

    const handleClick = (name) => {
        dispatch({
            type: "sidebar/setCurrent",
            payload: "VCN Patient",
        });
    };

    const handleClose = () => {
        patientStore.selectPatient(null);
        setPatient(null);
    }

    return (
        <div { ...props }>
            {/* <ASvg className="h-12.5 min-w-12.5 border-2 rounded-full p-0.25 border-primary-500" src="avatar" /> */ }
            { patient ?
                <PatientData patient={ patient } fromEChart={ !info } handleClick={ handleClick } handleClose={ handleClose } />
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

export default observer(PatientCard);