"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CliRegTwoSchema } from "@/lib/validations";
import { CheckBox, FormInput } from "@/components/inputs";
import { useEffect, useTransition } from "react";
import { clientRegStepTwoAction } from "@/lib/actions/client.action";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import { ReloadIcon } from "@radix-ui/react-icons";

const StepTwo = () => {
  const [isPending, startTransition] = useTransition();
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
      sameAsPrimary: false,
      billingContact: {
        fullName: "",
        address: "",
        email: "",
        phoneNo: "",
      },
    },
  });

  const sameAsPrimary = form.watch("sameAsPrimary");
  const primaryContact = form.watch("primaryContact");

  useEffect(() => {
    if (sameAsPrimary) {
      form.setValue("billingContact.fullName", primaryContact.fullName);
      form.setValue("billingContact.email", primaryContact.email);
      form.setValue("billingContact.phoneNo", primaryContact.phoneNo);
      form.setValue("billingContact.address", primaryContact.address);
    }
  }, [sameAsPrimary, primaryContact, form]);

  async function onSubmit(values: z.infer<typeof CliRegTwoSchema>) {
    startTransition(async () => {
      const result = await clientRegStepTwoAction(values);
      console.log(result, "results on server side");
      if (result.success) {
        toast.success("Form has been submitted");
        redirect("/client-registration/step-3");
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
        <h3 className="form-sub-title">
          Primary Contact
          <span className="text-base">
            For day-to-day correspondence regarding this role
          </span>
        </h3>
        <div className="flex flex-col gap-4">
          <FormInput
            form={form}
            inputName="primaryContact.fullName"
            formLabel="Full Name"
            inputType="text"
          />
          <div className="md:w-1/2">
            <FormInput
              form={form}
              inputName="primaryContact.jobTitle"
              formLabel="Job Title"
              inputType="text"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-start">
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
        <h3 className="form-sub-title">
          Billing Address
          <span className="text-base">For invoices and payment queries</span>
        </h3>
        <div className="flex flex-col gap-4">
          <FormInput
            form={form}
            inputName="billingContact.fullName"
            formLabel="Full Name"
            inputType="text"
            disabled={sameAsPrimary}
          />
          <div className="flex flex-col md:flex-row gap-4">
            <FormInput
              form={form}
              inputName="billingContact.email"
              formLabel="Email"
              inputType="email"
              disabled={sameAsPrimary}
            />
            <FormInput
              form={form}
              inputName="billingContact.phoneNo"
              formLabel="Phone Number"
              inputType="text"
              disabled={sameAsPrimary}
            />
          </div>
          <FormInput
            form={form}
            inputName="billingContact.address"
            formLabel="Address"
            inputType="text"
            disabled={sameAsPrimary}
          />
        </div>
        <footer className="flex w-full gap-4 justify-between">
          <Button className="secondary-btn">Back</Button>
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
