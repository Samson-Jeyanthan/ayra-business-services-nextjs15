import { ClientReqForm } from "@/components/forms";
import Image from "next/image";

const ClientFormSection = () => {
  return (
    <div
      id="client-form"
      className="flex items-start justify-center w-full p-20 gap-20"
    >
      <div className="flex flex-col items-center gap-10 w-[35%]">
        <h3 className="heading-3 text-center w-9/10">
          Partner with Us to Find the Right Staff
        </h3>
        <Image
          src="/images/staff-form-img.jpg"
          alt="client-form"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover rounded-3xl"
        />
      </div>
      <ClientReqForm />
    </div>
  );
};

export default ClientFormSection;
