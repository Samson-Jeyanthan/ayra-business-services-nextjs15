"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { CliRegFiveSchema } from "@/lib/validations";
import { FormInput, PopupCalendar } from "@/components/inputs";

const StepFive = () => {
  const form = useForm<z.infer<typeof CliRegFiveSchema>>({
    resolver: zodResolver(CliRegFiveSchema),
    defaultValues: {
      authorizedPersonName: "",
      jobTitle: "",
      signature: "",
      date: new Date(),
    },
  });

  async function onSubmit(values: z.infer<typeof CliRegFiveSchema>) {
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
            inputName="authorizedPersonName"
            formLabel="Authorized Person Name"
            inputType="text"
          />
          <FormInput
            form={form}
            inputName="jobTitle"
            formLabel="Job Title"
            inputType="text"
          />
          <div className="w-1/2">
            <PopupCalendar form={form} formLabel="Date" inputName=" date" />
          </div>
        </div>
        <footer className="flex w-full gap-4 justify-between">
          <Button className="secondary-btn">Back</Button>
          <Button className="primary-btn">Submit</Button>
        </footer>
      </form>
    </Form>
  );
};

export default StepFive;
