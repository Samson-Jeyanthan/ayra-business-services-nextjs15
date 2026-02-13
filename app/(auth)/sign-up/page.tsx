import { SignupForm } from "@/components/forms";
import Image from "next/image";

const SignUp = () => {
  return (
    <section className="h-auto md:min-h-screen w-full flex item-start justify-center md:justify-none md:items-none flex-col md:flex-row gap-10 p-4">
      <Image
        src="/images/staff-hero-img-1.jpg"
        alt="signup"
        width={1000}
        height={1000}
        className="w-full md:w-3/5 h-auto rounded-3xl object-cover"
      />
      <SignupForm />
    </section>
  );
};

export default SignUp;
