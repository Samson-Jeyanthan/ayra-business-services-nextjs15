import {
  // CandidateEight,
  CandidateFive,
  CandidateFour,
  CandidateNine,
  CandidateOne,
  CandidateSeven,
  CandidateSix,
  CandidateThree,
  CandidateTwo,
} from "@/components/profile";
import { getCandidateRegInfoByUserId } from "@/lib/actions/candidate.action";

const CandidateProfile = async () => {
  const response = await getCandidateRegInfoByUserId({ userId: "" });
  const candidate = response?.data;

  if (!candidate) {
    return <p>No candidate info found.</p>;
  }

  const {
    stepOne,
    stepTwo,
    stepThree,
    stepFour,
    stepFive,
    stepSix,
    stepSeven,
    // stepEight,
    stepNine,
  } = candidate;

  return (
    <main className="min-h-screen justify-start w-full flex flex-col items-center">
      <section className="w-full max-w-[90rem] flex flex-col items-center mt-24 gap-6">
        <CandidateOne data={stepOne?.data} />
        <CandidateTwo data={stepTwo?.data} />
        <CandidateThree data={stepThree?.data} />
        <CandidateFour data={stepFour?.data} />
        <CandidateFive data={stepFive?.data} />
        <CandidateSix data={stepSix?.data} />
        <CandidateSeven data={stepSeven?.data} />
        {/* <CandidateEight data={stepEight?.data} /> */}
        <CandidateNine data={stepNine?.data} />
      </section>
    </main>
  );
};

export default CandidateProfile;
