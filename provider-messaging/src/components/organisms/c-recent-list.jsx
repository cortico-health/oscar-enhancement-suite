import { h } from 'preact';
import ASvg from '../atoms/a-svg';
import AButton from '../atoms/a-button';
import { useEffect, useState } from 'preact/hooks';
import { useStore } from '../../state';
import MRecentItem from '../molecules/m-recent-item';
import { route } from 'preact-router';
import { observer } from 'mobx-react-lite';

const CRecentList = ({...props}) => {

  const { patientStore } = useStore();

  /* useEffect(() => {
    patientStore.getPatientList();
  },[]); */

  return (
    <div className='px-5 pt-6' { ...props }>
      <h2 className='text-secondary-500 font-medium text-h1'>Recent patients</h2>
      {
        patientStore.patients.all?.map(patient => {
          return <MRecentItem onClick={() => {
            patientStore.setSelectedPatient(patient.id)
            route('/chat')
          }} patient={patient} />
        })
      }
    </div>
  )
}

export default observer(CRecentList)