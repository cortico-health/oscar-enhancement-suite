import { useState } from "preact/hooks";
import { LockOpenIcon, StarIcon } from "@heroicons/react/solid";
import corticoIcon from "../../../resources/icons/logo-blue.svg";

export default function AccountInformation() {
  const [loading, setLoading] = useState(false);

  const handleSignOut = () => {
    setLoading(true);
    const remove = [
      "jwt_username",
      "jwt_expired",
      "jwt_access_token",
      "name",
      "clinicname",
      "customUrlSuffix",
    ];
    remove.map((r) => localStorage.removeItem(r));
    window.location.reload();
  };

  return (
    <div className="tw-flex tw-font-sans tw-w-full tw-items-start tw-h-full">
      <div className="tw-flex tw-flex-col tw-w-full tw-justify-between tw-h-full">
        <div>
          <div className="tw-flex tw-justify-center tw-items-center tw-my-8">
            <img src={corticoIcon} className="tw-w-12 tw-h-12" />
          </div>
          <div className="tw-bg-gray-50 tw-rounded-lg tw-p-8 tw-text-center tw-shadow-md tw-border">
            <span className="tw-border tw-shadow-md tw-block tw-h-20 tw-w-20 tw-mx-auto  tw-rounded-full tw-overflow-hidden tw-bg-gray-100">
              <svg
                className="tw-h-full tw-w-full tw-text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            <div>
              <p className="tw-mt-4 tw-text-gray-700 tw-font-bold tw-text-2xl">
                {localStorage.getItem("name")}
              </p>
              <p className="tw-mt-2 tw-text-gray-700 tw-text-xl tw-font-normal tw-opacity-75">
                {localStorage.getItem("jwt_username")}
              </p>

              <p className=" tw-text-gray-700 tw-text-xl tw-font-normal tw-opacity-75">
                <a
                  href={`https://${localStorage.getItem(
                    "clinicname"
                  )}.${localStorage.getItem("customUrlSuffix")}`}
                  target="_blank"
                  className="tw-underline"
                >
                  https://{localStorage.getItem("clinicname")}.
                  {localStorage.getItem("customUrlSuffix")}
                </a>
              </p>
              <p className="tw-mt-4 tw-bg-cortico-blue tw-inline-block tw-px-2 tw-py-1 tw-rounded-lg tw-text-white tw-font-medium tw-text-lg">
                <StarIcon className="tw-w-6 tw-h-6 tw-text-white tw-mr-2 tw-inline-block" />
                Premium
              </p>
            </div>
          </div>
        </div>

        <div className="tw-w-full">
          <div className="tw-w-full">
            <button
              onClick={handleSignOut}
              type="submit"
              class="tw-w-full tw-mt-4 tw-flex tw-justify-center tw-py-2 tw-px-4 tw-border tw-border-transparent tw-rounded-md tw-shadow-sm tw-text-xl tw-font-medium tw-text-white tw-bg-cortico-blue tw-hover:bg-indigo-700 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500 tw-relative"
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
                  <LockOpenIcon className="tw-inline-block tw-mr-4 tw-text-white tw-h-8 tw-w-8 tw-absolute tw-left-0 tw-top-[50%] tw-pl-2 tw-opacity-50 tw-translate-y-[-50%]"></LockOpenIcon>
                  <span className="tw-cursor-pointer">Sign Out</span>
                </div>
              )}
            </button>
          </div>
          <hr className="tw-my-2" />
          <div className="tw-flex tw-justify-between tw-mt-4">
            <p className="tw-text-base tw-text-gray-500 tw-text-center tw-font-semibold">
              Version 2022.2.2
            </p>
            <a
              href="#"
              className="tw-text-cortico-blue tw-text-xl tw-font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
