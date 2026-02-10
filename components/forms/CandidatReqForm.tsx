"use client";

import { CandidateReqSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Form } from "../ui/form";
import { Dropdown, FormInput } from "../inputs";
import { Button } from "../ui/button";
import { createCandidateRequestAction } from "@/lib/actions/candidate.action";
import { useTransition } from "react";
import { toast } from "sonner";
import { ReloadIcon } from "@radix-ui/react-icons";

const CandidateForm = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof CandidateReqSchema>>({
    resolver: zodResolver(CandidateReqSchema),
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

  async function onSubmit(values: z.infer<typeof CandidateReqSchema>) {
    startTransition(async () => {
      const result = await createCandidateRequestAction(values);

      console.log(result, "result");

      if (result.success) {
        toast.success("Form has been submitted");
      } else {
        toast.error("Form submission failed");
      }
    });

    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 space-y-8 w-full md:w-8/10 flex flex-col items-center"
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
        <Button className="primary-btn-custom mt-4" disabled={isPending}>
          {isPending ? (
            <>
              <ReloadIcon className="mr-2 size-4 animate-spin" />
              <span>Submitting</span>
            </>
          ) : (
            <>Submit</>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default CandidateForm;
