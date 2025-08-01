import { Button } from "@/components/ui/button";
import { ICommonHero } from "@/types/utils.types";
import Image from "next/image";

const Hero = ({ title, description, image_one, image_two }: ICommonHero) => {
  return (
    <div className="relative flex-center flex-col gap-12 w-full px-20 pb-4 pt-36 3xl:px-44 min-h-[95vh] bg-[url(/images/net.png)] bg-size-[auto_600px]">
      <h1 className="text-8xl font-semibold tracking-tight">{title}</h1>
      <p className="w-[45%] text-center">{description}</p>
      <Button className="primary-btn">Get Started</Button>
      <div className="flex w-full gap-20">
        <Image
          src={image_one}
          alt="hero"
          width={1000}
          height={1000}
          className="w-2/6 rounded-3xl"
        />
        <Image
          src={image_two}
          alt="hero"
          width={1000}
          height={1000}
          className="w-4/6 rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Hero;
