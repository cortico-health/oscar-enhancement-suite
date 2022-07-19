import { h } from 'preact';
import { define } from 'preactement';

const variantClass = {
  'button-primary-sm':'a-button--sm a-button--primary',
  'button-primary-lg':'a-button--lg a-button--primary',
  'button-secondary-sm':'a-button--sm a-button--secondary',
  'button-secondary-lg':'a-button--lg a-button--secondary',
  'button-tertiary-sm':'a-button--sm a-button--tertiary',
  'button-tertiary-lg':'a-button--lg a-button--tertiary',
  'tab': 'border border-secondary-100 rounded-l-full gap-x-1.5 px-4 rounded-r-full flex items-center'
}

const AButton = ({variant='button-primary-sm', href, children, className, ...props}) => {
  
  return (
      href==undefined ?
        <button className={`a-button my-3 rounded ${variantClass[variant]} ${className? className: ''}`} {...props} >{children}</button>:
        <a href={href} className={`a-button my-3 flex justify-center items-center rounded ${variantClass[variant]} ${className}`} {...props} >{children}</a>
  )
}

export default AButton
// export default define('a-button', () => AButton, { attributes:['variant']});