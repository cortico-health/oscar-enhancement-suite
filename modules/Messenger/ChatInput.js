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
        className="
                    tw-form-textarea
                    form-textarea
                    tw-block
                    tw-w-full
                    tw-border
                    tw-border-blue-1000
                    tw-outline-none
                    tw-resize-none
                    tw-text-sm
                    tw-text-gray-600
                    tw-p-2
                    tw-font-sans
                    tw-relative
                    tw-rounded-md
                    tw-border-opacity-20
                  "
        rows="8"
        placeholder="Enter message here"
      ></textarea>
    </div>
  );
});

export default Chat;
