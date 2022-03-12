import { checkAllEligibility } from "../../../../cortico.js";
import CircleProgressBar from "./CircleProgressBar";
import { useEffect } from "preact/hooks";
export default function EligbilityCheck({ ...props }) {
  useEffect(() => {
    checkAllEligibility();
  }, []);

  return (
    <div>
      <div>
        <CircleProgressBar />
      </div>
    </div>
  );
}
