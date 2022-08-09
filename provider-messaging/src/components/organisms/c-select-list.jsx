import { h } from 'preact';
import ASvg from '../atoms/a-svg';
import AButton from '../atoms/a-button';
import { useEffect, useState } from 'preact/hooks';
import { useStore } from '../../state';
import MRecentItem from '../molecules/m-recent-item';
import { route } from 'preact-router';
import MSearch from '../molecules/m-search';
import ARadio from '../atoms/a-radio';
import MSelectItem from '../molecules/m-select-item';
import { observer } from "mobx-react-lite";

const CSelectList = ({...props}) => {

  const { patientStore } = useStore();

  const [select, setSelect] = useState(undefined);

  const [showPatients, setShowPatients] = useState(undefined);

  const [filter, setFilter] = useState('firstName')

  const handleChange = (event) => {
    setFilter(event.target.value)
  }

  useEffect(() => {
    if (patientStore.patients.all?.length) {
      setShowPatients(patientStore.patients.all);
    }
  },[patientStore.patients]);

  const searchHandler = (e) => {
    let filteredData = patientStore.patients.all?.filter(patient => {
      return patient[filter].toLowerCase().includes(e.target.value.toLowerCase())
    })
    setShowPatients(filteredData)
  }

  const handleStartConversation = () => {
    patientStore.setSelectedPatient(select);
    route('/chat');
  }

  if (!patientStore.patients.all?.length || !showPatients) {
    return <div>loading...</div>
  }


  return (
    <div className='c-select-list pl-8 pt-11 w-full bg-white' {...props}>
      <h2 className='text-secondary-500 font-bold text-title3 mb-0.5'>Recent patients</h2>
      <p className='text-secondary-300 text-title4'>accusamus magnam id</p>
      <div className='p-8 overflow-y-scroll overflow-x-hidden relative c-select-list__data'>
        <MSearch onInput={searchHandler} />
        <div className='flex gap-x-5'>
          <ARadio onChange={handleChange} checked name="filter" value="firstName"/>
          <ARadio onChange={handleChange} name="filter" value="lastName"/>
          <ARadio onChange={handleChange} name="filter" value="healthCardNumber"/>
          <ARadio onChange={handleChange} name="filter" value="email"/>
        </div>
        <div className="overflow-x-auto">
          <table className='w-full border-separate' style={ { borderSpacing: '0' } }>
            {
              showPatients.map(patient => {
                const selected = patient.id == select;
                return <MSelectItem selected={ selected } onClick={ () => setSelect(patient.id) } patient={ patient } />
              })
            }
          </table>
        </div>
        <AButton onClick={ handleStartConversation }
          className='w-44 right-10 bottom-10 absolute' variant='button-primary-lg'>
          Get Started
        </AButton>
      </div>
    </div>

  )
}

export default observer(CSelectList);