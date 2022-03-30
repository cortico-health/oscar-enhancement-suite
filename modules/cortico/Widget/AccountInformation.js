import { useEffect, useState } from "preact/hooks";
import { LockOpenIcon, StarIcon } from "@heroicons/react/solid";
import {
  removeExtensionStorageValue,
  loadExtensionStorageValue,
} from "../../Utils/Utils";

export default function AccountInformation() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState(null);

  const handleSignOut = async () => {
    setLoading(true);
    const remove = [
      "jwt_username",
      "jwt_expired",
      "jwt_access_token",
      "name",
      "clinicname",
      "customUrlSuffix",
    ];

    for (let i = 0; i < remove.length; i++) {
      await removeExtensionStorageValue(remove[i]);
    }
    window.location.reload();
  };

  useEffect(() => {
    (async () => {
      const result = await loadExtensionStorageValue("jwt_username");
      if (result) {
        setUsername(result);
      }
    })();
  }, []);

  return (
    <div className="tw-flex tw-font-sans tw-w-full tw-items-start tw-h-full tw-min-w-[450px]">
      <div className="tw-flex tw-flex-col tw-w-full tw-justify-between tw-h-full">
        <div>
          <div className=" tw-p-8 tw-text-center">
            <span className="tw-border tw-shadow-xl tw-h-16 tw-w-16 tw-mx-auto  tw-rounded-full tw-overflow-hidden tw-bg-blue-1000 tw-flex tw-items-center tw-justify-center tw-text-white tw-font-semibold">
              {localStorage.getItem("name") &&
                localStorage
                  .getItem("name")
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
            </span>
            <div>
              <p className="tw-mt-4 tw-text-gray-700 tw-font-bold tw-text-lg">
                {localStorage.getItem("name")}
              </p>
              <p className=" tw-text-gray-700 tw-text-base tw-font-normal tw-opacity-75">
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
              <p className=" tw-text-gray-700 tw-text-base tw-font-normal tw-opacity-75">
                {username}
              </p>
            </div>
          </div>
        </div>

        <div className="tw-w-full">
          <hr className="tw-my-2" />
          <div className="tw-w-full">
            <button
              onClick={handleSignOut}
              type="submit"
              class="tw-w-full tw-mt-4 tw-flex tw-justify-center tw-py-2 tw-px-4 tw-border tw-border-transparent tw-rounded-md tw-shadow-sm tw-text-xl tw-font-medium tw-text-white tw-bg-blue-1000 tw-hover:bg-indigo-700 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500 tw-relative"
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
                  <span className="tw-cursor-pointer tw-font-normal tw-text-base">
                    Sign Out
                  </span>
                </div>
              )}
            </button>
          </div>
          <div className="tw-flex tw-justify-between tw-mt-4">
            <p className="tw-text-base tw-text-gray-500 tw-text-center tw-font-semibold">
              &copy; <span className="tw-text-blue-1000">Cortico</span>
            </p>
            <a
              href="mailto:help@cortico.health"
              className="tw-text-blue-1000 tw-text-base tw-font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
