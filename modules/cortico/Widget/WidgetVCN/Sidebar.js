import { useDispatch } from "react-redux";
import AddLogo from "../../../../resources/icons/add.svg";
import CConversationList from "./Organisms/CConversationList";
import PatientCard from "./Organisms/CPatientCard";

const Sidebar = () => {
  const dispatch = useDispatch();
  const patientStore = null;

  const handleClick = (name) => {
    dispatch({
      type: "sidebar/setCurrent",
      payload: "VCN Add Chat",
    });
  };

  return (
    <div className="tw-flex tw-flex-col tw-w-[550px] tw-bg-gray-50 tw-shadow tw-h-full">
      <PatientCard
        className="tw-mt-6 tw-pb-6 tw-px-6 tw-h-min tw-border-b tw-border-gray-200"
      />
      <div className="tw-flex-none tw-flex tw-mt-4 tw-mx-5 tw-justify-between tw-items-center">
        <h2 className="tw-text-secondary-500 tw-font-bold tw-text-md">
          {
            patientStore?.patients?.selected ? <>
              Conversations on
              <span className="text-primary-500">
                {" " + patientStore?.patients?.selected.first_name
                  + " " + patientStore?.patients?.selected.last_name}
              </span>
            </>
              : "All conversations"
          }
        </h2>
        <img className="tw-cursor-pointer" src={AddLogo} alt="Cortico" onClick={handleClick} />
      </div>
      <CConversationList />
    </div>
  )
}

export default Sidebar