"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CandidRegOneSchema } from "@/lib/validations";
import { Form, FormField } from "@/components/ui/form";
import {
  Dropdown,
  FormInput,
  MediaInput,
  PopupCalendar,
} from "@/components/inputs";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { candidateRegStepOneAction } from "@/lib/actions/candidate.action";
import { ReloadIcon } from "@radix-ui/react-icons";
import { getSignedURL } from "@/lib/actions/utils.action";
import { redirect } from "next/navigation";
import { IImageMediaProps } from "@/types/utils.types";
import Required from "@/components/shared/common/Required";

const StepOne = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof CandidRegOneSchema>>({
    resolver: zodResolver(CandidRegOneSchema),
    defaultValues: {
      title: "",
      firstName: "",
      lastName: "",
      dob: undefined,
      homeAddress: "",
      town: "",
      postCode: "",
      mobileNo: "",
      landlineNo: "",
      email: "",
      pictureOfYourself: [],
    },
  });

  const [previousMedia, setPreviousMedia] = useState<IImageMediaProps>({
    mediaURL: "",
  });

  async function onSubmit(values: z.infer<typeof CandidRegOneSchema>) {
    startTransition(async () => {
      // upload image to s3 bucket and get url
      let postImageURL = "";
      try {
        if (values.pictureOfYourself && values.pictureOfYourself.length > 0) {
          const signedURLResult = await getSignedURL({
            fileType: "image/jpeg",
          });
          console.log(signedURLResult);

          if (signedURLResult.failure !== undefined) {
            console.log(signedURLResult.failure);
            return;
          }

          const url = signedURLResult.success;

          const res = await fetch(url, {
            method: "PUT",
            body: values.pictureOfYourself[0],
            headers: {
              "Content-Type": "image/jpeg",
            },
          });

          if (res.ok) {
            postImageURL = url.split("?")[0];
          }
        }
      } catch (error) {
        console.log(error);
      }

      // submitting the form with uploaded image url
      const result = await candidateRegStepOneAction({
        ...values,
        pictureOfYourself: postImageURL,
      });

      if (result.success) {
        toast.success("Form has been submitted");
        redirect("/candidate-registration/step-two");
      } else {
        toast.error("Form submission failed");
      }
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 md:gap-8"
      >
        <div className="w-full flex flex-col md:flex-row gap-4 items-start">
          <Dropdown
            form={form}
            inputName="title"
            formLabel="Title"
            options={[
              { _id: "mr", name: "Mr" },
              { _id: "mrs", name: "Mrs" },
              { _id: "miss", name: "Miss" },
            ]}
            className="w-full md:min-w-24 md:!w-24"
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
        <div className="md:w-1/2 md:pr-4">
          <PopupCalendar
            form={form}
            inputName="dob"
            formLabel="Date of Birth"
            disableFunc={(date: Date) =>
              date < new Date("1920-01-01") || date > new Date()
            }
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
        <div className="w-full flex flex-col md:flex-row gap-4">
          <FormInput
            form={form}
            inputName="mobileNo"
            inputType="text"
            formLabel="Mobile No"
          />
          <FormInput
            form={form}
            inputName="landlineNo"
            inputType="text"
            formLabel="Landline No"
          />
        </div>
        <div className="md:w-1/2 pr-2">
          <FormInput
            form={form}
            inputName="email"
            inputType="email"
            formLabel="Email"
          />
        </div>
        <div className="form-img-input-wrapper">
          <div className="req-wrapper">
            Please upload a picture of your self
            <Required />
          </div>
          <FormField
            control={form.control}
            name="pictureOfYourself"
            render={({ field }) => (
              <MediaInput
                fieldChange={field.onChange}
                previousMedia={previousMedia}
                setPreviousMedia={setPreviousMedia}
              />
            )}
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
