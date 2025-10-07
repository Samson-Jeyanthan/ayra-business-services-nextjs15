"use client";

import { Form } from "../ui/form";
import { FormInput } from "../inputs";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "@/lib/validations";
import Link from "next/link";
import ROUTES from "@/constants/routes";

const SignupForm = () => {
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SignUpSchema>) {
    console.log(values);
  }

  return (
    <div className="w-2/5 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">AYRABS</h1>
      <h3 className="font-semibold text-2xl mt-5">Create an Account</h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 rounded-2xl items-center w-4/6 mt-5"
        >
          <FormInput
            form={form}
            inputName="name"
            formLabel="Full Name"
            inputType="text"
          />
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
          <Button className="primary-btn-custom mt-4">Signup</Button>

          <div className="flex gap-2 text-sm">
            <p>Already have an account?</p>
            <Link href={ROUTES.SIGN_IN} className="font-semibold text-sky-700">
              Signin
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;
