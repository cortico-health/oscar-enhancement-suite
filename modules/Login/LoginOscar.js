//Use when integrating outside of preact
import { render } from "preact";
import { useState, useEffect } from "preact/hooks";
import Login from "./Login";
import PreactModal from "../Modal/PreactModal";

function LoginOscar(container, replaceNode) {
  function Content({ ...props }) {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      pubsub.subscribe("signin", () => {
        setShowModal(true);
      });
    }, []);

    return (
      <div className="cleanslate">
        <div className="tailwind preflight tw-font-sans tw-fixed tw-z-10005 DoNotPrint">
          <PreactModal
            show={showModal}
            close={() => {
              setShowModal(false);
            }}
          >
            <Login />
          </PreactModal>
        </div>
      </div>
    );
  }

  return render(<Content />, container, replaceNode);
}

export default LoginOscar;
