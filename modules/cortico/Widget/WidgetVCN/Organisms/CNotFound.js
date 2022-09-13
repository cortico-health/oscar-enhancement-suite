import "./css/c-not-found.css"
import { useState } from 'preact/hooks';
import AButton from "../Atoms/AButton";

const CNotFound = ({ name }) => {
    /* TODO Dwight: Bring this back if vcn invite feature is prioritized */

    /* const [inputs,setInputs] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        clinic: ''
    });

    const onChange = (e) => {
        const { name,value } = e.target;
        setInputs({ ...inputs,[name]: value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(inputs,null,2))
    } */

    const [isOpened, setIsOpened] = useState(false);
    return (
        <div className='c-not-found tw-relative'>
            {/* <p className='tw-text-center tw-text-h3 tw-text-secondary-500 tw-px-5 tw-mb-2'> It seems like <span className="tw-font-bold">{ name }</span> is not in our network. To start a conversation with <span className="tw-font-bold">{ name }</span>, please use the invite button below. </p> */}
            <p className='tw-text-center tw-text-h3 tw-text-secondary-500 tw-px-5 tw-mb-2'>
                {(name) ?
                    (
                        <>
                            It seems like <span className="tw-font-bold">{name}</span> is not in our network. To start a conversation with <span className="tw-font-bold">{name}</span>, please ask him/her to create their own account.
                        </>
                    )
                    :
                    (
                        <>
                            No Conversations for this patient
                        </>
                    )
                }
            </p>

            {/* {
                isOpened ?
                    <div className='tw-bg-white tw-px-7 tw-pt-9 tw-pb-7 tw-rounded-2xl'>
                        <form onSubmit={ onSubmit }>
                            <label className='c-not-found__label' htmlFor='first_name'>First Name<span>*</span></label>
                            <input onChange={ onChange } className='c-not-found__input' type="text" name="first_name" />

                            <label className='c-not-found__label' htmlFor='last_name'>Last Name<span>*</span></label>
                            <input onChange={ onChange } className='c-not-found__input' type="text" name="last_name" />

                            <label className='c-not-found__label' htmlFor='title'>Title<span>*</span></label>
                            <input onChange={ onChange } className='c-not-found__input' type="text" name="title" />

                            <label className='c-not-found__label' htmlFor='email'>Work Email</label>
                            <input onChange={ onChange } className='c-not-found__input' type="text" name="email" />

                            <label className='c-not-found__label' htmlFor='phone'>Cell Phone</label>
                            <input onChange={ onChange } className='c-not-found__input' type="text" name="phone" />

                            <label className='c-not-found__label' htmlFor='clinic'>Clinic</label>
                            <select onChange={ onChange } className='c-not-found__input bg-white' type="select" name="clinic">
                                <option>First Clinic</option>
                                <option>Second Clinic</option>
                                <option>Third Clinic</option>
                            </select>
                            <div className='tw-flex tw-justify-center'>
                                <AButton className="tw-w-36 tw-bg-primary-500" variant='button-primary-sm' type="submit">
                                    Invite
                                </AButton>
                            </div>
                        </form>
                    </div>
                    :
                    <AButton onClick={ () => setIsOpened(true) } variant='button-primary-sm' className="tw-w-44 tw-absolute tw-left-1/2 -tw-translate-x-1/2">
                        Invite user
                    </AButton>

            } */}
        </div>
    )
}

export default CNotFound