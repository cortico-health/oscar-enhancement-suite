import classNames from "classnames";

export default function GridList({ actions, onClick, ...props }) {
  return (
    <div className="tw-rounded-lg tw-bg-gray-200 tw-overflow-hidden tw-shadow tw-divide-y tw-divide-gray-200 sm:tw-divide-y-0 sm:tw-grid sm:tw-grid-cols-2 sm:tw-gap-px">
      {actions.map((action, actionIdx) => (
        <div
          onClick={() => onClick(action.value)}
          key={action.id}
          className={classNames(
            actionIdx === 0
              ? "tw-rounded-tl-lg tw-rounded-tr-lg sm:tw-rounded-tr-none"
              : "",
            actionIdx === 1 ? "sm:tw-rounded-tr-lg" : "",
            actionIdx === actions.length - 2 ? "sm:tw-rounded-bl-lg" : "",
            actionIdx === actions.length - 1
              ? "tw-rounded-bl-lg tw-rounded-br-lg sm:tw-rounded-bl-none"
              : "",
            "tw-relative tw-group tw-bg-white tw-p-6 focus-within:tw-ring-2 focus-within:tw-ring-inset focus-within:tw-ring-indigo-500",
            "hover:tw-bg-gray-100 tw-transition-colors tw-duration-500"
          )}
        >
          <div className="tw-flex tw-items-start">
            <span>{action.icon}</span>
            {action.premium === true ? (
              <div className="tw-bg-gray-50 tw-ml-4 tw-text-gray-700 tw-inline-block tw-text-xs tw-font-medium tw-mt-2 tw-p-2 tw-rounded-md tw-border">
                Sign In Required
              </div>
            ) : null}
          </div>

          <div className="tw-mt-8">
            <h3 className="tw-text-lg tw-font-medium">
              <a href={action.href} className="focus:tw-outline-none">
                {/* Extend touch target to entire panel */}
                <span className="tw-absolute tw-inset-0" aria-hidden="true" />
                {action.name}
              </a>
            </h3>
            <p className="tw-mt-2 tw-text-sm tw-text-gray-500">
              {action.description}
            </p>
          </div>
          <span
            className="tw-pointer-events-none tw-absolute tw-top-6 tw-right-6 tw-text-gray-300 group-hover:tw-text-gray-400"
            aria-hidden="true"
          >
            <svg
              className="tw-h-6 tw-w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
}
