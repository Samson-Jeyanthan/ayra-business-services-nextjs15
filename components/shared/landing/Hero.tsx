import Link from "next/link";

const Hero = () => {
  return (
    <div className="">
      <section className="flex flex-col w-1/2 items-start gap-5">
        <h1 className="text-7xl font-semibold tracking-tight">
          Ayra Business Services
        </h1>
        <h3 className="text-2xl font-semibold">Simplify, Empower, Grow</h3>
        <p className="font-medium">
          We don’t just fill vacancies or sell services—we build long-term
          solutions for your workforce, your operations, and your brand. Partner
          with Ayra and unlock growth across every lane of your business.
        </p>
        <div className="flex gap-5 items-start">
          <Link href="/looking-for-staff">Looking for Staff</Link>
          <Link href="/looking-for-work">Looking for Work</Link>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default Hero;
