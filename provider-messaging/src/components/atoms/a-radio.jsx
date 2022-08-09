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
    <div { ...props } className={ `flex items-center mb-4 ${className}` }>
      <input id={ `radio-${value.toLowerCase()}` } type="radio" value={ value } name={ name }
        defaultChecked={ checked } onChange={ onChange }
        className="w-4 h-4 text-primary-500 bg-gray-100 border-gray-300 focus:ring-primary-500" />
      <label for={ `radio-${value.toLowerCase()}` }
        className="ml-2 text-sm font-medium text-secondary-500"
      >
        { camelToWords(value) }
      </label>
    </div>
  )
}

export default ARadio;