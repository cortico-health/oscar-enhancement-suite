import { render } from "preact";
import { useEffect } from "preact/hooks";
import { forwardRef } from "preact/compat";

const Chat = forwardRef(({ value, ...props }, ref) => {
  useEffect(() => {
    if (value) {
      ref.current.value = value;
    }
  }, [value]);

  return (
    <div className="">
      <textarea
        ref={ref}
        class="
                    tw-form-textarea
                    form-textarea
                    tw-block
                    tw-w-full
                    tw-border-0
                    tw-focus:border-indigo-300 
                    tw-focus:ring 
                    tw-focus:ring-indigo-200 
                    tw-focus:ring-opacity-50 
                    tw-resize-none
                    tw-text-sm
                    tw-text-gray-600
                    tw-p-4
                    tw-font-sans
                  "
        rows="8"
        placeholder="Enter message here"
      ></textarea>
    </div>
  );
});

export default Chat;
