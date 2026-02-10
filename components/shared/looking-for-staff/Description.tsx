import Image from "next/image";

const Description = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-16 items-center p-10 md:p-20 bg-light-600">
      <h3 className="text-center heading-2">Your Trusted Partner for Growth</h3>
      <div className="flex flex-col md:flex-row flex-center gap-10 md:gap-16">
        <p className="font-medium text-base md:text-lg text-justify text-light-100 w-full md:w-1/3 leading-7 md:leading-10">
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
          className="w-full md:w-1/3 h-[17rem] object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Description;
