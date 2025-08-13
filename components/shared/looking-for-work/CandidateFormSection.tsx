import { CandidateForm } from "@/components/forms";
import Image from "next/image";

const CandidateFormSection = () => {
  return (
    <div
      id="candidate-form"
      className="flex flex-col items-center w-full p-20 gap-12"
    >
      <h3 className="heading-3 text-center w-9/10">
        Receive Job Alerts in Your Area
      </h3>
      <Image
        src="/images/work-form-img.jpg"
        alt="client-form"
        width={1000}
        height={1000}
        className="w-8/10 h-auto object-cover rounded-3xl"
      />
      <CandidateForm />
    </div>
  );
};

export default CandidateFormSection;
