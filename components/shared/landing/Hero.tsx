import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative flex-col flex md:flex-row gap-10 w-full pt-20 p-10 md:p-20 3xl:px-44 min-h-[calc(100vh-12.5rem)]">
      <Image
        src="/svgs/net.svg"
        alt="bg-net"
        width={600}
        height={600}
        loading="eager"
        className="absolute top-0 left-0 z-0 w-auto h-auto"
      />
      <section className="relative flex flex-col w-full md:w-1/2 items-start md:justify-center gap-5 z-10">
        <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
          Ayra Business Services
        </h1>
        <h3 className="text-2xl font-semibold">Simplify, Empower, Grow</h3>
        <p className="font-medium w-full md:w-5/6">
          We don’t just fill vacancies or sell services—we build long-term
          solutions for your workforce, your operations, and your brand. Partner
          with Ayra and unlock growth across every lane of your business.
        </p>
        <div className="flex flex-col w-full md:flex-row gap-5 items-start">
          <Link
            href="/looking-for-staff"
            className="primary-btn md:!w-auto !w-full !max-w-full md:!max-w-auto cursor-pointer"
          >
            Hire Staff
            <Image
              src="/svgs/arrow-right-white.svg"
              alt="right-arrow"
              height={20}
              width={20}
            />
          </Link>
          <Link
            href="/looking-for-work"
            className="secondary-btn md:!w-auto !w-full !max-w-full md:!max-w-auto cursor-pointer"
          >
            Looking for Work
          </Link>
        </div>
      </section>
      <section className="w-full md:w-1/2 flex-center">
        <Image
          src="/images/shell-cards.png"
          alt="shell-img"
          width={900}
          height={900}
          className="w-9/10 md:w-[55%] h-auto object-cover rounded-4xl"
        />
      </section>
    </div>
  );
};

export default Hero;
