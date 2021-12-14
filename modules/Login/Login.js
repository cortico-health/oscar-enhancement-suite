import { render } from "preact";
import { useState } from "preact/hooks";
import corticoIcon from "../../resources/icons/96x96.png";
import LoginWindow from "./LoginWindow";
import SuccessWindow from "./SuccessWindow";
import { saveExtensionStorageValue } from "../Utils/Utils";

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
  }).catch((err) => {
    console.error(err);
    if (("" + err).includes("Failed to fetch")) {
      alert("Cortico instance cannot be reached. Check clinic name.");
    } else {
      alert("Cortico: Unknown Login Error: " + err);
    }
  });
}

function Login() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (data) => {
    setErrorMessage(null);
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const { username, password } = data;

    try {
      const response = await signInRequest(username, password);
      const json = await response.json();

      if (response.status !== 200) {
        setErrorMessage(json.detail || response.statusText);
        throw new Error(json.detail || response.statusText);
      }

      saveExtensionStorageValue("jwt_access_token", json.access);
      saveExtensionStorageValue("jwt_expired", false);
      saveExtensionStorageValue("jwt_username", username);

      setLoading(false);
      setSuccess(true);
    } catch (error) {
      setLoading(false);
      console.error(error);
      setErrorMessage(error.message);
      setError(true);
    }
  };

  return (
    <div className="tw-bg-white tw-rounded-lg tw-p-4 tw-min-w-[300px] tw-font-sans">
      {success !== true ? (
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
