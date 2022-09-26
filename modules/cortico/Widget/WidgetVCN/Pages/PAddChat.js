
import { patientsData } from '../../../../../resources/js/data';
import CPatientCard from "../Organisms/CPatientCard";
import CUsersList from "../Organisms/CUsersList";
import CMessageList from "../Organisms/CMessageList";

const PAddChat = () => {
    const { patientStore } = { patientStore: patientsData };

    if (!patientStore.patients?.all.length) {
        return <div>loading...</div>
    }

    return (
        <div className="tw-flex tw-h-full">
            <div className="fixed z-20 tw-bg-gray-50 tw-shadow tw-h-full tw-block tw-w-[400px]">
                <CPatientCard
                    className="tw-p-7 tw-border-b tw-border-gray-200"
                />
                <CUsersList />
            </div>
            <div className="tw-opacity-10 tw-w-[700px]"></div>
        </div>
    )
}

export default PAddChat