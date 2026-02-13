import {
  Aboutus,
  Cargo,
  ClientChoose,
  ContactUs,
  Hero,
  Ribbon,
  Services,
} from "@/components/shared";

// import handleError from "@/lib/handlers/error";
// import { ValidationError } from "@/lib/http-errors";

// const test = async () => {
//   try {
//     throw new ValidationError({
//       title: ["Required"],
//       tags: ['"JavaScript" is not a valid tag.'],
//     });
//   } catch (error) {
//     return handleError(error);
//   }
// };

const LandingPage = async () => {
  // await test();     // "next": "^16.2.0-canary.33",

  return (
    <section className="w-full flex flex-col min-h-screen items-center">
      <Hero />
      <Ribbon />
      <Aboutus />
      <Services />
      <ClientChoose />
      <Cargo />
      <div className="h-6 w-full bg-light-600" />
      <ContactUs
        title="Ready to work with us ?"
        titleClass="text-4xl md:text-7xl font-semibold"
      />
    </section>
  );
};

export default LandingPage;
