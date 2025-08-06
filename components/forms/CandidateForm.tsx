"use client";

import { CandidateSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Form } from "../ui/form";
import { FormInput } from "../inputs";

const CandidateForm = () => {
  const form = useForm<z.infer<typeof CandidateSchema>>({
    resolver: zodResolver(CandidateSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: "",
      address: "",
      prefferedRole: "",
      prefferedEmploymentStatus: "",
      typeOfWork: "",
    },
  });

  function onSubmit(values: z.infer<typeof CandidateSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 space-y-8 w-8/10 flex flex-col items-center"
      >
        <div className="candidate-form-contents">
          <FormInput
            form={form}
            inputName="firstName"
            inputType="text"
            formLabel="First Name"
          />
          <FormInput
            form={form}
            inputName="lastName"
            inputType="text"
            formLabel="Last Name"
          />
        </div>
        <div className="candidate-form-contents">
          <FormInput
            form={form}
            inputName="email"
            inputType="email"
            formLabel="Email"
          />
          <FormInput
            form={form}
            inputName="phoneNo"
            inputType="text"
            formLabel="Phone Number"
          />
        </div>
        <div className="candidate-form-contents">
          <FormInput
            form={form}
            inputName="address"
            inputType="text"
            formLabel="Your Address"
          />
        </div>
        <div className="candidate-form-contents"></div>
      </form>
    </Form>
  );
};

export default CandidateForm;
