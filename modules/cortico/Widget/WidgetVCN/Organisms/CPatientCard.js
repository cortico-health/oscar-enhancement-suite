import { useEffect } from "preact/hooks";
import { observer } from "mobx-react-lite";
import { useDispatch, useSelector } from "react-redux";
import { useStore } from "../../store/mobx";
import AButton from "../Atoms/AButton";
import ExitLogo from "../../../../../resources/icons/exit.svg";
import SwitchLogo from "../../../../../resources/icons/switch.svg";
// import MProfilePicture from "../Molecules/MProfilePicture";

const PatientData = ({ patient, showControls, handleClick, handleClose }) => {
    const { first_name, last_name, gender, birth_date, hin, email } = patient;

    const GENDER_CHOICES = {
        "u": "Undefined",
        "m": "Male",
        "f": "Female",
        "t": "Transgender",
        "o": "Other",
    }

    return (
        <>
            <div className="tw-flex tw-justify-between">
                <div className="tw-w-full">
                    <div className="tw-flex tw-mb-4">
                        <div className="tw-flex-1 tw-text-h1 tw-text-secondary-500 tw-font-bold">
                            {first_name + " " + last_name}
                        </div>
                        <div>
                            { showControls && <img onClick={ handleClose } className="tw-cursor-pointer" src={ ExitLogo } /> }
                        </div>
                    </div>
                    <table className="tw-w-full tw-text-md tw-text-secondary-300">
                        <tr>
                            <td className="tw-font-bold tw-w-1/3">Gender:</td>
                            <td>{GENDER_CHOICES[gender]}</td>
                        </tr>
                        <tr>
                            <td className="tw-font-bold tw-w-1/3">DOB:</td>
                            <td>{birth_date}</td>
                        </tr>
                        <tr>
                            <td className="tw-font-bold tw-w-1/3">HIN:</td>
                            <td>{hin}</td>
                        </tr>
                        <tr>
                            <td className="tw-font-bold tw-w-1/3">Email:</td>
                            <td>{email}</td>
                        </tr>
                    </table>
                </div>
            </div>
            { showControls && <AButton onClick={ handleClick } className="tw-w-full tw-mt-5 tw-flex tw-items-center tw-justify-center tw-gap-x-2 tw-mb-0" variant="button-tertiary-sm"> <img src={ SwitchLogo } /> Switch Patient</AButton> }
        </>
    )
}

const CPatientCard = (props) => {
    const dispatch = useDispatch();
    const { info } = useSelector((state) => state.patient);
    const { patientStore, conversationStore } = useStore();

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
            conversationStore.fetchConversations(patient.hin);
        }
    }, [info]);

    const handleClick = (name) => {
        dispatch({
            type: "sidebar/setCurrent",
            payload: "VCN Patient",
        });
    };

    const handleClose = () => {
        conversationStore.selectConversation(null);
        patientStore.selectPatient(null);
    }

    return (
        <div { ...props }>
            {patientStore.patients.selected ?
                <PatientData patient={patientStore.patients.selected} showControls={!info} handleClick={handleClick} handleClose={handleClose} />
                :
                <>
                    <h1 className="tw-text-md tw-text-secondary-500 tw-font-bold tw-mb-1.5">Viewing all conversations</h1>
                    <p className="tw-text-sm tw-mb-5">No patient selected</p>
                    <AButton onClick={handleClick} className="tw-w-full" variant="button-primary-sm"> Select patient</AButton>
                </>
            }
        </div>
    )
}

export default observer(CPatientCard);