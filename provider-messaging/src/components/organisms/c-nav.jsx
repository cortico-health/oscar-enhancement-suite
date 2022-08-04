import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import ASvg from '../atoms/a-svg';
import CPlugin from './c-plugin';
import { Link } from 'preact-router/match';
import MMobileNav from '../molecules/m-mobile-nav';
import { useStore } from '../../state';
import AButton from '../atoms/a-button';
import { useRouter } from 'preact-router';
import { observer } from 'mobx-react-lite';

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
          <Link activeClassName='bg-primary-500 child:child:stroke-white' className="mx-auto p-3 rounded-full" href="/"><ASvg src="grid" /> </Link>
          <Link className={`mx-auto p-3 rounded-full ${route.url.includes('/chat') && 'bg-primary-500 child:child:stroke-white'}`} href="/chat"> <ASvg className="stroke-secondary-500" src="selected" /> </Link>
          <Link activeClassName='bg-primary-500 child:child:stroke-white' className="mx-auto p-3 rounded-full" href="/select"><ASvg src="users" /></Link>
          <Link activeClassName='bg-primary-500 child:child:stroke-white' className="mx-auto p-3 rounded-full" href="#profile"><ASvg src="settings" /></Link>
          <Link activeClassName='bg-primary-500 child:child:stroke-white' className="mx-auto p-3 rounded-full" href="/add-to-chat"><ASvg src="selected2" /></Link>
        </div>

        <div className='flex flex-col'>
          <div className="mx-auto p-3 rounded-full"><ASvg src="info" /></div>
          <div role="button" onClick={ () => authStore.logout() } className="mx-auto p-3 cursor-pointer rounded-full"> <ASvg src="log-out" /></div>
          <CPlugin className="lg:flex hidden ml-4" />
        </div>
      </nav>


      <div className='c-nav__mobile flex sticky z-20 lg:hidden top-0 min-h-22 w-full bg-secondary-20'>
        <div className='z-10 flex w-full px-7 gap-x-7 bg-primary-500 rounded-tr-2xl rounded-br-2xl items-center'>
          <div onClick={() => setIsOpened(true)}><ASvg className="cursor-pointer" src="menu" /> </div>

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
        </div>
        {patient ?
          <div className='bg-secondary-20 pl-4 w-full flex flex-col justify-center'>
            <p className='text-h4 text-secondary-300'> <span className='font-medium'>Gender:</span> {patient?.gender}  </p>
            <p className='text-h4 text-secondary-300'> <span className='font-medium'>Date of birth: </span> {patient?.birthDate.toLocaleDateString()}  </p>
            <p className='text-h4 text-secondary-300'> <span className='font-medium'>Health card number: </span> {patient?.healthCardNumber}  </p>
          </div>
          : null}


        <div className={`${isOpened ? 'block' : 'hidden'} fixed z-20 bg-black/50 left-0 h-screen top-0 w-screen`}>
          <MMobileNav setIsOpened={setIsOpened} patient={patient} />
        </div>
      </div>
    </>
  )
}

export default observer(CNav);