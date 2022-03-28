import classNames from "classnames";
import { useState } from "preact/hooks";

export default function Textarea({
  onChange,
  defaultValue,
  className,
  name,
  placeholder = "Type here",
  label,
  rows = 6,
  ...props
}) {
  const handleChange = (evt) => {
    onChange && onChange(evt.target.value);
  };

  return (
    <>
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>
      <textarea
        className={classNames(
          "tw-p-2 tw-rounded-md tw-block tw-w-full tw-border tw-border-opacity-20 tw-resize-none bg-gray-50 border border-gray-200 rounded-md p-3 tw-text-sm text-gray-500 placeholder-gray-500",
          className
        )}
        placeholder={placeholder}
        id={name}
        name={name}
        onChange={handleChange}
        rows={rows}
        defaultValue={defaultValue}
        {...props}
      ></textarea>
    </>
  );
}
