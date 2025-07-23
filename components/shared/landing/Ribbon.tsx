import { RIBBON_NAMES } from "@/constants";
import Image from "next/image";
import React from "react";

const Ribbon = () => {
  return (
    <div className="relative w-full h-72 overflow-hidden">
      <div className="absolute top-3/6 left-3/6 w-[150%] h-10 bg-primary rotate-6 -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="relative z-10 flex justify-center items-center py-5 shadow-xl mt-28 gap-6 md:gap-16 bg-primary text-light-300">
        {RIBBON_NAMES.map((item, index) => (
          <React.Fragment key={item.name}>
            <p className="whitespace-nowrap font-medium">{item.name}</p>
            {index !== RIBBON_NAMES.length - 1 && (
              <Image
                src="/svgs/star.svg"
                alt="Ribbon Logo"
                width={20}
                height={20}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Ribbon;
