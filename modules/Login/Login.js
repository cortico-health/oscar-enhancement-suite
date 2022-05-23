import { useState } from "preact/hooks";
import LoginWindow from "./LoginWindow";
import SuccessWindow from "./SuccessWindow";
import { useSelector } from "react-redux";
import { saveExtensionStorageValue, getCorticoUrl } from "../Utils/Utils";
import { BroadcastChannel } from "broadcast-channel";

async function signInRequest(username, password) {
  const data = {
    username: username,
    password: password,
  };
  const url = getCorticoUrl() + "/api/token/";

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

function Login() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const { uid } = useSelector((state) => state.app);

  const handleSubmit = async (data) => {
    setError(null);
    setErrorMessage(null);
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const { username, password, clinicName, suffix, remember } = data;

    localStorage.setItem("clinicname", clinicName.toLowerCase());
    localStorage.setItem("customUrlSuffix", suffix.toLowerCase());

    try {
      const response = await signInRequest(username, password);
      const json = await response.json();

      if (response.status !== 200) {
        setErrorMessage(json.detail || response.statusText);
        throw new Error(json.detail || response.statusText);
      }
      saveExtensionStorageValue("jwt_refresh_token", json.refresh);
      saveExtensionStorageValue("jwt_access_token", json.access);
      saveExtensionStorageValue("jwt_expired", false);
      saveExtensionStorageValue("jwt_username", username);

      setLoading(false);
      setSuccess(true);
      const authChannel = new BroadcastChannel("cortico/oes/auth");
      authChannel.postMessage({
        title: "Sign In Detected",
        description: "Refresh is required to have the plugin working smoothly",
        uid,
      });
      authChannel.close();

      if (remember) {
        localStorage.setItem("rememberMe", true);
        localStorage.setItem("remUsername", username);
        localStorage.setItem("remClinicName", clinicName.toLowerCase());
        localStorage.setItem("remSuffix", suffix.toLowerCase());
      } else {
        localStorage.removeItem("rememberMe", false);
        localStorage.removeItem("remUsername");
        localStorage.removeItem("remClinicName");
        localStorage.removeItem("remSuffix");
      }
    } catch (error) {
      console.error(error);
      if (("" + error).includes("Failed to fetch")) {
        setErrorMessage(
          "Cortico instance cannot be reached. Check clinic name."
        );
      } else {
        setErrorMessage(error.message);
      }
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tw-bg-white tw-rounded-lg tw-mx-auto tw-p-4 tw-font-sans tw-h-full">
      {success === false ? (
        <LoginWindow
          onSubmit={handleSubmit}
          error={error}
          loading={loading}
          errorMessage={errorMessage}
        />
      ) : (
        <SuccessWindow />
      )}
    </div>
  );
}

export default Login;
