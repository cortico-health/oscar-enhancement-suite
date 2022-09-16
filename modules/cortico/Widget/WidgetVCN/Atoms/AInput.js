import { h } from "preact";
import { useEffect,useRef } from "preact/hooks";

const inputEffects = "placeholder:tw-text-primary-300 focus:tw-outline-[#5c70ff] focus:tw-outline-[0.2rem]";

const input_class = "tw-text-input tw-w-full tw-my-3 tw-text-secondary-500 tw-outline tw-outline-[0.10rem] " + inputEffects;


const AInput = ({
  children,
  name,
  className = "",
  onInput,
  onChange,
  onKeyDown,
  type = "text",
  placeholder = "Search...",
  inputClass = "",
  disabled = false,
  noImageDrop = false,
  ...props
}) => {
  const inputRef = useRef(null);

  const onDrop = (evt) => {
    const types = evt.dataTransfer.types;
    console.log("Dropped Types: ",types);
    if (types.length > 2 || types.indexOf("text/uri-list") > -1) {
      evt.preventDefault();
    }
  }

  return (
    <div className={ `tw-relative ${className}` } { ...props }>
      <div className="tw-absolute tw-w-full tw-h-full tw-pointer-events-none tw-top-0 tw-left-0">
        { children }
      </div>
      <label htmlFor={ name }></label>
      { type == "text" ? (
        <input
          className={ `${input_class} ${inputClass}` }
          onInput={ onInput }
          onChange={ onChange }
          ref={ inputRef }
          name={ name }
          placeholder={ placeholder }
          disabled={ disabled }
          type="text"
        />
      ) : (
        <textarea
            className={ `${input_class} tw-resize-none ${inputClass}` }
            onKeyDown={
              (e) => {
                if (e.key === "Enter" && e.ctrlKey) {
                  onKeyDown()
                }
              }
            }
            disabled={ disabled }
            onDrop={ onDrop }
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
