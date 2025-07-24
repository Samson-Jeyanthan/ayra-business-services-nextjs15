import { WHY_CHOOSE } from "@/constants";
import Image from "next/image";

const ClientChoose = () => {
  return (
    <section className="flex flex-col min-h-screen p-20 gap-10 bg-light-700">
      <h1 className="capitalize text-5xl font-semibold tracking-tight">
        why our clients choose us?
      </h1>
      <p className="font-medium text-light-500 w-1/2">
        At Ayra Business Services, we don’t just offer services — we deliver
        reliable, tailored solutions that empower businesses to grow, adapt, and
        succeed. Our clients trust us for our dedication, versatility, and
        results-driven approach.
      </p>
      <div className="flex gap-8 w-full">
        {WHY_CHOOSE.map((item) => (
          <div
            key={item.name}
            className="flex flex-col w-1/4 gap-6 rounded-3xl bg-light-800 text-light-300 p-8"
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
            <p className="font-medium text-light-500">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientChoose;
