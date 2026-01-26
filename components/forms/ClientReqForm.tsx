"use client";

import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";
import { ClientReqSchema } from "@/lib/validations";
import { FormInput, TextArea } from "../inputs";
import { Button } from "../ui/button";
import { createClientRequestAction } from "@/lib/actions/client.action";
import { toast } from "sonner";
import { ReloadIcon } from "@radix-ui/react-icons";

const ClientForm = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof ClientReqSchema>>({
    resolver: zodResolver(ClientReqSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      phoneNo: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ClientReqSchema>) => {
    startTransition(async () => {
      const result = await createClientRequestAction(values);

      console.log(result, "result");

      if (result.success) {
        toast.success("Form has been submitted");
      } else {
        toast.error("Form submission failed");
      }
    });

    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 space-y-8 w-3/10 flex flex-col items-center"
      >
        <div className="flex gap-2 w-full">
          <FormInput
            form={form}
            inputName="firstName"
            inputType="text"
            formLabel="First Name"
          />
          <FormInput
            form={form}
            inputName="lastName"
            inputType="text"
            formLabel="Last Name"
          />
        </div>
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
        <Button
          type="submit"
          className="primary-btn-custom"
          disabled={isPending}
        >
          {isPending ? (
            <>
              <ReloadIcon className="mr-2 size-4 animate-spin" />
              <span>Submitting</span>
            </>
          ) : (
            <>Submit</>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ClientForm;
