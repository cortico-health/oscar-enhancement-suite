import { h } from 'preact';

const ARadio = ({ children,onChange,name,value,checked,className,onInput,...props }) => {

    const camelToWords = (text) => {
        const result = text.replace(/([A-Z])/g," $1");
        return result.charAt(0).toUpperCase() + result.slice(1);
    }

    return (
        <div { ...props } className={ `tw-flex tw-items-center tw-mb-4 cursor-pointer ${className}` }>
            <input id={ `radio-${value.toLowerCase()}` } type="radio" value={ value } name={ name }
                defaultChecked={ checked } onChange={ onChange }
                className="tw-w-4 tw-h-4 tw-text-primary-500 tw-bg-gray-100 tw-border-gray-300 focus:tw-ring-primary-500" />
            <label for={ `radio-${value.toLowerCase()}` }
                className="tw-ml-2 tw-text-sm tw-font-medium tw-text-secondary-500"
            >
                { camelToWords(value) }
            </label>
        </div>
    )
}

export default ARadio;