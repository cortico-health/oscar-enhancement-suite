//Use when integrating outside of preact
import { render } from "preact";
import { useState, useEffect } from "preact/hooks";
import Login from "./Login";
import PreactModal from "../Modal/PreactModal";

function LoginOscar(container) {
  const _container = container || document.body;

  function Content({ ...props }) {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      pubsub.subscribe("signin", () => {
        setShowModal(true);
      });
    }, []);

    return (
      <div className="tailwind tw-font-sans tw-fixed tw-z-10005 DoNotPrint">
        <PreactModal
          show={showModal}
          close={() => {
            setShowModal(false);
          }}
        >
          <Login />
        </PreactModal>
      </div>
    );
  }

  return render(<Content />, _container);
}

export default LoginOscar;
