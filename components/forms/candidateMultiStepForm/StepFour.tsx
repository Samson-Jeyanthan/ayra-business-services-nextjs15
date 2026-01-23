"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CandidRegFourSchema } from "@/lib/validations";
import { Form } from "@/components/ui/form";
import { FormInput, RadioButton, SwitchButton } from "@/components/inputs";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { candidateRegStepFourAction } from "@/lib/actions/candidate.action";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import { ReloadIcon } from "@radix-ui/react-icons";

const StepFour = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof CandidRegFourSchema>>({
    resolver: zodResolver(CandidRegFourSchema),
    defaultValues: {
      nameAsOnAccount: "",
      bankSocietyName: "",
      accountNo: "",
      sortCode: "",
      bankDetailConfirmation: false,
      holidayMode: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof CandidRegFourSchema>) {
    startTransition(async () => {
      const result = await candidateRegStepFourAction(values);
      if (result.success) {
        toast.success("Form has been submitted");
        redirect("/candidate-registration/step-five");
      } else {
        toast.error("Form submission failed");
      }
    });
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
            inputName="accountNo"
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
          <Button
            className="secondary-btn"
            onClick={() => redirect("/candidate-registration/step-three")}
          >
            Back
          </Button>
          <Button className="primary-btn" type="submit" disabled={isPending}>
            {isPending ? (
              <>
                <ReloadIcon className="mr-2 size-4 animate-spin" />
                <span>Next</span>
              </>
            ) : (
              <>Next</>
            )}
          </Button>
        </footer>
      </form>
    </Form>
  );
};

export default StepFour;
