import { useEffect } from "preact/hooks";
import { observer } from "mobx-react-lite";
import { useDispatch, useSelector } from "react-redux";
import { useStore } from "../../store/mobx";
import AButton from "../Atoms/AButton";
import ExitLogo from "../../../../../resources/icons/exit.svg";
import SwitchLogo from "../../../../../resources/icons/switch.svg";
import ASvg from "../Atoms/ASvg";
// import MProfilePicture from "../Molecules/MProfilePicture";

const PatientData = ({ patient, showControls, handleClick, handleClose }) => {
    const { first_name, last_name, gender, birth_date, hin, email } = patient;

    return (
        <>
            <div className='tw-flex tw-gap-x-5 tw-justify-between tw-items-start'>
                {/* Temporarily disable Image as it's notvery important */}
                {/* {
                    <MProfilePicture avatar={image} />
                } */}
                <div>
                    <h1 className='tw-text-h1 tw-text-secondary-500 tw-font-bold'>{first_name + " " + last_name}</h1>
                    <p className='tw-text-md tw-text-secondary-300'> <span className='tw-font-bold'>Gender:</span> {gender}  </p>
                    <p className='tw-text-md tw-text-secondary-300'> <span className='tw-font-bold'>DOB: </span> {birth_date}  </p>
                    <p className='tw-text-md tw-text-secondary-300'> <span className='tw-font-bold'>HIN: </span> {hin}  </p>
                    <p className='tw-text-md tw-text-secondary-300'> <span className='tw-font-bold'>Email: </span> {email}  </p>
                </div>
                {/* TODO: Will definitely improved this since I don't know why the 2nd useEffect above won't retrigger */}
                {showControls && <ASvg onClick={handleClose} className="tw-cursor-pointer" src={ExitLogo} />}
            </div>
            {showControls && <AButton onClick={handleClick} className='tw-w-full tw-mt-5 tw-flex tw-items-center tw-justify-center tw-gap-x-2' variant='button-tertiary-sm'> <ASvg src={SwitchLogo} /> Switch patient</AButton>}
        </>
    )
}

const PatientCard = observer((props) => {
    const dispatch = useDispatch();
    const { info } = useSelector((state) => state.patient);
    const { patientStore } = useStore();

    useEffect(() => {
        if (info) {
            const patient = {
                first_name: info["First Name"],
                last_name: info["Last Name"],
                gender: info["Sex"].toLowerCase(),
                birth_date: info["Age"].split("DOB: ")[1].slice(0, 10),
                hin: info["Health Ins"],
                email: info["email"] || "N/A",
            };
            patientStore.selectPatient(patient);
        }
    }, [info]);

    const handleClick = (name) => {
        dispatch({
            type: "sidebar/setCurrent",
            payload: "VCN Patient",
        });
    };

    const handleClose = () => {
        patientStore.selectPatient(null);
    }

    return (
        <div {...props}>
            {/* <ASvg className="h-12.5 min-w-12.5 border-2 rounded-full p-0.25 border-primary-500" src="avatar" /> */}
            {patientStore?.patients?.selected ?
                <PatientData patient={patientStore.patients.selected} showControls={!info} handleClick={handleClick} handleClose={handleClose} />
                :
                <>
                    <h1 className='tw-text-md tw-text-secondary-500 tw-font-bold tw-mb-1.5'>Viewing all conversations</h1>
                    <p className='tw-text-sm tw-mb-5'>No patient selected</p>
                    <AButton onClick={handleClick} className='tw-w-full' variant='button-primary-sm'> Select patient</AButton>
                </>
            }
        </div>
    )
})

export default PatientCard;