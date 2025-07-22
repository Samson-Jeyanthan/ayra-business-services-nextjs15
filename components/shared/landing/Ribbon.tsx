import { RIBBON_NAMES } from "@/constants";
import Image from "next/image";
import React from "react";

const Ribbon = () => {
  return (
    <div>
      <div className="w-full flex-center gap-20 bg-primary text-light-300 p-4">
        {RIBBON_NAMES.map((item, index) => {
          return (
            <React.Fragment key={item.name}>
              <p>{item.name}</p>
              {index !== RIBBON_NAMES.length - 1 && (
                <Image
                  src="/svgs/star.svg"
                  alt="Ribbon Logo"
                  width={24}
                  height={24}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
      <span></span>
    </div>
  );
};

export default Ribbon;
