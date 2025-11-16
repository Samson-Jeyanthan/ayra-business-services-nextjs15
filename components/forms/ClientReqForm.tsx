"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";
import { ClientReqSchema } from "@/lib/validations";
import { FormInput, TextArea } from "../inputs";
import { Button } from "../ui/button";
import { createClientRequestAction } from "@/lib/actions/client.action";

const ClientForm = () => {
  const form = useForm<z.infer<typeof ClientReqSchema>>({
    resolver: zodResolver(ClientReqSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phoneNo: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ClientReqSchema>) {
    try {
      await createClientRequestAction({
        fullName: values.fullName,
        companyName: values.companyName,
        email: values.email,
        phoneNo: values.phoneNo,
        message: values.message,
      });
    } catch (error) {
      console.log(error);
    }

    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 space-y-8 w-3/10 flex flex-col items-center"
      >
        <FormInput
          form={form}
          inputName="fullName"
          inputType="text"
          formLabel="Full Name"
        />
        <FormInput
          form={form}
          inputName="companyName"
          inputType="text"
          formLabel="Company Name"
        />
        <FormInput
          form={form}
          inputName="email"
          inputType="email"
          formLabel="Email Address"
        />
        <FormInput
          form={form}
          inputName="phoneNo"
          inputType="text"
          formLabel="Phone Number"
        />
        <TextArea
          form={form}
          inputName="message"
          formLabel="Message"
          maxLength={500}
        />
        <Button type="submit" className="primary-btn-custom">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ClientForm;
