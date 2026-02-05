"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CandidRegTwoSchema } from "@/lib/validations";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/inputs";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { candidateRegStepTwoAction } from "@/lib/actions/candidate.action";
import { toast } from "sonner";
import { useTransition } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

const StepTwo = () => {
  const [isPending, startTransition] = useTransition();
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
    startTransition(async () => {
      const result = await candidateRegStepTwoAction(values);
      console.log(result, "results on server side");
      if (result.success) {
        toast.success("Form has been submitted");
        redirect("/candidate-registration/step-3");
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
          <div className="w-full flex gap-4 items-start">
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
          <Button
            type="button"
            className="secondary-btn"
            onClick={() => redirect("/candidate-registration/step-one")}
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

export default StepTwo;
