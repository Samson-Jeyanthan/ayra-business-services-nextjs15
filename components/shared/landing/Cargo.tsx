import Image from "next/image";

const Cargo = () => {
  return (
    <section className="h-auto md:min-h-screen flex items-center justify-center flex-col pb-10 px-5 pt-10 md:pt-48">
      <div className="w-full flex items-center flex-col">
        <h1 className="flex gap-6 md:gap-3 uppercase text-xl md:text-7xl font-semibold items-center text-center tracking-tight">
          <span className="bg-primary px-4 py-2 rounded-full">Delivering</span>
          <span className="text-center tracking-tight">the People Who</span>
        </h1>
        <h1 className="flex gap-3 uppercase text-xl md:text-7xl font-semibold items-center text-center tracking-tight">
          Drive Your
          <span className="bg-primary px-4 py-2 rounded-full">Success</span>
        </h1>
      </div>
      <Image
        src="/images/cargo-container.png"
        alt="cargo"
        width={1000}
        height={1000}
        className="w-8/10 md:w-3/5 h-auto object-cover -mt-[8rem] md:-mt-[23rem]"
      />
      <div className="w-full flex items-center justify-center md:items-end md:justify-end mt-3 md:mt-0 md:mr-15">
        <p className="text-center md:text-right text-lg md:text-2xl font-semibold md:w-[45%]">
          We deliver more than goods — we deliver the people and tools that
          drive your business. From expert HGV staffing to fuel and media
          solutions, Ayra moves your operations forward.
        </p>
      </div>
    </section>
  );
};

export default Cargo;
