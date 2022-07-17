import { h } from 'preact';
import { useState } from 'preact/hooks';
import ASvg from '../atoms/a-svg';

const CPlugin = ({className, ...props}) => {

  const [expandBanner, setExpandBanner] = useState(false);
  return (
    <div {...props}
      onMouseEnter={() => setExpandBanner(true)} 
      onMouseLeave={() => setExpandBanner(false)}
      className={`c-plugin ${className}`}>
      <ASvg className="my-4 mx-4" src="plug"/>
      {
        expandBanner ?
      <div className='-ml-2 mr-5'>
        <h2 className='text-secondary-500 text-h1'>Install EMR plug-in</h2>
        <p className='text-secondary-500 text-h2'>Send messages & files directly in your EMR</p>
      </div>
      : null }
    </div>
  )
}

export default CPlugin