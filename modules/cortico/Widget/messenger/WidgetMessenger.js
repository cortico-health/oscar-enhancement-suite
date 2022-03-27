import MessengerWindow from "../../../Messenger/MessengerWindow";

export default function WidgetMessenger() {
  return (
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
      <MessengerWindow />
    </div>
  );
}
