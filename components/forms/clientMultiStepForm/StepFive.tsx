"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { CliRegFiveSchema } from "@/lib/validations";
import { FormInput, PopupCalendar } from "@/components/inputs";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useTransition } from "react";
import { PartyPopper } from "lucide-react";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { clientRegStepFiveAction } from "@/lib/actions/client.action";

const StepFive = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof CliRegFiveSchema>>({
    resolver: zodResolver(CliRegFiveSchema),
    defaultValues: {
      authorizedPersonName: "",
      jobTitle: "",
      signature: "",
      date: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof CliRegFiveSchema>) {
    console.log(values);
    startTransition(async () => {
      const result = await clientRegStepFiveAction(values);
      console.log(result, "results on server side");
      if (result.success) {
        toast.success("Form has been submitted");
        redirect("/client-profile");
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
          <div className="flex flex-col gap-4">
            <FormInput
              form={form}
              inputName="authorizedPersonName"
              formLabel="Authorized Person Name"
              inputType="text"
            />
            <div className="flex gap-4 items-start">
              <FormInput
                form={form}
                inputName="jobTitle"
                formLabel="Job Title"
                inputType="text"
              />
              <PopupCalendar form={form} formLabel="Date" inputName="date" />
            </div>
          </div>
          <p className="p-8 font-semibold text-center rounded-2xl border border-solid border-light-400 flex gap-3">
            <PartyPopper />
            Thank you for choosing Ayra Business Services. We will be in touch
            shortly to confirm receipt and discuss the next steps.
          </p>
        </div>
        <footer className="flex w-full gap-4 justify-between">
          <Button className="secondary-btn">Back</Button>
          <Button className="primary-btn" type="submit" disabled={isPending}>
            {isPending ? (
              <>
                <ReloadIcon className="mr-2 size-4 animate-spin" />
                <span>Submitting</span>
              </>
            ) : (
              <>Submit</>
            )}
          </Button>
        </footer>
      </form>
    </Form>
  );
};

export default StepFive;
