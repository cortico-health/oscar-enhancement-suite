import { h } from "preact";
import { useRef } from "preact/hooks";

const inputEffects = "placeholder:tw-text-primary-300 focus:tw-outline-primary-600";

const a_input = "tw-text-input tw-w-full tw-my-3 tw-text-secondary-500 tw-outline tw-outline-1 tw-outline-secondary-100 " + inputEffects;

const textarea_class = "tw-text-input tw-w-full tw-my-3 tw-text-secondary-500 tw-outline tw-outline-1 tw-outline-secondary-100 " + inputEffects;


const AInput = ({
  children,
  name,
  className = "",
  onInput,
  onChange,
  onKeyDown,
  type = "text",
  placeholder = "Search...",
  ...props
}) => {
  const inputRef = useRef(null);

  return (
    <div className={ `${a_input} tw-relative ${className}` } { ...props }>
      <div className="tw-absolute tw-w-full tw-h-full tw-pointer-events-none tw-top-0 tw-left-0">
        { children }
      </div>
      <label htmlFor={ name }></label>
      { type == "text" ? (
        <input
          onInput={ onInput }
          onChange={ onChange }
          ref={ inputRef }
          name={ name }
          placeholder={ placeholder }
          type="text"
        />
      ) : (
        <textarea
          className={ `${textarea_class} tw-resize-none` }
          onKeyDown={ (e) => {
            if (e.key === "Enter" && e.ctrlKey) {
              onKeyDown()
            }
          } }
          rows={ 1 }
          onInput={ onInput }
          ref={ inputRef }
          name={ name }
          placeholder={ placeholder }
        />
      ) }
    </div>
  );
};

export default AInput;
