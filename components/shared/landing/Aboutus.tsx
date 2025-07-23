import Image from "next/image";

const Aboutus = () => {
  return (
    <section className="bg-light-700 p-20 min-h-screen">
      <div className="relative flex flex-col items-center justify-start px-20 py-10 gap-10 bg-light-300 h-full text-light-800 rounded-3xl bg-[url(/images/black-bg-light.png)] bg-contain bg-local bg-no-repeat">
        <h1 className="uppercase text-3xl font-semibold w-1/2 text-center">
          Complete Business Solutions Under One Roof
        </h1>
        <div className="w-full flex justify-end">
          <p className="text-md w-1/2">
            At Ayra Business Services, we&apos;re a multifaceted business
            dedicated to empowering your success across several key areas. We
            understand the dynamic needs of modern businesses, which is why
            we&apos;ve brought together a diverse range of services under one
            roof:
          </p>
        </div>
        <div className="w-full flex justify-between items-end">
          <Image
            src="/images/about-city.jpg"
            alt="about-img"
            width={800}
            height={800}
            className="w-1/2 h-auto object-cover rounded-4xl"
          />
          <Image
            src="/images/green-progress-bar.png"
            alt="about-progress-img"
            width={500}
            height={500}
            className="w-[20%] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
