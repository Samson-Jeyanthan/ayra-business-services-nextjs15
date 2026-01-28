import {
  CANDIDATE_MULTISTEP_FORMS,
  CANDIDATE_MULTISTEP_STAGES,
} from "@/constants";
import { getStageNumber } from "@/lib/functions/client.functions";

const CandidateRegistration = ({ params }: { params: { stepNo: string } }) => {
  const currentStage = getStageNumber({
    stepNo: params.stepNo,
    isCandidStep: true,
  });
  const CurrentForm = CANDIDATE_MULTISTEP_FORMS[currentStage.no]?.form;

  return (
    <div className="p-12">
      <header className="flex flex-col gap-2 mb-8 border-b pb-8 border-solid border-gray-300">
        <h3 className="text-4xl font-bold text-black">{currentStage.label}</h3>
        <p className="">
          {CANDIDATE_MULTISTEP_STAGES[currentStage.no]
            ? CANDIDATE_MULTISTEP_STAGES[currentStage.no].description
            : "Description not available"}
        </p>
      </header>

      {CurrentForm ? <CurrentForm /> : <p>Form not found for this step.</p>}
    </div>
  );
};

export default CandidateRegistration;
