import { Button } from "@/components/ui/button";
import Image from "next/image";

const ContactUs = ({
  title,
  titleClass,
}: {
  title: string;
  titleClass: string;
}) => {
  return (
    <div className="flex items-center h-48 p-14 justify-between bg-light-100 rounded-4xl w-[95%] bg-[url(/images/contact-us-bg.png)] bg-cover bg-local bg-no-repeat">
      <h1
        className={`${titleClass} text-light-800 tracking-tight font-semibold`}
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
  );
};

export default ContactUs;
