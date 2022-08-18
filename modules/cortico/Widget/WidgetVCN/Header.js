import { useState } from "preact/hooks";

import MenuLogo from "../../../../resources/icons/menu.svg"

const Header = () => {
    const [isOpened, setIsOpened] = useState(false);
    const selectedPatient = null;

    return (
        <div className='c-nav__mobile tw-flex tw-sticky tw-z-20 tw-top-0 tw-min-h-22 tw-w-full tw-bg-gray'>
            <div className='tw-z-10 tw-flex tw-w-full tw-px-7 tw-gap-x-7 tw-bg-blue-500 tw-rounded-tr-2xl tw-rounded-br-2xl tw-items-center'>
                <div onClick={() => setIsOpened(true)}>
                    <img className="tw-w-[20px] tw-mx-auto" src={MenuLogo} />
                </div>

                {selectedPatient ?
                <>
                    {/* <ASvg className="first:child:fill-primary-300 min-w-12.5 min-h-12.5" src="avatar" /> */}
                    <div className='tw-text-white'>
                    <h1>{selectedPatient?.first_name + " " + selectedPatient?.last_name}</h1>
                    <h2> {selectedPatient?.facility}</h2>
                    </div>
                </>
                :
                <div>
                    <p className='tw-text-white'> No patient selected</p>{/* 
                    <AButton href="/select" className='w-full block' variant='button-secondary-sm'>Select patient</AButton> */}
                </div>
                }
            </div>

            {selectedPatient ?
                <div className='tw-bg-secondary-20 tw-pl-4 tw-w-full tw-flex tw-flex-col tw-justify-center'>
                <p className='text-h4 text-secondary-300'> <span className='text-h4 font-medium'>Gender:</span> {selectedPatient?.gender}  </p>
                <p className='text-h4 text-secondary-300'> <span className='text-h4 font-medium'>Date of birth: </span> {new Date(selectedPatient.birth_date).toLocaleDateString()}  </p>
                <p className='text-h4 text-secondary-300'> <span className='text-h4 font-medium'>Health card number: </span> {selectedPatient.hin}  </p>
                </div>
                : null}

            <div className={`${isOpened ? 'block' : 'hidden'} text-h4 fixed text-h4 z-20 text-h4 bg-black/50 text-h4 left-0 text-h4 h-full text-h4 top-0 text-h4 w-full`}>
                {/* <MMobileNav setIsOpened={setIsOpened} patient={selectedPatient} /> */}
            </div>
        </div>
    )
}

export default Header