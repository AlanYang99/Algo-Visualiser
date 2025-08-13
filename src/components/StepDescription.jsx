import { useSelector } from "react-redux";
import { selectCurrentStep, selectSteps } from "../store/sortSelectors";

export default function StepDescription() {
  const currentStep = useSelector(selectCurrentStep);
  const steps = useSelector(selectSteps);
  var description;
  if (currentStep === 0) {
    description = "idle";
  } else {
    description =
      steps.length === 0 ? "..." : steps[currentStep - 1].description;
  }

  return (
    <div>
      <span className="font-pt-sans inline-block w-full text-center">
        {description}
      </span>
    </div>
  );
}
