import { h } from 'preact';
import { useEffect,useState } from 'preact/hooks';
/* import { useStore } from '../../state'; */
/* import { observer } from "mobx-react-lite"; */
import ARadio from '../Atoms/ARadio';
import AButton from '../Atoms/AButton';
import MSearch from '../Molecules/MSearch';
import { useDispatch } from 'react-redux';
import MSelectItem from '../Molecules/MSelectItem';
import { patientsData } from '../../../../../resources/js/data';

const CSelectList = ({ ...props }) => {
    const dispatch = useDispatch();

    const patientStore = patientsData;

    const [select,setSelect] = useState(undefined);

    const [showPatients,setShowPatients] = useState(undefined);

    const [filter,setFilter] = useState('first_name')

    const handleChange = (event) => {
        setFilter(event.target.value)
    }

    /*  useEffect(() => {
         if (patientStore.patients.all?.length) {
             setShowPatients(patientStore.patients.all);
         }
     },[patientStore.patients]); */

    const searchHandler = (e) => {
        let filteredData = patientStore.patients.all?.filter(patient => {
            return patient[filter].toLowerCase().includes(e.target.value.toLowerCase())
        })
        setShowPatients(filteredData)
    }

    const handleStartConversation = () => {
        /* patientStore.setSelectedPatient(select); */
        /* route('/chat'); */
        dispatch({
            type: "sidebar/setCurrent",
            payload: "VCN",
        });

    }

    if (!patientStore?.patients?.all?.length) {
        return <div>loading...</div>
    }

    return (
        <div className='tw-pl-8 tw-pt-11 tw-w-full tw-bg-white' { ...props }>
            <h2 className='tw-text-secondary-500 tw-font-bold tw-text-title3 tw-mb-0.5'>Recent patients</h2>
            <p className='tw-text-secondary-300 tw-text-title4'>accusamus magnam id</p>
            <div className='tw-p-8 tw-overflow-y-scroll tw-overflow-x-hidden tw-relative tw-min-w-[calc(100vh-100px)]'>
                <MSearch onInput={ searchHandler } />
                <div className='tw-flex tw-gap-x-5'>
                    <ARadio onChange={ handleChange } checked name="filter" value="firstName" />
                    <ARadio onChange={ handleChange } name="filter" value="lastName" />
                    <ARadio onChange={ handleChange } name="filter" value="healthCardNumber" />
                    <ARadio onChange={ handleChange } name="filter" value="email" />
                </div>
                <div className="tw-overflow-x-auto">
                    <table className='tw-w-full tw-border-separate' style={ { borderSpacing: '0' } }>
                        {
                            patientStore?.patients?.all?.map(patient => {
                                const selected = patient.id == select?.id;
                                return <MSelectItem selected={ selected } onClick={ () => setSelect(patient) } patient={ patient } />
                            })
                        }
                    </table>
                </div>
            </div>
            <AButton onClick={ handleStartConversation }
                className='tw-w-44 tw-right-10 tw-bottom-10 tw-absolute' variant='button-primary-lg'>
                Get Started
            </AButton>
        </div>

    )
}

export default /* observer(CSelectList) */ CSelectList;