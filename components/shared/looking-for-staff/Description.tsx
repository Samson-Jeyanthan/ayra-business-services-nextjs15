import Image from "next/image";

const Description = () => {
  return (
    <div className="flex flex-col gap-16 items-center p-20 bg-light-700">
      <h3 className="heading-2">Your Trusted Partner for Growth</h3>
      <div className="flex-center gap-16">
        <p className="font-medium text-lg text-justify text-light-300 w-1/3">
          Choosing Ayra Business Services means partnering with a team that
          values practical understanding, innovation, and measurable results. We
          integrate diverse services to provide seamless, comprehensive
          solutions that propel your business forward. We are dedicated to
          delivering excellence across all our offerings, allowing you to focus
          on your core objectives while we handle the complexities.
        </p>
        <Image
          src="/images/staff-description.jpg"
          alt="about-progress-img"
          width={500}
          height={500}
          className="w-1/3 h-auto object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Description;
