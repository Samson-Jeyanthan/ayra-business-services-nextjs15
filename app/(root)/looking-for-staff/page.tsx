import {
  About,
  ClientForm,
  Description,
  HeroStaff,
  WhyPartner,
} from "@/components/shared";

const LookingForStaff = () => {
  return (
    <section className="flex-col w-[1400px]">
      <HeroStaff />
      <About />
      <WhyPartner />
      <ClientForm />
      <Description />
    </section>
  );
};

export default LookingForStaff;
