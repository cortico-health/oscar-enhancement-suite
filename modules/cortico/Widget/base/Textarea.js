import classNames from "classnames";
import { useState } from "preact/hooks";

export default function Textarea({
  onChange,
  defaultValue,
  className,
  name,
  placeholder = "Type here",
  label,
  rows = 4,
  ...props
}) {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (evt) => {
    setValue(evt.target.value);
    onChange && onChange(evt.target.value);
  };

  return (
    <>
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>
      <textarea
        className={classNames(
          "block w-full resize-none bg-gray-50 border border-gray-200 rounded-md p-3 text-gray-500 placeholder-gray-500",
          className
        )}
        placeholder={placeholder}
        id={name}
        name={name}
        onChange={handleChange}
        rows={rows}
        defaultValue={defaultValue}
        value={value}
        {...props}
      ></textarea>
    </>
  );
}
