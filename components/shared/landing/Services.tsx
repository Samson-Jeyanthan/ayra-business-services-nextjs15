import { Button } from "@/components/ui/button";
import Image from "next/image";

const Services = () => {
  return (
    <section className="flex gap-4 min-h-screen bg-light-800">
      <div className="w-1/2">
        <h2>Services We Provide</h2>
        <p>
          As a leading digital marketing agency, we are dedicated to providing
          comprehensive educational resources and answering frequently asked
          questions to help our clients.
        </p>
        <Image
          src="/images/about-city.jpg"
          alt="services we provide"
          width={500}
          height={500}
          className=""
        />
        <Button className="primary-btn">View More</Button>
      </div>
      <div className="w-1/2">List of services</div>
    </section>
  );
};

export default Services;
