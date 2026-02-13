import { WHY_CHOOSE } from "@/constants";
import Image from "next/image";

const ClientChoose = () => {
  return (
    <section className="flex flex-col h-auto p-8 md:p-20 gap-10 bg-light-600">
      <h1 className="heading-2">why our clients choose us?</h1>
      <p className="font-medium text-light-400 w-full md:w-1/2">
        At Ayra Business Services, we don’t just offer services — we deliver
        reliable, tailored solutions that empower businesses to grow, adapt, and
        succeed. Our clients trust us for our dedication, versatility, and
        results-driven approach.
      </p>
      <div className="flex md:flex-nowrap flex-wrap gap-8 md:w-[93%] w-full">
        {WHY_CHOOSE.map((item) => (
          <div
            key={item.name}
            className="flex flex-col min-w-1/4 w-auto gap-6 rounded-3xl bg-light-800 text-light-100 p-6 md:p-8"
          >
            <div className="flex gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={1000}
                height={1000}
                className="size-8"
              />
              <h3 className="text-2xl font-semibold">{item.name}</h3>
            </div>
            <p className="font-medium text-sm md:text-base text-light-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientChoose;
