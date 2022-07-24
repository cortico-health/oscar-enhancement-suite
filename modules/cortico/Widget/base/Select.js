import classNames from "classnames";

export default function Select({
  className,
  options,
  onChange,
  label,
  tooltip,
  defaultValue,
  value,
  placeholder = false,
  placeholderText = null,
  ...props
}) {
  const handleChange = (evt) => {
    const value = evt.target.value;
    onChange && onChange(value);
  };
  return (
    <>
      <label>
        <span className="tw-text-sm tw-text-gray-900 tw-font-medium">
          {label}
        </span>
        <div className="tw-inline-block">{tooltip}</div>
        <select
          onChange={handleChange}
          defaultValue={defaultValue}
          value={value}
          className={classNames(
            "tw-p-2 tw-block tw-w-full tw-rounded-md tw-border-gray-300 tw-shadow-sm focus:tw-border-indigo-300 focus: tw-ring focus: tw-ring-indigo-200 focus: tw-ring-opacity-50",
            className
          )}
          {...props}
        >
          {placeholder === true ? (
            <option disabled value="placeholder">
              {placeholderText}
            </option>
          ) : null}
          {options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}
