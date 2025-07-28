import Image from "next/image";
import { Button } from "../ui/button";

const ContactUs = ({
  title,
  titleClass,
}: {
  title: string;
  titleClass: string;
}) => {
  return (
    <div className="flex-center w-full px-10">
      <div className="flex items-center h-48 p-14 justify-between bg-light-300 rounded-4xl w-full bg-[url(/images/contact-us-bg.png)] bg-cover bg-local bg-no-repeat">
        <h1
          className={`${titleClass} text-light-800 racking-tight font-semibold`}
        >
          {title}
        </h1>
        <Button className="primary-btn-light">
          Get Started
          <Image
            src="/svgs/arrow-right-black.svg"
            alt="right-arrow"
            height={20}
            width={20}
          />
        </Button>
      </div>
    </div>
  );
};

export default ContactUs;
