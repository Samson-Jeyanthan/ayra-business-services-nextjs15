import { IWhyPartner } from "@/types/utils.types";

const WhyPartner = ({ title, description, data }: IWhyPartner) => {
  return (
    <div className="flex flex-col gap-10 bg-light-300 py-20 px-36 text-light-800 bg-[url(/images/black-bg-light.png)] bg-contain bg-local bg-no-repeat">
      <h3 className="heading-3">{title}</h3>
      <p className="text-lg text-light-550 w-4/6 -mt-4">{description}</p>
      <div className="w-full grid grid-cols-5 gap-8 auto-rows-[200px]">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col gap-4 items-start justify-center p-10 border border-solid border-light-550 rounded-3xl ${index === 1 || index === 2 ? "col-span-3" : "col-span-2"}`}
          >
            <h4 className="text-2xl font-semibold">{item.title}</h4>
            <p className="text-base text-light-550 text-start">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyPartner;
