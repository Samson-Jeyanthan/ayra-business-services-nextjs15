"use client";

import { Form } from "../ui/form";
import { FormInput } from "../inputs";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@/lib/validations";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import { toast } from "sonner";

const SigninForm = () => {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignIn = async () => {
    try {
      throw new Error("Sign-in failed");
    } catch (error) {
      console.log(error);

      toast.error("Sign-in failed", {
        description:
          error instanceof Error
            ? error.message
            : "An error occurred during sign-in.",
        duration: 5000,
      });
    }
  };

  async function onSubmit(values: z.infer<typeof SignInSchema>) {
    console.log(values);
  }

  return (
    <div className="w-2/5 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">AYRABS</h1>
      <h3 className="font-semibold text-2xl mt-5">Login to your account</h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 rounded-2xl items-center w-4/6 mt-5"
        >
          <FormInput
            form={form}
            inputName="email"
            formLabel="Email"
            inputType="email"
          />
          <FormInput
            form={form}
            inputName="password"
            formLabel="Password"
            inputType="password"
          />
          <Button className="primary-btn-custom mt-4" onClick={handleSignIn}>
            Login
          </Button>

          <div className="flex gap-2 text-sm ">
            <p>Don&apos;t have an account?</p>
            <Link href={ROUTES.SIGN_UP} className="font-semibold text-sky-700">
              Signup
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SigninForm;
