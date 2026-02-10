import Image from "next/image";

const Aboutus = () => {
  return (
    <section
      id="about"
      className="bg-light-600 px-5 md:px-20 p-10 md:p-20 h-auto md:min-h-screen"
    >
      <div className="relative flex flex-col items-center justify-start px-10 md:px-20 py-10 gap-10 bg-light-100 h-full text-light-800 rounded-3xl bg-[url(/images/black-bg-light.png)] bg-cover md:bg-contain bg-local bg-no-repeat">
        <h1 className="uppercase text-2xl md:text-4xl font-semibold w-full md:w-1/2 text-center">
          Complete Business Solutions Under One Roof
        </h1>
        <div className="w-full flex justify-end">
          <p className="text-md w-full md:w-1/2">
            At Ayra Business Services, we&apos;re a multifaceted business
            dedicated to empowering your success across several key areas. We
            understand the dynamic needs of modern businesses, which is why
            we&apos;ve brought together a diverse range of services under one
            roof:
          </p>
        </div>
        <div className="w-full flex justify-center items-center md:justify-between md:items-end">
          <Image
            src="/images/about-city.jpg"
            alt="about-img"
            width={800}
            height={800}
            className="w-full md:w-1/2 h-auto object-cover rounded-4xl"
          />
          <Image
            src="/images/green-progress-bar.png"
            alt="about-progress-img"
            width={500}
            height={500}
            className="hidden md:flex w-[20%] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
