export default function Header({ title, desc, ...props }) {
  return (
    <div>
      <h2 className="tw-text-base tw-font-normal tw-text-gray-800 tw-m-0 tw-p-0">
        {title}
      </h2>
      <p className="tw-text-sm tw-text-gray-500">{desc}</p>
    </div>
  );
}
