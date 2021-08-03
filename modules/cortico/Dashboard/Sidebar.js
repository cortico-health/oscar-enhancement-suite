import icon from "../../../resources/icons/96x96.png";

export default function () {
  return (
    <div className="tw-flex tw-h-full tw-w-[400px]">
      <div className="tw-bg-blue-700 tw-w-[70px] tw-h-full tw-p-2 text-center tw-rounded-l-md">
        <img src={icon} className="tw-w-2/3 tw-inline-block tw-mx-auto" />
      </div>
      <div className="tw-p-4 tw-bg-gray-100 tw-w-[300px]">Easy Menu</div>
    </div>
  );
}
