import { LockClosedIcon } from "@heroicons/react/solid";
import Button from "../../../../core/Button";

export default function SignInButton({ ...props }) {
  return (
    <Button
      size="sm"
      variant="custom"
      className="tw-w-full tw-font-sans tw-mt-4 tw-flex tw-justify-center tw-py-2 tw-px-4 tw-border-transparent tw-rounded-md tw-shadow-sm tw-text-base tw-font-medium tw-text-blue-1000 tw-bg-indigo-200 tw-hover:bg-indigo-700 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500 tw-relative tw-border"
      {...props}
    >
      <div className="tw-flex tw-justify-center tw-items-center tw-cursor-pointer">
        <LockClosedIcon className="tw-inline-block tw-mr-4 tw-text-blue-1000 tw-h-8 tw-w-8 tw-absolute tw-left-0 tw-pl-2 tw-opacity-50"></LockClosedIcon>
        <span className="tw-cursor-pointer tw-font-regular">Sign in</span>
      </div>
    </Button>
  );
}
