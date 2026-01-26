"use client";

import { Form } from "../ui/form";
import { FormInput } from "../inputs";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdminLoginSchema } from "@/lib/validations";

const AdminLoginForm = () => {
  const form = useForm<z.infer<typeof AdminLoginSchema>>({
    resolver: zodResolver(AdminLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof AdminLoginSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 rounded-2xl bg-white items-center w-full"
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
        <Button className="primary-btn-custom mt-4">Login</Button>
      </form>
    </Form>
  );
};

export default AdminLoginForm;
