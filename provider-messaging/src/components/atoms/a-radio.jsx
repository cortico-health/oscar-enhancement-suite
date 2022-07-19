import { h } from 'preact';
// import { define } from 'preactement';
import ASvg from './a-svg';
import { useRef } from 'preact/hooks';

const ARadio = ({children, onChange, name, value, checked, className, onInput, ...props}) => {
  
  const inputRef = useRef(null);

  const camelToWords = (text) => {
    const result = text.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  return (
    <div {...props} className={`a-radio ${className}`}>
      <input onChange={onChange} defaultChecked={checked} value={value} name={name} type="radio"/>
      <label htmlFor={name}>{ camelToWords(value) } </label>
      <span className="a-radio__checkmark"></span>
    </div>
  )
}

export default ARadio;