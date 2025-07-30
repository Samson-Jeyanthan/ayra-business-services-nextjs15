import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative flex-center w-full p-20 3xl:px-44 h-[calc(100vh-12.5rem)]">
      <Image
        src="/svgs/net.svg"
        alt="bg-net"
        width={600}
        height={600}
        className="absolute top-0 left-0 z-0"
      />
      <section className="relative flex flex-col w-1/2 items-start gap-5 z-10">
        <h1 className="text-[5rem] font-semibold tracking-tight">
          Ayra Business Services
        </h1>
        <h3 className="text-2xl font-semibold">Simplify, Empower, Grow</h3>
        <p className="font-medium w-5/6">
          We don’t just fill vacancies or sell services—we build long-term
          solutions for your workforce, your operations, and your brand. Partner
          with Ayra and unlock growth across every lane of your business.
        </p>
        <div className="flex gap-5 items-start">
          <Link href="/looking-for-staff" className="primary-btn">
            Looking for Staff
            <Image
              src="/svgs/arrow-right-white.svg"
              alt="right-arrow"
              height={20}
              width={20}
            />
          </Link>
          <Link href="/looking-for-work" className="secondary-btn">
            Looking for Work
          </Link>
        </div>
      </section>
      <section className="w-1/2">images</section>
    </div>
  );
};

export default Hero;
