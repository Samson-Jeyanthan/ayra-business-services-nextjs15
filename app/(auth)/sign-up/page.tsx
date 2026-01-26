import { SignupForm } from "@/components/forms";
import Image from "next/image";

const SignUp = () => {
  return (
    <section className="min-h-screen w-full flex gap-10 p-4">
      <Image
        src="/images/staff-hero-img-1.jpg"
        alt="signup"
        width={1000}
        height={1000}
        className="w-3/5 h-auto rounded-3xl object-cover"
      />
      <SignupForm />
    </section>
  );
};

export default SignUp;
