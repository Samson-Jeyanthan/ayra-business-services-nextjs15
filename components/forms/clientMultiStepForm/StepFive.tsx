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
          By signing below, you confirm that:
          <div className="flex flex-col gap-4">
            <p>
              1. The information provided in this form is accurate to the best
              of your knowledge.
            </p>
            <p>
              2. You are an authorised representative of your company with the
              authority to engage recruitment services.
            </p>
            <p>
              3. You have read, understood, and agree to the Terms and
              Conditions of Business provided by [Ayra Business Services] (copy
              attached/available at [Link to your T&Cs]).
            </p>
            <p>
              4. You authorise [Ayra Business Services] to source and submit
              candidates for the position(s) detailed herein.
            </p>
          </div>
          <div className="">
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
            <PopupCalendar form={form} formLabel="Date" inputName=" date" />
          </div>
          <p>
            Thank you for choosing Ayra Business Services. We will be in touch
            shortly to confirm receipt and discuss the next steps.
          </p>
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
