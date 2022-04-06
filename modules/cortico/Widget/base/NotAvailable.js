import Cancel from "../../../../resources/illustrations/undraw_cancel.svg";

export default function NotAvailable({ children, ...props }) {
  return (
    <div className="tw-font-sans">
      <img
        src={Cancel}
        alt="Not Available"
        className="tw-block tw-w-[125px] tw-mx-auto"
      />
      {children}
    </div>
  );
}
