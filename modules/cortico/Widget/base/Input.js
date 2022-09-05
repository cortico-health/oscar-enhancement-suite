import { forwardRef } from "preact/compat";
import classNames from "classnames";

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
      defaultValue,
      minValue = "",
      maxValue = "",
      exempt = false,
      registerOpts = {},
      units = "",
      onChange,
      value,
      isError = false,
      ...props
    },
    ref
  ) => {
    const handleChange = (evt) => {
      onChange && onChange(evt.target.value);
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
              "tw-text-sm tw-border-b tw-outline-none tw-inline-block tw-py-2 tw-w-full tw-text-gray-700",
              "placeholder:tw-text-sm",
              !isError ? " tw-border-gray-300" : "tw-border-yellow-400",
              className
            )}
            min={minValue}
            max={maxValue}
            maxLength={maxLength}
            onChange={handleChange}
            value={value}
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
