
/* import { useStore } from '../../state'; */
import MRecentItem from "../Molecules/MRecentItem";
import { useDispatch } from 'react-redux';
import { patientsData } from "../../../../../resources/js/data";
/* import { observer } from 'mobx-react-lite'; */

const CRecentList = ({ ...props }) => {


    const { patientStore } = /* useStore() */ {
        patientStore: patientsData
    };

    /* useEffect(() => {
      patientStore.getPatientList();
    },[]); */

    const dispatch = useDispatch();

    const handleClick = () => {
        /* Select set the selected patient to mobx. TODO: unclear this if mobx is installed */
        /* patientStore.setSelectedPatient(patient) */
        dispatch({
            type: "sidebar/setCurrent",
            payload: "VCN",
        });
    };

    return (
        <div className='tw-px-5 tw-pt-6' { ...props }>
            <h2 className='tw-text-secondary-500 tw-font-bold tw-text-h1'>Recent patients</h2>
            {
                patientStore?.patients?.all?.map(patient => {
                    return <MRecentItem onClick={ handleClick } patient={ patient } />
                })
            }
        </div>
    )
}

export default /* observer(CRecentList) */ CRecentList;