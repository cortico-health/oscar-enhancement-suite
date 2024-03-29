
import MRecentItem from "../Molecules/MRecentItem";
import { useDispatch } from 'react-redux';
import { useStore } from "../../store/mobx";
import ASpinner from "../Atoms/ASpinner";

const
    CRecentList = ({ ...props }) => {

    const { patientStore } = useStore();

    const dispatch = useDispatch();

    return (
        <div className="tw-bg-gray-50 tw-shadow tw-h-full tw-block tw-w-[550px] tw-overflow-y-auto">
            { patientStore.patients.all ?
                <>

                    <div className="tw-w-full tw-sticky tw-top-0 tw-bg-gray-50 tw-p-4 tw-mb-2 tw-border-b-2 tw-border-b-gray-200">
                        <h2 className='tw-text-secondary-500 tw-font-bold tw-text-h1'>Recent patients</h2>
                    </div>
                    <div className='tw-px-5' { ...props }>
                        {
                            patientStore.patients.all?.map(patient => {
                                return <MRecentItem onClick={ () => {
                                    patientStore.selectPatient(patient);
                                    dispatch({
                                        type: "sidebar/setCurrent",
                                        payload: "Provider Messaging",
                                    });
                                } } patient={ patient } />
                            })
                        }
                    </div>
                </>
                :
                <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-2 tw-w-full tw-h-full">
                    <ASpinner variant="md" />
                </div>
            }
        </div>
    )
}

export default CRecentList;