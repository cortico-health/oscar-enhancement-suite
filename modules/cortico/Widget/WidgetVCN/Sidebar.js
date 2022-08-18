import AddLogo from "../../../../resources/icons/add.svg";
import PatientCard from "./Organisms/CPatientCard";

const Sidebar = () => {
  const patientStore = null;
  return (
    <div className="tw-flex tw-w-[300px]">
      <div className="tw-bg-gray-50 tw-shadow tw-h-full tw-w-full tw-block">
        <PatientCard
          className="tw-mt-4 tw-pb-6 tw-px-5 tw-h-min tw-border-b tw-border-gray-200"
        />
        {
          /* location.hash == "#assets" ?
            <FilesList />
            : */
          <>
            <div className="tw-flex tw-mt-4 tw-mx-5 tw-justify-between tw-items-center">
              <h2 className="tw-text-secondary-500 tw-font-bold tw-text-md">
                {
                  patientStore?.patients?.selected ? <>
                    Conversations on
                    <span className="text-primary-500">
                      { " " + patientStore?.patients?.selected.first_name
                        + " " + patientStore?.patients?.selected.last_name }
                    </span>
                  </>
                    : "All conversations"
                }
              </h2>

              <img className="tw-cursor-pointer" src={ AddLogo } alt="Cortico" />
            </div>

            {/* <ConversationList /> */ }
          </>
        }
      </div>
    </div>
  )
}

export default Sidebar