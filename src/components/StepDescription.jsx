import { useSelector } from "react-redux";
import { selectStepDescription } from "../redux/sortingActions";

export default function StepDescription() {
  const stepDescription = useSelector(selectStepDescription);
  return (
    <div>
      <span className="font-pt-sans inline-block w-full text-center">
        {stepDescription}
      </span>
    </div>
  );
}
