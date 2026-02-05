import { Button } from "@/components/ui/button";
import { IMultiStepStages } from "@/constants";
import { signOutAction } from "@/lib/actions/auth.actions";
import { getStageNumber } from "@/lib/functions/client.functions";
import { LogOut } from "lucide-react";

const MultiStepSidebar = ({
  multiStepStagesArray,
  stepNo,
  isCandidStep,
}: {
  multiStepStagesArray: IMultiStepStages[];
  stepNo: string;
  isCandidStep: boolean;
}) => {
  const currentStage = getStageNumber({ stepNo, isCandidStep });

  return (
    <aside className="w-[22rem] pr-2 py-8 flex flex-col justify-between h-[90%] border-r border-solid border-r-gray-300">
      <div className="flex flex-col gap-4">
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
      <form
        action={async () => {
          "use server";
          await signOutAction();
        }}
        // className="flex justify-center"
      >
        <Button
          type="submit"
          className="bg-white w-10/12 h-12 px-6 text-sm rounded-full cursor-pointer border border-solid border-black"
        >
          <LogOut className="size-5 text-black dark:text-white" />
          <span className="text-dark300_light900 max-lg:hidden text-base">
            Logout
          </span>
        </Button>
      </form>
    </aside>
  );
};

export default MultiStepSidebar;
