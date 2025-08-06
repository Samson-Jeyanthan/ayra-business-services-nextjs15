import {
  Aboutus,
  Cargo,
  ClientChoose,
  ContactUs,
  Hero,
  Ribbon,
  Services,
} from "@/components/shared";

const LandingPage = () => {
  return (
    <section className="w-full flex flex-col min-h-screen items-center">
      <Hero />
      <Ribbon />
      <Aboutus />
      <Services />
      <ClientChoose />
      <Cargo />
      <div className="h-6 w-full bg-light-600" />
      <ContactUs
        title="Ready to work with us ?"
        titleClass="text-7xl font-semibold"
      />
    </section>
  );
};

export default LandingPage;
