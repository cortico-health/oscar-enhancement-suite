import { h } from 'preact';
import ASvg from '../atoms/a-svg';
import AButton from '../atoms/a-button';
import { useEffect, useState } from 'preact/hooks';
import { useStore } from '../../state';
import MRecentItem from '../molecules/m-recent-item';
import { route } from 'preact-router';

const CRecentList = ({...props}) => {

  const { patients, selectPatient, getPatients } = useStore();

  useEffect(() => {
    getPatients();
  },[]);

  return (
    <div className='px-5 pt-6 bg-secondary-20' {...props}>
      <h2 className='text-secondary-500 font-medium text-h1'>Recent patients</h2>
      {
        patients?.all.map( patient => {
          return <MRecentItem onClick={() => {
            selectPatient(patient.id)
            route('/chat')
          }} patient={patient} />
        })
      }
    </div>
      
  )
}

export default CRecentList