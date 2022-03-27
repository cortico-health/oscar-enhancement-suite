import { forwardRef } from "preact/compat";
import classNames from "classnames";
import { useRef, useState } from "preact/hooks";

const Input = forwardRef(
  (
    {
      name = "",
      className,
      maxLength,
      size,
      type = "text",
      placeholder = "To",
      label = "",
      labelPosition = "left",
      labelClassName = "",
      defaultValue = "",
      minValue = "",
      maxValue = "",
      exempt = false,
      registerOpts = {},
      units = "",
      onChange,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState(null);

    const handleChange = (evt) => {
      const newValue = evt.target.value;
      setValue(newValue);
      onChange && onChange(newValue);
    };
    return (
      <>
        <div className="flex items-center tw-w-full">
          {/*
          {labelPosition === "left" && (
            <label
              htmlFor={name}
              className={classNames(
                "tw-text-gray-700 tw-text-sm",
                labelClassName
              )}
            >
              {label}
            </label>
              )}*/}
          <input
            defaultValue={defaultValue}
            ref={ref}
            id={name}
            type={type}
            placeholder={placeholder}
            className={classNames(
              "tw-text-sm tw-border-b tw-border-gray-300 tw-outline-none tw-inline-block tw-py-2 tw-mx-1 tw-w-full tw-text-gray-700",
              "placeholder:tw-text-sm",
              className
            )}
            min={minValue}
            max={maxValue}
            maxLength={maxLength}
            onChange={handleChange}
            {...props}
          />
          {units}
          {labelPosition === "right" && (
            <label htmlFor={name} className={labelClassName}>
              {label}
            </label>
          )}
        </div>
      </>
    );
  }
);

export default Input;
