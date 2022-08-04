import { h } from 'preact';
import { Link } from 'preact-router';
import ASvg from '../atoms/a-svg';

const MWelcomeOption= ({ field }) => {

  return (
    <Link href={ field.link } className='m-welcome-option'>
      <div className='m-welcome-option__circle'>
        <ASvg className='m-welcome-option__logo child:stroke-white' src={field.logo} />
      </div>
      <h3 className='m-welcome-option__heading'> { field.heading }</h3>
      <p className='m-welcome-option__copy'> { field.copy } </p>
    </Link>
  )
}

export default MWelcomeOption