import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import ASvg from '../atoms/a-svg';
import CPlugin from './c-plugin';
import MMobileNav from '../molecules/m-mobile-nav';
import { useStore } from '../../state';
import { useRouter } from 'preact-router';
import { observer } from 'mobx-react-lite';
import MNavItem from '../molecules/m-nav-item';

const CNav = () => {
  const route = useRouter()[0];
  const { patientStore,authStore } = useStore();
  const [patient, setPatient] = useState(undefined);


  useEffect(() => {
    if (patientStore.patients.all?.length) {
      if (patientStore.patients.selected) {
        setPatient(patientStore.patients.selected);
      }
      else setPatient(undefined);
    }
  },[patientStore.patients]);

  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <nav className='c-nav fixed pt-6 pb-3 z-10 lg:flex hidden flex-col justify-between bg-white left-0 h-screen w-20'>
        <a href="/" className="mx-auto"><ASvg src="logo" /> </a>

        <div className='flex flex-col'>
          <MNavItem activeClassName='bg-primary-500 child:child:stroke-white' icon="grid" href="/" />
          <MNavItem className={ `mx-auto p-3 rounded-full ${route.url.includes('/chat') && 'bg-primary-500 child:child:stroke-white'}` }
            icon="selected" href="/chat" svgClass="stroke-secondary-500" />
          <MNavItem activeClassName='bg-primary-500 child:child:stroke-white' icon="settings" href="#profile" />
          <MNavItem activeClassName='bg-primary-500 child:child:stroke-white' icon="selected2" href="/add-to-chat" />
          {/*
            TODO Dwight - Patient: Return this if this is functional
            <MNavItem activeClassName='bg-primary-500 child:child:stroke-white' icon="users" href="/select" />
          */}
        </div>

        <div className='flex flex-col'>
          <MNavItem icon="info" href="https://cortico.health/" target="_blank" />
          <div role="button" onClick={ () => authStore.logout() } className="mx-auto p-3 cursor-pointer rounded-full"> <ASvg src="log-out" /></div>
          <CPlugin className="lg:flex hidden ml-4" />
        </div>
      </nav>


      <div className='c-nav__mobile flex sticky z-20 lg:hidden top-0 min-h-22 w-full bg-secondary-20'>
        <div className='z-10 flex w-full px-7 gap-x-7 bg-primary-500 rounded-tr-2xl rounded-br-2xl items-center'>
          <div onClick={() => setIsOpened(true)}><ASvg className="cursor-pointer" src="menu" /> </div>

          {/*
            TODO Dwight - Patient: Return this if this is functional
            {patient ? <>
              <ASvg className="first:child:fill-primary-300 min-w-12.5 min-h-12.5" src="avatar" />
              <div className='text-white'>
                <h1>{patient?.firstName + " " + patient?.lastName}</h1>
                <h2> {patient?.facility}</h2>
              </div>
            </>
              : <div>
                <p className='text-white'> No patient selected</p>
                <AButton href="/select" className='w-full block' variant='button-secondary-sm'> Select patient</AButton>
              </div>
            }
          */}
        </div>
        {/*
          TODO Dwight - Patient: Return this if this is functional
          {patient ?
            <div className='bg-secondary-20 pl-4 w-full flex flex-col justify-center'>
              <p className='text-h4 text-secondary-300'> <span className='font-medium'>Gender:</span> {patient?.gender}  </p>
              <p className='text-h4 text-secondary-300'> <span className='font-medium'>Date of birth: </span> {patient?.birthDate.toLocaleDateString()}  </p>
              <p className='text-h4 text-secondary-300'> <span className='font-medium'>Health card number: </span> {patient?.healthCardNumber}  </p>
            </div>
            : null}
        */}


        <div className={`${isOpened ? 'block' : 'hidden'} fixed z-20 bg-black/50 left-0 h-screen top-0 w-screen`}>
          <MMobileNav setIsOpened={ setIsOpened } /* patient={patient} */ />
        </div>
      </div>
    </>
  )
}

export default observer(CNav);