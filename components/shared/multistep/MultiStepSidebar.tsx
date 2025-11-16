import { IMultiStepStages } from "@/constants";
import getStageNumber from "@/lib/functions/client.functions";

const MultiStepSidebar = ({
  multiStepStagesArray,
  stepNo,
}: {
  multiStepStagesArray: IMultiStepStages[];
  stepNo: string;
}) => {
  const currentStage = getStageNumber({ stepNo });

  return (
    <aside className="w-[26rem] px-4 flex flex-col">
      <div className="flex flex-col py-8 gap-6 border-r border-solid border-r-gray-300">
        {multiStepStagesArray.map((item, index) => {
          return (
            <div key={index} className="flex items-center gap-4">
              <span
                className={`${currentStage.no === index ? "bg-black text-white" : "bg-transparent border border-solid border-black"} rounded-full flex-center !h-10 !w-10 text-lg`}
              >
                {index + 1}
              </span>
              <p
                className={`${currentStage.no === index ? "font-semibold" : ""} text-lg text-black`}
              >
                {item.stepName}
              </p>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default MultiStepSidebar;
