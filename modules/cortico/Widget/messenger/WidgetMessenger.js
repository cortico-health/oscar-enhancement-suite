import MessengerWindow from "../../../Messenger/MessengerWindow";
import FeatureDetector from "../adapters/FeatureDetecter";
import { useSelector, useDispatch } from "react-redux";
import NotAvailable from "../base/NotAvailable";
import Header from "../base/Header";
import LabResultsAdapter from "../adapters/LabResultsAdapter";
import RequiresLogin from "../RequiresLogin";

export default function WidgetMessenger() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <FeatureDetector featureName="messenger">
      {({ disabled }) => {
        return (
          <>
            <div className="tw-font-sans tw-min-w-[400px] tw-p-4">
              <Header
                title="Messenger"
                desc="Reach out to patients via the messenger."
              />
              <hr className="tw-my-6" />
              {disabled === true ? (
                <NotAvailable>
                  <p className="tw-max-w-[325px] tw-mx-auto tw-mt-6 tw-text-gray-700 tw-text-sm">
                    This feature is{" "}
                    <span className="tw-font-semibold">not available</span> on
                    this page. It is only available on
                    <ol className="tw-list-decimal tw-mt-2 tw-text-sm tw-space-y-1">
                      <li>Encounter Page</li>
                      <li>e-Forms</li>
                      <li>Documents</li>
                    </ol>
                  </p>
                </NotAvailable>
              ) : isLoggedIn === false ? (
                <RequiresLogin />
              ) : disabled === false && isLoggedIn === true ? (
                <>
                  <MessengerWindow />
                </>
              ) : null}
            </div>
          </>
        );
      }}
    </FeatureDetector>
  );
}
