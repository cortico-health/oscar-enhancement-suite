import { render } from "preact";
import { useState } from "preact/hooks";
import corticoIcon from "../../resources/icons/96x96.png";
import LoginWindow from "./LoginWindow";
import SuccessWindow from "./SuccessWindow";
import { signInRequest } from "../cortico/Login/Login";

function Login() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (data) => {
    setLoading(true);
    console.log("Login Called", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const { username, password } = data;

    try {
      const response = await signInRequest(username, password);
      const json = await response.json();
      console.log("json", json);

      const browser = browser ? browser : window.chrome;
      if (browser) {
        if (window.is_dev) {
          window.localStorage.setItem("jwt_access_token", json.access);
          window.localStorage.setItem("jwt_expired", false);
          window.localStorage.setItem("jwt_username", username);
        } else {
          browser.storage.local.set({ jwt_access_token: json.access });
          browser.storage.local.set({ jwt_expired: false });
          browser.storage.local.set({ jwt_username: username });
        }
      }
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="tw-bg-white tw-rounded-lg tw-p-4 tw-min-w-[300px] tw-font-sans">
      {success !== true ? (
        <LoginWindow onSubmit={handleSubmit} error={error} loading={loading} />
      ) : (
        <SuccessWindow />
      )}
    </div>
  );
}

export default Login;
