import {
  Aboutus,
  Cargo,
  ClientChoose,
  Hero,
  Ribbon,
  Services,
} from "@/components/shared";

const LandingPage = () => {
  return (
    <section className="w-full flex-col min-h-screen">
      <Hero />
      <Ribbon />
      <Aboutus />
      <Services />
      <ClientChoose />
      <Cargo />
    </section>
  );
};

export default LandingPage;
