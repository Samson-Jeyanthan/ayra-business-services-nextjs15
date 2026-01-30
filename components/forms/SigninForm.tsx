"use client";

import { Form } from "../ui/form";
import { FormInput } from "../inputs";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@/lib/validations";
import { toast } from "sonner";
import { signInWithCredentials } from "@/lib/actions/auth.actions";
import { useTransition } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { redirect } from "next/navigation";
import Image from "next/image";

const SigninForm = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SignInSchema>) {
    startTransition(async () => {
      const result = await signInWithCredentials(values);

      if (result.success) {
        toast.success("You have signed up successfully");

        // redirect("/candidate-registration/step-one");
      } else {
        toast("Sign-in failed", {
          description: `${result?.error?.message}`,
        });
      }
    });
  }

  return (
    <div className="w-2/5 flex flex-col items-center justify-center">
      <Image src="/images/ayrabs-logo.png" alt="logo" width={180} height={32} />
      <h3 className="font-semibold text-2xl mt-5">Login to your account</h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 rounded-2xl items-center w-5/8 mt-5"
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
          <Button className="primary-btn-custom mt-4" disabled={isPending}>
            {isPending ? (
              <>
                <ReloadIcon className="mr-2 size-4 animate-spin" />
                <span>Login In...</span>
              </>
            ) : (
              <>Login</>
            )}
          </Button>

          <div className="flex flex-col gap-2 text-sm ">
            <p className="font-semibold">Don&apos;t have an account?</p>
            <span className="text-sm">
              Please request registration on our website if you’re looking for
              staff or looking for work.
            </span>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SigninForm;
