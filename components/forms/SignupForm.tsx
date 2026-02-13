"use client";

import { Form } from "../ui/form";
import { FormInput } from "../inputs";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "@/lib/validations";
import { useTransition } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { signUpWithCredentials } from "@/lib/actions/auth.actions";
import { toast } from "sonner";
import Image from "next/image";
// import { redirect } from "next/navigation";

const SignupForm = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SignUpSchema>) {
    startTransition(async () => {
      const result = await signUpWithCredentials(values);
      console.log(result, "signup-result");
      if (result.success) {
        toast.success("You have signed up successfully");
        // if (result.data.userType === "client") {
        //   redirect("/client-registration/step-one");
        // } else {
        //   redirect("/candidate-registration/step-one");
        // }
      } else {
        toast.error("Sign-up failed", {
          description: `${result?.error?.message}`,
        });
      }
    });
  }

  return (
    <div className="z-10 -mt-40 md:mt-0 bg-white rounded-2xl p-8 md:p-0 w-full md:w-2/5 flex flex-col items-center justify-center border border-solid border-black">
      <Image src="/images/ayrabs-logo.png" alt="logo" width={180} height={32} />
      <h3 className="font-semibold text-2xl mt-5">Create an Account</h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 rounded-2xl items-center w-full md:w-5/8 mt-5"
        >
          <FormInput
            form={form}
            inputName="username"
            formLabel="Username"
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
          <Button className="primary-btn-custom mt-4" disabled={isPending}>
            {isPending ? (
              <>
                <ReloadIcon className="mr-2 size-4 animate-spin" />
                <span>Siginin up...</span>
              </>
            ) : (
              <>Sign Up</>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;
