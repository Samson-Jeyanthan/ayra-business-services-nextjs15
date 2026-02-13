import {
  CANDIDATE_MULTISTEP_FORMS,
  CANDIDATE_MULTISTEP_STAGES,
} from "@/constants";
import { getStageNumber } from "@/lib/functions/client.functions";

const CandidateRegistration = async ({
  params,
}: {
  params: Promise<{ stepNo: string }>;
}) => {
  const { stepNo } = await params;

  const currentStage = getStageNumber({
    stepNo: stepNo,
    isCandidStep: true,
  });
  const CurrentForm = CANDIDATE_MULTISTEP_FORMS[currentStage.no]?.form;

  return (
    <div className="p-8 md:p-12">
      <header className="flex flex-col gap-2 mb-8 border-b pb-8 border-solid border-gray-300">
        <h3 className="text-2xl md:text-4xl font-bold text-black">
          {currentStage.label}
        </h3>
        <p className="text-sm md:text-base">
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
