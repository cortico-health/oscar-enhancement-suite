import classNames from "classnames";

export default function Select({ className, onChange, options, ...props }) {
  return (
    <select
      className={classNames(
        "tw-block tw-w-full tw-mt-1 tw-rounded-md tw-border-gray-300 tw-shadow-sm focus:tw-border-indigo-300 focus: tw-ring focus: tw-ring-indigo-200 focus: tw-ring-opacity-50",
        className
      )}
      {...props}
    >
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
