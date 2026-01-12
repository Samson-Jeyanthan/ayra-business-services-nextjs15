"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CandidRegOneSchema } from "@/lib/validations";
import { Form } from "@/components/ui/form";
import { Dropdown, FormInput, PopupCalendar } from "@/components/inputs";
import { Button } from "@/components/ui/button";

const StepOne = () => {
  const form = useForm<z.infer<typeof CandidRegOneSchema>>({
    resolver: zodResolver(CandidRegOneSchema),
    defaultValues: {
      title: "",
      firstName: "",
      lastName: "",
      dob: new Date(),
      homeAddress: "",
      town: "",
      postCode: "",
      mobileNo: "",
      landlineNo: "",
      email: "",
      pictureOfYourself: [],
    },
  });

  async function onSubmit(values: z.infer<typeof CandidRegOneSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <div className="w-full flex gap-4 items-start">
          <Dropdown
            form={form}
            inputName="title"
            formLabel="Title"
            options={[
              { _id: "mr", name: "Mr" },
              { _id: "mrs", name: "Mrs" },
              { _id: "miss", name: "Miss" },
            ]}
            className="min-w-24 !w-24"
          />
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
        <div className="w-1/2 pr-4">
          <PopupCalendar
            form={form}
            inputName="dob"
            formLabel="Date of Birth"
          />
        </div>
        <FormInput
          form={form}
          inputName="homeAddress"
          inputType="text"
          formLabel="Home Address"
        />
        <div className="w-full flex gap-4">
          <FormInput
            form={form}
            inputName="town"
            inputType="text"
            formLabel="Town"
          />
          <FormInput
            form={form}
            inputName="postCode"
            inputType="text"
            formLabel="Post Code"
          />
        </div>
        <div className="w-full flex gap-4">
          <FormInput
            form={form}
            inputName="mobileNo"
            inputType="number"
            formLabel="Mobile No"
          />
          <FormInput
            form={form}
            inputName="landlineNo"
            inputType="number"
            formLabel="Landline No"
          />
        </div>
        <div className="w-1/2 pr-2">
          <FormInput
            form={form}
            inputName="email"
            inputType="email"
            formLabel="Email"
          />
        </div>
        <footer className="flex w-full gap-4 justify-end">
          <Button className="primary-btn">Next</Button>
        </footer>
      </form>
    </Form>
  );
};

export default StepOne;
