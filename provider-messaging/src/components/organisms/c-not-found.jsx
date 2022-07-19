import { h } from 'preact';
import { useState } from 'preact/hooks';
import AButton from '../atoms/a-button';

const CNotFound = ({ name }) => {

  const [ inputs, setInputs] = useState({
    firstName: '',
    lastName:'',
    email: '',
    phone: '',
    clinic: ''
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(inputs, null, 2))
  }

  const [ isOpened, setIsOpened ] = useState(false);
  return (
    <div className='c-not-found relative'>
      <p className='text-center text-h3 text-secondary-500 px-9 mb-2'> It seems like {name} is not in our network. To start a conversation with { name }, please use the invite button below. </p>  
      
      {
        isOpened ?
        <div className='bg-white px-7 pt-9 pb-7 rounded-2xl'> 
          <form onSubmit={onSubmit}>
            <label className='c-not-found__label' htmlFor='firstName'>First Name<span>*</span></label>
            <input onChange={onChange} className='c-not-found__input' type="text" name="firstName"/>

            <label className='c-not-found__label' htmlFor='lastName'>Last Name<span>*</span></label>
            <input onChange={onChange} className='c-not-found__input' type="text" name="lastName"/>

            <label className='c-not-found__label' htmlFor='title'>Title<span>*</span></label>
            <input onChange={onChange} className='c-not-found__input' type="text" name="title"/>

            <label className='c-not-found__label' htmlFor='email'>Work Email</label>
            <input onChange={onChange} className='c-not-found__input' type="text" name="email"/>

            <label className='c-not-found__label' htmlFor='phone'>Cell Phone</label>
            <input onChange={onChange} className='c-not-found__input' type="text" name="phone"/>

            <label className='c-not-found__label' htmlFor='clinic'>Clinic</label>
            <select onChange={onChange} className='c-not-found__input bg-white' type="select" name="clinic">
              <option>First Clinic</option>
              <option>Second Clinic</option>
              <option>Third Clinic</option>
            </select>
          <div className='flex justify-center'>
            <AButton className="w-36 bg-primary-500" variant='button-primary-sm' type="submit">
              Invite
            </AButton>
          </div>
          </form>
        </div>
        :
      <AButton onClick={() => setIsOpened(true)} variant='button-primary-sm' className="w-44 absolute left-1/2 -translate-x-1/2">
        Invite user
      </AButton>

      }
    </div>
  )
}

export default CNotFound