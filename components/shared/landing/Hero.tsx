import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div>
        <h1>Ayra Business Services</h1>
        <h3>Simplify, Empower, Grow</h3>
        <p>
          We don’t just fill vacancies or sell services—we build long-term
          solutions for your workforce, your operations, and your brand. Partner
          with Ayra and unlock growth across every lane of your business.
        </p>
        <div>
          <Link href="/looking-for-staff">Looking for Staff</Link>
          <Link href="/looking-for-work">Looking for Work</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
