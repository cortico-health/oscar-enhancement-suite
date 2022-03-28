import { forwardRef } from "preact/compat";
import classNames from "classnames";
import { useRef, useState } from "preact/hooks";

const Checkbox = forwardRef(
  (
    {
      name = "",
      className,
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
      <label class="tw-inline-flex tw-items-center">
        <input
          {...props}
          ref={ref}
          type="checkbox"
          defaultChecked={defaultChecked}
          className="
                tw-h-5
                tw-w-5
                tw-form-checkbox
                tw-rounded
                tw-text-indigo-600
                tw-shadow-sm
                tw-focus:border-cortico-blue
                tw-focus:ring
                tw-focus:ring-offset-0
                tw-focus:ring-indigo-200
                tw-focus:ring-opacity-50
              "
          onChange={handleChange}
        />
        <span class="tw-ml-2 tw-text-sm tw-text-gray-600">{label}</span>
      </label>
    );
  }
);

export default Checkbox;
