"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CandidRegThreeSchema } from "@/lib/validations";
import { Form } from "@/components/ui/form";
import { FormInput, RadioButton, SwitchButton } from "@/components/inputs";
import { Button } from "@/components/ui/button";

const StepFour = () => {
  const form = useForm<z.infer<typeof CandidRegThreeSchema>>({
    resolver: zodResolver(CandidRegThreeSchema),
    defaultValues: {
      criminalCautionAct1974: false,
      reasonForAct1974: "",
    },
  });

  async function onSubmit(values: z.infer<typeof CandidRegThreeSchema>) {
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
            formLabel="Your Name (as it appears on your account)"
            inputName="nameAsOnAccount"
            inputType="text"
          />
          <FormInput
            form={form}
            formLabel="Bank / Building Society Name"
            inputName="bankSocietyName"
            inputType="text"
          />
          <FormInput
            form={form}
            formLabel="Account Number"
            inputName="accountno"
            inputType="text"
          />
          <FormInput
            form={form}
            formLabel="Sort Code"
            inputName="sortCode"
            inputType="text"
          />
          <SwitchButton
            form={form}
            formLabel="I confirm that these bank details are correct to which I require payment. I accept that any errors in these details may result in my payment being delayed. I accept that it is my responsibility to advise you of any changes in these details."
            inputName="bankDetailConfirmation"
          />
          <RadioButton
            form={form}
            inputName="holidayMode"
            formLabel="Holiday Mode"
            options={[
              {
                _id: "hourlyPay",
                name: "I Would like my Holiday Rolled-Up into my Hourly Pay",
              },
              {
                _id: "accruedForMe",
                name: "I Would like my Holiday to be Accrued for Me",
              },
            ]}
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

export default StepFour;
