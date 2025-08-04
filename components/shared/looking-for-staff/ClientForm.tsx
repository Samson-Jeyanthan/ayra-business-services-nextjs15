import Image from "next/image";

const ClientForm = () => {
  return (
    <div className="flex items-start justify-center w-full p-20 gap-20 border border-solid border-red-500">
      <div className="flex flex-col gap-10 w-1/3">
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
      Form
    </div>
  );
};

export default ClientForm;
