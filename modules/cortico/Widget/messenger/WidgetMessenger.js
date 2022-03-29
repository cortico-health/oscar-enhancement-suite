import MessengerWindow from "../../../Messenger/MessengerWindow";
import FeatureDetector from "../adapters/FeatureDetecter";
import Cancel from "../../../../resources/illustrations/undraw_cancel.svg";
import SignIn from "../../../../resources/illustrations/undraw_signin.svg";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../../core/Button";

export default function WidgetMessenger() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <FeatureDetector featureName="messenger">
      {({ disabled }) => {
        return (
          <>
            <div className="tw-font-sans tw-min-w-[400px] tw-p-4">
              <div>
                <h2 className="tw-text-base tw-font-medium tw-text-gray-800 tw-m-0 tw-p-0">
                  Messenger
                </h2>
                <p className="tw-text-sm tw-text-gray-700">
                  Reach out to patients via the messenger.
                </p>
              </div>
              <hr className="tw-my-6" />
              {disabled === true ? (
                <NotAvailable />
              ) : isLoggedIn === false ? (
                <RequiresLogin />
              ) : (
                <div>
                  <MessengerWindow />
                </div>
              )}
            </div>
          </>
        );
      }}
    </FeatureDetector>
  );
}

function NotAvailable() {
  return (
    <div className="tw-font-sans">
      <img
        src={Cancel}
        alt="Not Available"
        className="tw-block tw-w-[125px] tw-mx-auto"
      />
      <p className="tw-max-w-[325px] tw-mx-auto tw-mt-6 tw-text-gray-700 tw-text-sm">
        This feature is <span className="tw-font-semibold">not available</span>{" "}
        on this page. It is only available on
        <ol className="tw-list-decimal tw-mt-2 tw-text-sm tw-space-y-1">
          <li>Encounter Page</li>
          <li>e-Forms</li>
          <li>Documents</li>
        </ol>
      </p>
    </div>
  );
}

function RequiresLogin() {
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch({
      type: "sidebar/setCurrent",
      payload: "Account",
    });
  };

  return (
    <div className="tw-font-sans">
      <img
        src={SignIn}
        alt="Sign In"
        className="tw-block tw-w-[125px] tw-mx-auto"
      />
      <div>
        <p className="tw-max-w-[325px] tw-mx-auto tw-mt-6 tw-text-gray-700 tw-text-sm tw-text-center">
          This feature requires you to{" "}
          <span className="tw-font-semibold">sign in</span>{" "}
        </p>
        <div className="tw-flex tw-justify-center tw-mt-4">
          <Button size="sm" onClick={handleSignIn}>
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
