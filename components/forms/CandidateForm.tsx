"use client";

import { CandidateSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Form } from "../ui/form";
import { Dropdown, FormInput } from "../inputs";
import { Button } from "../ui/button";
import { createCandidateRequest } from "@/lib/actions/candidate.action";

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

  async function onSubmit(values: z.infer<typeof CandidateSchema>) {
    console.log(values);

    try {
      await createCandidateRequest({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phoneNo: values.phoneNo,
        address: values.address,
        prefRole: values.prefferedRole,
        prefEmpStatus: values.prefferedEmploymentStatus,
        typeOfWork: values.typeOfWork,
      });
    } catch (error) {
      console.log(error);
    }
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
          <Dropdown
            form={form}
            inputName="prefferedRole"
            formLabel="Preferred Role"
            options={[
              { _id: "frontend", name: "Frontend" },
              { _id: "backend", name: "Backend" },
              { _id: "fullStack", name: "Fullstack" },
            ]}
          />
        </div>
        <div className="candidate-form-contents">
          <Dropdown
            form={form}
            inputName="prefferedEmploymentStatus"
            formLabel="Employment Status You Prefer"
            options={[
              { _id: "fullTime", name: "Full Time" },
              { _id: "partTime", name: "Part Time" },
            ]}
          />
          <Dropdown
            form={form}
            inputName="typeOfWork"
            formLabel="What Type of Work Do You Prefer?"
            options={[
              { _id: "remote", name: "Remote" },
              { _id: "onsite", name: "Onsite" },
            ]}
          />
        </div>
        <Button className="primary-btn-custom mt-4">Submit</Button>
      </form>
    </Form>
  );
};

export default CandidateForm;
