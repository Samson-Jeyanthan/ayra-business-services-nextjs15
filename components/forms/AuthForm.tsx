"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import z, { ZodType } from "zod";
import { Form } from "../ui/form";
import { FormInput } from "../inputs";
import { Button } from "../ui/button";
import Link from "next/link";
import ROUTES from "@/constants/routes";

interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  formType: "SIGN_IN" | "SIGN_UP";
  onSubmit: (data: T) => Promise<{ success: boolean }>;
}

const AuthForm = <T extends FieldValues>({
  schema,
  defaultValues,
  formType,
  onSubmit,
}: AuthFormProps<T>) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    const result = (await onSubmit(data)) as ActionResponse;

    console.log(result);
  };

  const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";

  return (
    <div className="w-2/5 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">AYRABS</h1>
      <h3 className="font-semibold text-2xl mt-5">Login to your account</h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-4 rounded-2xl items-center w-4/6 mt-5"
        >
          {Object.keys(defaultValues).map((field: any) => (
            <FormInput
              key={field}
              form={form}
              inputName={field as Path<T>}
              formLabel={
                field.name === "email"
                  ? "Email Address"
                  : field.name.charAt(0).toUpperCase() + field.name.slice(1)
              }
              inputType="email"
            />
          ))}

          <Button
            disabled={form.formState.isSubmitting}
            type="submit"
            className="primary-btn-custom mt-4"
          >
            {form.formState.isSubmitting
              ? buttonText === "Sign In"
                ? "Signin In..."
                : "Signing Up..."
              : buttonText}
          </Button>

          {formType === "SIGN_IN" ? (
            <div className="flex gap-2 text-sm">
              <p>Don&apos;t have an account?</p>
              <Link
                href={ROUTES.SIGN_UP}
                className="font-semibold text-sky-700"
              >
                Signup
              </Link>
            </div>
          ) : (
            <div className="flex gap-2 text-sm">
              <p>Already have an account?</p>
              <Link
                href={ROUTES.SIGN_IN}
                className="font-semibold text-sky-700"
              >
                Signin
              </Link>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default AuthForm;
