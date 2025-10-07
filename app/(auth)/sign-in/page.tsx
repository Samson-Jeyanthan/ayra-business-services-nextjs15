import { SigninForm } from "@/components/forms";
import Image from "next/image";

const SignIn = () => {
  return (
    <section className="min-h-screen w-full flex gap-10 p-4">
      <SigninForm />
      <Image
        src="/images/work-hero-img-2.jpg"
        alt="signup"
        width={1000}
        height={1000}
        className="w-3/5 h-auto rounded-3xl object-cover"
      />
    </section>
  );
};

export default SignIn;
