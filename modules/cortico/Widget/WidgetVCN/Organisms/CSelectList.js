import { useEffect, useState, useCallback } from 'preact/hooks';
import { debounce } from "lodash";
import ARadio from '../Atoms/ARadio';
import AButton from '../Atoms/AButton';
import MSearch from '../Molecules/MSearch';
import { useDispatch } from 'react-redux';
import MSelectItem from '../Molecules/MSelectItem';
import { useStore } from "../../store/mobx";
import ASpinner from '../Atoms/ASpinner';

const camelToSnake = (text) => {
    return text.replace(/[A-Z]/g, (letter) => { return `_${letter.toLowerCase()}` });
}

const CSelectList = ({ ...props }) => {
    const dispatch = useDispatch();

    const { patientStore, conversationStore } = useStore();

    const [select, setSelect] = useState(undefined);

    const [showPatients, setShowPatients] = useState(undefined);

    const [filter, setFilter] = useState('first_name')

    const handleChange = (event) => {
        setFilter(camelToSnake(event.target.value))
    }

    useEffect(() => {
        if (patientStore.patients.all) {
            setShowPatients(patientStore.patients.all);
        }
    }, [patientStore.patients.all]);

    const searchHandler = debounce(query => {
        if (!query) return setShowPatients(patientStore.patients.all)

        let filteredData = patientStore.patients.all?.filter(patient => {
            if (filter === "health_card_number") {
                return patient["hin"].includes(query)
            }

            return patient[filter].toLowerCase().includes(query.toLowerCase())
        });

        setShowPatients(filteredData);
    }, 500)

    const handlePatientSelect = () => {
        patientStore.selectPatient(select);
        dispatch({
            type: "sidebar/setCurrent",
            payload: "Provider Messaging",
        });

    }

    return (
        patientStore.patients.all?.length ?
            <div className='tw-pl-8 tw-pt-11 tw-w-full tw-bg-white' { ...props }>
                <h2 className='tw-text-secondary-500 tw-font-bold tw-text-title3 tw-mb-0.5'>Recent patients</h2>
                <p className='tw-text-secondary-300 tw-text-title4'>accusamus magnam id</p>
                <div className='tw-p-8 tw-overflow-y-scroll tw-overflow-x-hidden tw-relative tw-w-full'>
                    <MSearch onInput={ (e) => searchHandler(e.target.value) } />
                    <div className='tw-flex tw-gap-x-5'>
                        <ARadio onChange={ handleChange } checked name="filter" value="firstName" />
                        <ARadio onChange={ handleChange } name="filter" value="lastName" />
                        <ARadio onChange={ handleChange } name="filter" value="healthCardNumber" />
                        <ARadio onChange={ handleChange } name="filter" value="email" />
                    </div>
                    <div className="tw-overflow-x-auto">
                        <table className='tw-w-full tw-border-separate' style={ { borderSpacing: '0' } }>
                            {
                                showPatients?.map(patient => {
                                    const selected = patient.id == select?.id;
                                    return <MSelectItem selected={ selected } onClick={ () => setSelect(patient) } patient={ patient } />
                                })
                            }
                        </table>
                    </div>
                </div>
                <AButton onClick={ handlePatientSelect }
                    className='tw-w-44 tw-right-10 tw-bottom-10 tw-absolute' variant='button-primary-lg'>
                    Get Started
                </AButton>
            </div>
            :
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-2 tw-w-full tw-h-full">
                <ASpinner variant="md" />
            </div>
    )
}

export default CSelectList;