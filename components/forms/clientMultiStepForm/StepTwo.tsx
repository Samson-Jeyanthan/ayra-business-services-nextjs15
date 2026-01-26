"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CliRegTwoSchema } from "@/lib/validations";
import { CheckBox, FormInput } from "@/components/inputs";

const StepTwo = () => {
  const form = useForm<z.infer<typeof CliRegTwoSchema>>({
    resolver: zodResolver(CliRegTwoSchema),
    defaultValues: {
      primaryContact: {
        fullName: "",
        jobTitle: "",
        email: "",
        phoneNo: "",
        address: "",
      },
      sameAsPrimary: true,
      billingContact: {
        fullName: "",
        address: "",
        email: "",
        phoneNo: "",
      },
    },
  });

  async function onSubmit(values: z.infer<typeof CliRegTwoSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <h3 className="form-sub-title">Primary Contact</h3>
        <div className="flex flex-col gap-4">
          <FormInput
            form={form}
            inputName="primaryContact.fullName"
            formLabel="Full Name"
            inputType="text"
          />
          <div className="w-1/2">
            <FormInput
              form={form}
              inputName="primaryContact.jobTitle"
              formLabel="Job Title"
              inputType="text"
            />
          </div>
          <div className="flex gap-4">
            <FormInput
              form={form}
              inputName="primaryContact.email"
              formLabel="Email"
              inputType="email"
            />
            <FormInput
              form={form}
              inputName="primaryContact.phoneNo"
              formLabel="Phone Number"
              inputType="text"
            />
          </div>
          <FormInput
            form={form}
            inputName="primaryContact.address"
            formLabel="Address"
            inputType="text"
          />
        </div>
        <CheckBox
          form={form}
          checkboxLabel="Same as Primary Contact"
          inputName="sameAsPrimary"
        />
        <h3 className="form-sub-title">Billing Address</h3>
        <div className="flex flex-col gap-4">
          <FormInput
            form={form}
            inputName="billingContact.fullName"
            formLabel="Full Name"
            inputType="text"
          />
          <div className="flex gap-4">
            <FormInput
              form={form}
              inputName="billingContact.email"
              formLabel="Email"
              inputType="email"
            />
            <FormInput
              form={form}
              inputName="billingContact.phoneNo"
              formLabel="Phone Number"
              inputType="text"
            />
          </div>
          <FormInput
            form={form}
            inputName="billingContact.address"
            formLabel="Address"
            inputType="text"
          />
        </div>
        <footer className="flex w-full gap-4 justify-between">
          <Button className="secondary-btn">Back</Button>
          <Button className="primary-btn">Next</Button>
        </footer>
      </form>
    </Form>
  );
};

export default StepTwo;
