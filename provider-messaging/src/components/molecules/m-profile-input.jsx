import { h } from "preact";
import ASvg from "../atoms/a-svg";

const MProfileInput = ({icon, name, placeholder, onChange, defaultValue, ...props}) => {
  return (
    <div className="flex gap-x-2.5 items-center pb-2.5">
      <ASvg className="w-4.5" src={icon} />
      <input
        defaultValue={defaultValue}
        placeholder={placeholder}
        name={name}
        className="outline-1 w-full text-secondary-500 text-title4 rounded-lg outline-secondary-100 placeholder:text-secondary-200 py-2.5 pl-3"
        onChange={onChange}
      />
    </div>
  );
};

export default MProfileInput;
