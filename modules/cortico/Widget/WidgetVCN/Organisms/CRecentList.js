
/* import { useStore } from '../../state'; */
import MRecentItem from "../Molecules/MRecentItem";
import { useDispatch } from 'react-redux';
import { patientsData } from "../../../../../resources/js/data";
import { useStore } from "../../store/mobx";
/* import { observer } from 'mobx-react-lite'; */

const CRecentList = ({ ...props }) => {


    const { patientStore } = useStore()

    const dispatch = useDispatch();

    return (
        <div className='tw-px-5 tw-pt-6' { ...props }>
            <h2 className='tw-text-secondary-500 tw-font-bold tw-text-h1'>Recent patients</h2>
            {
                patientStore?.patients?.all?.map(patient => {
                    return <MRecentItem onClick={ () => {
                        patientStore.setSelectedPatient(patient)
                        dispatch({
                            type: "sidebar/setCurrent",
                            payload: "VCN",
                        });
                    } }
                        patient={ patient } />
                })
            }
        </div>
    )
}

export default CRecentList;