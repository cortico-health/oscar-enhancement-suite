import { render } from "preact";

function Disclaimer() {
  const container = document.querySelector(".cortico-modal");

  const handleClick = () => {
    if (window.pubsub) {
      window.pubsub.publish("modal.close");
    }
  };

  function Content() {
    return (
      <div className="tw-bg-cortico-blue tw-p-10 tw-mx-auto tw-rounded-xl tw-max-w-3xl tw-text-white">
        <p className="tw-text-2xl">
          By popular demand, Cortico has developed this free and Open Source
          plug-in for Oscar. Due to the nature of a browser plug-in, we're
          unable to guarantee it will work with every EMR update, and you use it
          at your own risk
          <div className="tw-my-2">
            (See Licence at{" "}
            <a href="https://github.com/cortico-health/oscar-enhancement-suite/blob/main/LICENSE">
              https://github.com/cortico-health/oscar-enhancement-suite/blob/main/LICENSE
            </a>
            ).
          </div>{" "}
          It is a browser plug-in, so will be active for ALL EMRs you use, not
          just the ones for which you have a Cortico subscription. The plug-in
          is optional, and for convenience only. It's not required for Cortico
          itself to function.
        </p>

        <div className="tw-flex tw-justify-end tw-mt-10">
          <button
            onClick={handleClick}
            className="tw-bg-white tw-px-4 tw-py-2 tw-rounded-xl tw-text-cortico-blue tw-font-bold tw-text-2xl"
          >
            I understand :)
          </button>
        </div>
      </div>
    );
  }

  return render(<Content />, container);
}

export default Disclaimer;
