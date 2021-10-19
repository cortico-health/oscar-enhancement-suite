import { render } from "preact";

function Messenger() {
  const container = document.body;

  function Header() {
    return (
      <div className="tw-flex tw-px-3 tw-py-2 tw-rounded-t-md tw-justify-between tw-items-center tw-bg-gray-100 tw-border">
        <h2>Messenger</h2>
        <div>Close</div>
      </div>
    );
  }

  function Subject() {
    return (
      <div className="">
        <div>
          <input
            type="text"
            className="
                    tw-form-input
                    form-input  
                    tw-block
                    tw-w-full
                    tw-border-b
                    tw-rounded-md
                    tw-border-black
                    tw-focus:border-indigo-300 
                    tw-focus:ring 
                    tw-focus:ring-indigo-200 
                    tw-focus:ring-opacity-50 tw-border-opacity-10
                  "
            placeholder="Subject Line"
          />
        </div>
      </div>
    );
  }

  function Chat() {
    return (
      <div className="">
        <textarea
          class="
                    tw-form-textarea
                    form-textarea
                    tw-block
                    tw-w-full
                    tw-rounded-md
                    tw-border-gray-300
                    tw-shadow-sm
                    tw-focus:border-indigo-300 
                    tw-focus:ring 
                    tw-focus:ring-indigo-200 
                    tw-focus:ring-opacity-50 
                    tw-resize-none
                  "
          rows="8"
          placeholder="Enter message here"
        ></textarea>
      </div>
    );
  }

  function Content() {
    return (
      <div className="tailwind">
        <div className="tw-fixed tw-bottom-5 tw-left-5 tw-bg-white tw-z-50 tw-max-w-screen-messenger tw-shadow-md tw-w-full tw-rounded-md">
          <Header />
          <div className="tw-p-4 tw-w-full">
            <Subject />
          </div>
          <div className="tw-p-4 tw-border-t tw-border-black tw-border-opacity-10">
            <Chat />
          </div>
          <div className="tw-flex tw-justify-end tw-p-4">
            <button className="tw-bg-cortico-blue tw-px-3 tw-py-3 tw-rounded-md tw-text-white">
              Send Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return render(<Content />, container);
}

export default Messenger;
