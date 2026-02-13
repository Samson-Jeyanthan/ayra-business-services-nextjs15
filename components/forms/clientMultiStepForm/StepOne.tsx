"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { CliRegOneSchema } from "@/lib/validations";
import { FormInput } from "@/components/inputs";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { clientRegStepOneAction } from "@/lib/actions/client.action";

const StepOne = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof CliRegOneSchema>>({
    resolver: zodResolver(CliRegOneSchema),
    defaultValues: {
      companyLegalName: "",
      tradingAs: "",
      companyRegistrationNo: "",
      vatNo: "",
      registeredBusinessAddress: {
        street: "",
        city: "",
        country: "",
        postCode: "",
      },
      companyWebsite: "",
      industry: "",
    },
  });

  async function onSubmit(values: z.infer<typeof CliRegOneSchema>) {
    console.log(values);

    startTransition(async () => {
      const result = await clientRegStepOneAction(values);
      console.log(result, "results on server side");
      if (result.success) {
        toast.success("Form has been submitted");
        redirect("/client-registration/step-2");
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
        <FormInput
          form={form}
          inputName="companyLegalName"
          formLabel="Company Legal Name"
          inputType="text"
        />
        <FormInput
          form={form}
          inputName="tradingAs"
          formLabel="Trading As (if different)"
          inputType="text"
        />
        <div className="flex flex-col md:flex-row gap-4">
          <FormInput
            form={form}
            inputName="companyRegistrationNo"
            formLabel="Company Registration Number"
            inputType="text"
          />
          <FormInput
            form={form}
            inputName="vatNo"
            formLabel="VAT Number"
            inputType="text"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="form-sub-title">Registered Business Address</h3>
          <FormInput
            form={form}
            inputName="registeredBusinessAddress.street"
            formLabel="Street"
            inputType="text"
          />
          <div className="flex flex-col md:flex-row gap-4">
            <FormInput
              form={form}
              inputName="registeredBusinessAddress.city"
              formLabel="City"
              inputType="text"
            />
            <FormInput
              form={form}
              inputName="registeredBusinessAddress.country"
              formLabel="Country"
              inputType="text"
            />
          </div>
          <div className="md:w-1/2">
            <FormInput
              form={form}
              inputName="registeredBusinessAddress.postCode"
              formLabel="Post Code"
              inputType="text"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-4">
          <FormInput
            form={form}
            inputName="companyWebsite"
            formLabel="Company Website"
            inputType="text"
          />

          <FormInput
            form={form}
            inputName="industry"
            formLabel="Industry / Sector"
            inputType="text"
          />
        </div>

        <footer className="flex w-full gap-4 justify-end">
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

export default StepOne;
