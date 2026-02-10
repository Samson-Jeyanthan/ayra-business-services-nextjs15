import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SERVICES } from "@/constants";

const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col md:flex-row gap-4 min-h-[85vh] bg-light-800 p-10 md:p-20"
    >
      <div className="w-full md:w-1/2 flex flex-col gap-8">
        <h2 className="heading-2">Services We Provide</h2>
        <p className="font-medium text-light-400">
          As a leading digital marketing agency, we are dedicated to providing
          comprehensive educational resources and answering frequently asked
          questions to help our clients.
        </p>
        <Image
          src="/images/recruitment-service.jpg"
          alt="services we provide"
          width={500}
          height={500}
          className=""
        />
        <Button className="primary-btn">View More</Button>
      </div>
      <div className="w-full md:w-1/2 h-max border-b-2 border-light-500 border-solid">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="service-1"
        >
          {SERVICES.map((item, index) => (
            <AccordionItem value={item.value} key={index} className="py-2">
              <div className="border-t-2 border-light-100 border-solid mb-2" />
              <AccordionTrigger className="text-2xl font-semibold hover:text-decoration-none cursor-pointer">
                {item.name}
              </AccordionTrigger>
              <AccordionContent className="text-light-400 text-base w-[92%]">
                {item.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Services;
