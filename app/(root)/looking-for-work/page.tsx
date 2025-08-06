import {
  About,
  CandidateFormSection,
  CommonHero,
  ContactUs,
} from "@/components/shared";

const LookingForWork = () => {
  return (
    <section className="relative flex flex-col gap-10 w-full items-center z-10">
      <div className="bg-repeat bg-linear-to-b from-light-900 to-light-600 flex flex-col gap-10 w-full items-center pb-16 -mb-10">
        <CommonHero
          title="Looking for Work ??"
          description="Are you searching for a new role that truly fits your skills, experience, and aspirations? At Ayra Business Services, we don't just connect you with jobs; we connect you with the right opportunities."
          img_one="/images/work-hero-img-1.jpg"
          img_two="/images/work-hero-img-2.jpg"
          inverse_img={true}
        />
        <About
          title="Your  Next  Opportunity  Starts  Here"
          description="Are you searching for a new role that truly fits your skills, experience, and aspirations? At Ayra Business Services, we don't just connect you with jobs; we connect you with the right opportunities. We understand the job market can be tough to navigate. That's why our recruitment consultants bring a unique, hands-on understanding to the table. Many of us have direct experience in the very sectors we recruit for, including HGV driving and warehouse operations. This means we've been in your shoes. We truly get what a job demands and, more importantly, what you value in a role and a workplace."
        />
      </div>
      <CandidateFormSection />
      <ContactUs
        title="Join Ayra and steer your career in the right direction!"
        titleClass="text-5xl font-semibold w-4/6"
      />
    </section>
  );
};

export default LookingForWork;
