"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CandidRegTwoSchema } from "@/lib/validations";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/inputs";
import { Button } from "@/components/ui/button";

const StepTwo = () => {
  const form = useForm<z.infer<typeof CandidRegTwoSchema>>({
    resolver: zodResolver(CandidRegTwoSchema),
    defaultValues: {
      fullNameOfKin: "",
      relationToYou: "",
      kinMobileNo: "",
      kinLandlineNo: "",
      kinEmail: "",
    },
  });

  async function onSubmit(values: z.infer<typeof CandidRegTwoSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <div className="multi-form-wrapper">
          <FormInput
            form={form}
            inputName="fullNameOfKin"
            inputType="text"
            formLabel="Full Name of Kin"
          />
          <FormInput
            form={form}
            inputName="relationToYou"
            inputType="text"
            formLabel="Relation to You"
          />
          <div className="w-full flex gap-4">
            <FormInput
              form={form}
              inputName="kinMobileNo"
              inputType="text"
              formLabel="Mobile no"
            />
            <FormInput
              form={form}
              inputName="kinLandlineNo"
              inputType="text"
              formLabel="Landline no"
            />
          </div>
          <FormInput
            form={form}
            inputName="kinEmail"
            inputType="text"
            formLabel="Email Address"
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
