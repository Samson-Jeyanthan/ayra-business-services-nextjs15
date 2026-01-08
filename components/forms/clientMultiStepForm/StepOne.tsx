"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { CliRegOneSchema } from "@/lib/validations";
import { FormInput } from "@/components/inputs";
import { Button } from "@/components/ui/button";

const StepOne = () => {
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

    //     const result = await createClientStepOneAction(values);
    //     if (result.success) {
    //       console.log(result)
    // }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
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
        <div className="flex gap-4">
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
          <div className="flex gap-4">
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
          <div className="w-1/2">
            <FormInput
              form={form}
              inputName="registeredBusinessAddress.postCode"
              formLabel="Post Code"
              inputType="text"
            />
          </div>
        </div>
        <div className="flex w-full gap-4">
          <FormInput
            form={form}
            inputName="companyWebsite"
            formLabel="Company Website"
            inputType="text"
          />

          <FormInput
            form={form}
            inputName="industry"
            formLabel="Industry"
            inputType="text"
          />
        </div>

        <footer className="flex w-full gap-4 justify-end">
          <Button className="primary-btn" type="submit">
            Next
          </Button>
        </footer>
      </form>
    </Form>
  );
};

export default StepOne;
