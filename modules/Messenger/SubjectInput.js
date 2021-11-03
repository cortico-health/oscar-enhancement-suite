import { render } from "preact";
import { useEffect } from "preact/hooks";

import { forwardRef } from "preact/compat";

const Subject = forwardRef(({ value, ...props }, ref) => {
  useEffect(() => {
    if (value) {
      ref.current.value = value;
    }
  }, [value]);
  return (
    <div className="">
      <div>
        <input
          ref={ref}
          type="text"
          class="
                    tw-mt-0
                    tw-block
                    tw-w-full
                    tw-px-4
                    tw-py-2
                    tw-border-0 tw-border-btw-tracking-wider
                    tw-focus:border-indigo-300 
                    tw-focus:ring 
                    tw-focus:ring-indigo-200 
                    tw-focus:ring-opacity-50 
                    tw-text-sm tw-text-gray-700 tw-font-sans
                  "
          placeholder="Subject"
        />
      </div>
    </div>
  );
});

export default Subject;
