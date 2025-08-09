import { useLocation } from "react-router-dom";
import { selectCurrentStep, selectSteps } from "../store/sortSelectors";
import { sortAlgorithmsCode } from "../utils/sortAlgorithms";
import { useSelector } from "react-redux";
import { getlastPathParameter } from "../utils/utils";

export default function ReadOnlyCodeBlock() {
  const location = useLocation();
  const algorithmName = getlastPathParameter(location.pathname);
  const lines = sortAlgorithmsCode[algorithmName].trim().split("\n");
  const currentStep = useSelector(selectCurrentStep);
  const steps = useSelector(selectSteps);

  const lineIndex = steps.length === 0 ? 0 : steps[currentStep].line;

  console.log(lineIndex);
  return (
    <div className="bg-gray-900 text-gray-100 p-4 pb-0 overflow-y-auto font-mono text-sm shadow-md whitespace-pre justify-self-end w-full max-h-[calc(33vh-124px)]">
      {lines.map((line, idx) => (
        <div
          key={idx}
          className={idx === lineIndex ? "bg-blue-700 text-white" : ""}
        >
          {line}
        </div>
      ))}
    </div>
  );
}
