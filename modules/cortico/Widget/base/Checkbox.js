import { forwardRef } from "preact/compat";
import classNames from "classnames";

const Checkbox = forwardRef(
  (
    {
      name = "",
      className,
      checked,
      size,
      label = "",
      defaultChecked = false,
      registerOpts = {},
      onChange,
      ...props
    },
    ref
  ) => {
    const handleChange = (evt) => {
      const isChecked = evt.target.checked;
      onChange && onChange(isChecked);
    };
    return (
      <label class="tw-inline-flex tw-items-center tw-cursor-pointer">
        <input
          {...props}
          ref={ref}
          type="checkbox"
          checked={checked}
          defaultChecked={defaultChecked}
          className={classNames(
            "tw-h-5 tw-w-5 tw-form-checkbox tw-rounded tw-text-blue-1000 tw-shadow-sm tw-focus:border-cortico-blue tw-focus:ring tw-focus:ring-offset-0 tw-focus:ring-blue-200 tw-focus:ring-opacity-50",
            classNames
          )}
          onChange={handleChange}
        />
        <span class="tw-ml-2 tw-text-sm tw-text-gray-600 tw-cursor-pointer">
          {label}
        </span>
      </label>
    );
  }
);

export default Checkbox;
