import { IAbout } from "@/types/utils.types";

const About = ({ title, description }: IAbout) => {
  return (
    <div className="flex flex-col gap-10 px-10 md:px-20 items-center">
      <div className="h-2 w-full flex bg-primary" />
      <h3 className="text-center heading-3">{title}</h3>
      <p className="text-base w-4/5 text-center font-semibold">{description}</p>
    </div>
  );
};

export default About;
