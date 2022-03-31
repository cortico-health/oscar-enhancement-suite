import { useEffect, useState } from "preact/hooks";
import { useSelector } from "react-redux";

export default function FeatureDetector({ children, featureName, ...props }) {
  const disabledFeatures = useSelector((state) => state.app.disabledFeatures);

  const [disabled, setDisabled] = useState(null);

  useEffect(() => {
    const feature = disabledFeatures.find((feature) => feature === featureName);
    if (feature) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [disabledFeatures]);

  return <>{children({ disabled })}</>;
}
