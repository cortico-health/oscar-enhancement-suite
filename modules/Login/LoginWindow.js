import { useState, useRef, useEffect } from "preact/hooks";
import corticoIcon from "../../resources/icons/logo-dark-blue.svg";
import { LockClosedIcon } from "@heroicons/react/solid";

function LoginWindow({ onSubmit, error, loading, errorMessage, ...props }) {
  const username = useRef();
  const password = useRef();
  const clinicNameRef = useRef();
  const suffixRef = useRef();
  const rememberRef = useRef();

  const [remUsername, setUsername] = useState(null);
  const [remClinicName, setClinicName] = useState(null);
  const [remSuffix, setSuffix] = useState(null);
  const [rememberMe, setRememberMe] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username && username.current.value,
      password: password && password.current.value,
      clinicName: clinicNameRef && clinicNameRef.current.value,
      suffix: suffixRef && suffixRef.current.value,
      remember: rememberRef && rememberRef.current.checked,
    };

    onSubmit(data);
  };

  useEffect(() => {
    setUsername(localStorage.getItem("remUsername"));
    setClinicName(localStorage.getItem("remClinicName"));
    setSuffix(localStorage.getItem("remSuffix"));
    setRememberMe(localStorage.getItem("rememberMe") === "true");
  }, []);

  return (
    <div>
      <div className="tw-flex tw-justify-center tw-items-center">
        <img src={corticoIcon} className="tw-w-12 tw-h-12" />
      </div>
      <div>
        <h2 class="tw-m-0 tw-p-0 tw-mt-4 tw-mb-2 tw-text-center tw-text-2xl tw-font-medium text-gray-900 tw-px-2">
          Sign in to your account
        </h2>
        <h3 className="tw-m-0 tw-p-0 tw-mt-2 tw-text-base tw-text-center">
          Or{" "}
          <a
            className="tw-text-blue-700"
            href="https://cortico.health/features/oscar-enhancement-suite"
            target="_blank"
          >
            join today to unlock premium features
          </a>
        </h3>
      </div>

      {error === true ? (
        <div className="tw-bg-red-500 tw-text-white tw-mt-4 tw-p-2 tw-rounded-lg tw-text-base tw-font-normal">
          {errorMessage || "Something went wrong. Please try again."}
        </div>
      ) : (
        ""
      )}
      <form className="tw-mt-8" onSubmit={handleSubmit}>
        <div className="tw-mt-4">
          <div className="tw-mt-6 tw-rounded-lg tw-bg-gray-100 tw-p-4 tw-border">
            <div>
              <h4 className="tw-font-medium tw-p-0 tw-mb-2 tw-text-base tw-text-gray-700">
                Cortico Clinic Name
              </h4>
              <div className="tw-flex tw-items-center tw-space-x-4">
                <div className="tw-text-base tw-text-gray-500">https://</div>
                <input
                  autoComplete={false}
                  defaultValue={remClinicName}
                  ref={clinicNameRef}
                  id="clinicname"
                  name="clinicname"
                  type="text"
                  placeholder="Clinic"
                  required
                  className="tw-text-gray-700 tw-w-40 tw-text-base placeholder:tw-text-base tw-appearance-none tw-block tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-b-md tw-shadow-sm tw-placeholder-gray-400 tw-focus:outline-none tw-focus:ring-indigo-500 tw-focus:border-indigo-500 tw-sm:text-sm"
                />
                <div>.</div>
                <input
                  autoComplete={false}
                  defaultValue={remSuffix || "cortico.ca"}
                  ref={suffixRef}
                  id="customurlsuffix"
                  name="customurlsuffix"
                  type="text"
                  placeholder="cortico.ca"
                  required
                  className="tw-text-gray-700 tw-w-32 tw-text-base placeholder:tw-text-base tw-appearance-none tw-block tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-b-md tw-shadow-sm tw-placeholder-gray-400 tw-focus:outline-none tw-focus:ring-indigo-500 tw-focus:border-indigo-500 tw-sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="tw-my-4" />

        <div>
          <div className="tw-mt-4">
            <input
              autoComplete={false}
              defaultValue={remUsername}
              ref={username}
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              required
              autocomplete
              className="tw-text-gray-700 tw-text-base placeholder:tw-text-base tw-appearance-none tw-block tw-w-full tw-px-3 tw-py-3 tw-border tw-border-gray-300 tw-rounded-t-md tw-shadow-sm tw-placeholder-gray-400 tw-focus:outline-none tw-focus:ring-indigo-500 tw-focus:border-indigo-500 tw-sm:text-sm tw-border-b-0"
            />
          </div>
        </div>
        <div>
          <div className="">
            <input
              autoComplete={false}
              ref={password}
              id="password"
              name="password"
              type="password"
              autocomplete
              required
              placeholder="Enter your password"
              className="tw-text-gray-700 tw-text-base placeholder:tw-text-base tw-appearance-none tw-block tw-w-full tw-px-3 tw-py-3 tw-border tw-border-gray-300 tw-rounded-b-md tw-shadow-sm tw-placeholder-gray-400 tw-focus:outline-none tw-focus:ring-indigo-500 tw-focus:border-indigo-500 tw-sm:text-sm"
            />
          </div>
        </div>

        <div className="tw-mt-4 tw-flex tw-justify-between">
          <label className="tw-inline-flex tw-items-center">
            <input
              ref={rememberRef}
              type="checkbox"
              className="
                tw-w-4
                tw-h-4
                tw-rounded
                tw-border
                tw-border-gray-300
                tw-text-indigo-600
                tw-shadow-sm
                focus:tw-border-indigo-300
                focus:tw-ring
                focus:tw-ring-offset-0
                focus:tw-ring-indigo-200
                focus:tw-ring-opacity-50
              "
              checked={rememberMe}
            />
            <span className="tw-ml-2 tw-text-gray-700 tw-text-base">
              Remember Me
            </span>
          </label>
          <a href="" className="tw-text-blue-1000 tw-text-base tw-font-medium">
            Forgot your password?
          </a>
        </div>

        <div>
          <button
            type="submit"
            class="tw-w-full tw-mt-4 tw-flex tw-justify-center tw-py-2 tw-px-4 tw-border tw-border-transparent tw-rounded-md tw-shadow-sm tw-text-base tw-font-medium tw-text-blue-1000 tw-bg-indigo-200 tw-hover:bg-indigo-700 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500 tw-relative tw-border"
          >
            {loading === true ? (
              <span className="tw-flex tw-justify-center">
                <svg
                  class="tw-animate-spin tw-h-5 tw-w-5 tw-text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="tw-opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="tw-opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </span>
            ) : (
              <div className="tw-flex tw-justify-center tw-items-center tw-cursor-pointer">
                <LockClosedIcon className="tw-inline-block tw-mr-4 tw-text-blue-1000 tw-h-8 tw-w-8 tw-absolute tw-left-0 tw-top-[50%] tw-pl-2 tw-opacity-50 tw-translate-y-[-50%]"></LockClosedIcon>
                <span className="tw-cursor-pointer">Sign in</span>
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginWindow;
