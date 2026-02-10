import {
  About,
  ClientFormSection,
  CommonHero,
  ContactUs,
  Description,
  WhyPartner,
} from "@/components/shared";
import { WHY_PARTNER_STAFF } from "@/constants";

const LookingForStaff = () => {
  return (
    <section className="relative flex flex-col gap-10 w-full items-center z-10">
      <div className="bg-repeat bg-linear-to-b from-light-900 to-light-600 flex flex-col gap-10 w-full items-center pb-16 -mb-10">
        <CommonHero
          title="Looking for Staff ??"
          description="At Ayra Business Services, we connect businesses with skilled
        professionals who are ready to make an impact. Whether you’re hiring for
        short-term roles or building a long-term team, we make recruitment
        simple, fast, and reliable."
          linkTo="/looking-for-staff/#client-form"
          img_one="/images/staff-hero-img-1.jpg"
          img_two="/images/staff-hero-img-2.jpg"
          inverse_img={false}
        />
        <About
          title="Recruitment  that  Understands  Your  Needs"
          description="Forget the guesswork. Our recruitment consultants bring a unique, firsthand understanding to the table. Many have direct experience in the very sectors you're hiring for, including HGV driving and warehouse operations. This means we don't just match CVs to job descriptions; we truly comprehend the demands of the role and the intricacies of your operational environment. We know what it takes to thrive in these positions because our team members have lived it. This deep insight ensures we connect you with candidates who aren't just skilled, but who are the perfect fit for your specific requirements and company culture, saving you time and reducing turnover."
        />
      </div>
      <WhyPartner
        title="Why Partner with Ayra Business Services?"
        description="At Ayra Business Services, we don’t just offer services — we deliver reliable, tailored solutions that empower businesses to grow, adapt, and succeed. Our clients trust us for our dedication, versatility, and results-driven approach."
        data={WHY_PARTNER_STAFF}
      />
      <ClientFormSection />
      <Description />
      <ContactUs
        title="Ready to experience the Ayra difference and drive your business forward?"
        titleClass="text-4xl md:text-5xl font-semibold w-full md:w-4/6"
      />
    </section>
  );
};

export default LookingForStaff;
