import { h } from "preact";
// import { define } from 'preactement';
import ASvg from "./a-svg";
import { useRef } from "preact/hooks";

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
    <div className={`a-input relative ${className}`} {...props}>
      <div className="absolute w-full h-full pointer-events-none">
        {children}
      </div>
      <label htmlFor={name}></label>
      {type == "text" ? (
        <input
          onInput={onInput}
          onChange={onChange}
          ref={inputRef}
          name={name}
          placeholder={placeholder}
          type="text"
        />
      ) : (
        <textarea
          className="resize-none"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.ctrlKey) {
              onKeyDown()
            }
          }}
          rows={1}
          onInput={onInput}
          ref={inputRef}
          name={name}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

// export default define('a-input', () => AInput);
export default AInput;
