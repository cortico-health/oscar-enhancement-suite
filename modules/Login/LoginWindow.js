import { render } from "preact";
import { useState, useRef, useEffect } from "preact/hooks";
import corticoIcon from "../../resources/icons/96x96.png";

function LoginWindow({ onSubmit, error, loading, errorMessage, ...props }) {
  const [warnName, setWarnName] = useState(false);

  const username = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username && username.current.value,
      password: password && password.current.value,
    };
    onSubmit(data);
  };

  useEffect(() => {
    const clinicname = window.localStorage.getItem("clinicname");
    if (!clinicname) {
      setWarnName(true);
    }
  }, []);

  return (
    <div>
      <div className="tw-flex tw-justify-center tw-items-center">
        <img src={corticoIcon} className="tw-w-10 tw-h-10" />
      </div>
      <div>
        <h2 class="tw-mt-6 tw-text-center tw-text-3xl tw-font-extrabold text-gray-900 tw-px-2">
          Sign in to your account
        </h2>
      </div>
      {warnName === true ? (
        <div className="tw-bg-yellow-500 tw-text-white tw-my-4 tw-p-2 tw-rounded-lg tw-text-xs">
          Your clinic is not set. You won't be able to sign in until this is
          set.
        </div>
      ) : (
        ""
      )}
      {error === true ? (
        <div className="tw-bg-red-400 tw-text-white tw-my-2 tw-p-2 tw-rounded-lg tw-text-xs">
          {errorMessage || "Something went wrong. Please try again."}
        </div>
      ) : (
        ""
      )}
      <form className="tw-space-y-4 tw-mt-8" onSubmit={handleSubmit}>
        <div>
          <label
            for="email"
            className="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
          >
            Username
          </label>
          <div className="tw-mt-1">
            <input
              ref={username}
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              required
              autocomplete
              class="tw-appearance-none tw-block tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md tw-shadow-sm tw-placeholder-gray-400 tw-focus:outline-none tw-focus:ring-indigo-500 tw-focus:border-indigo-500 tw-sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            for="password"
            className="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
          >
            Password
          </label>
          <div className="tw-mt-1">
            <input
              ref={password}
              id="password"
              name="password"
              type="password"
              autocomplete
              required
              placeholder="Enter your password"
              class="tw-appearance-none tw-block tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md tw-shadow-sm tw-placeholder-gray-400 tw-focus:outline-none tw-focus:ring-indigo-500 tw-focus:border-indigo-500 tw-sm:text-sm"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="tw-w-full tw-flex tw-justify-center tw-py-2 tw-px-4 tw-border tw-border-transparent tw-rounded-md tw-shadow-sm tw-text-sm tw-font-medium tw-text-white tw-bg-cortico-blue tw-hover:bg-indigo-700 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500"
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
              <span>Sign in</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginWindow;
