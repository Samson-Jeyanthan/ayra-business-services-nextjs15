import { Aboutus, Hero, Ribbon } from "@/components/shared";

const LandingPage = () => {
  return (
    <section>
      <main className="w-full flex-col min-h-screen">
        <Hero />
        <Ribbon />
        <Aboutus />
      </main>
    </section>
  );
};

export default LandingPage;
