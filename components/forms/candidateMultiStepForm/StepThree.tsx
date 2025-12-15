"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CandidRegThreeSchema } from "@/lib/validations";
import { Form } from "@/components/ui/form";
import { RadioButton, TextArea } from "@/components/inputs";
import { Button } from "@/components/ui/button";

const StepThree = () => {
  const form = useForm<z.infer<typeof CandidRegThreeSchema>>({
    resolver: zodResolver(CandidRegThreeSchema),
    defaultValues: {
      criminalCautionAct1974: false,
      reasonForAct1974: "",
    },
  });

  async function onSubmit(values: z.infer<typeof CandidRegThreeSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <div className="multi-form-wrapper">
          <p className="font-semibold">
            Do you currently have a criminal caution or convictions which are
            not yet spent (i.e. unspent) under the terms of the Rehabilitation
            of Offenders Act 1974 (ROA 1974)?
          </p>
          <RadioButton
            form={form}
            inputName="criminalCautionAct1974"
            formLabel=""
            options={[
              {
                _id: "true",
                name: "Yes",
              },
              {
                _id: "false",
                name: "No",
              },
            ]}
          />
          <p className="font-semibold">
            If you have answered &quot;Yes&quot;, please provide the offence
            dates, dates of conviction/caution, offence types and sentences
            recieved below
          </p>
          <TextArea
            form={form}
            inputName="reasonForAct1974"
            formDescription={`if you do have any declared convictions, you are welcome to provide us with any additional information that you think may be relevant and which will help us to determine your suitability to be put forward for roles with our clients. This could include for example information about the circumstances of the offence, any work (paid or voluntary) or training that you have undertaken since, change in your circumstances etc.\n\n We will seek to put forward/supply the best possible candidates to our clients. Having a criminal conviction will not necessarily exclude you from the process.`}
          />
          <p className="text-sm -mt-4">
            The information given will be treated in the strictest of confidence
            and only taken into account where, in our reasonable opinion, the
            offence is relevant to the post to which you are applying. Failure
            to declare a conviction may require us to exclude you from our
            register if the offence is not declared but later comes to light. If
            you are working in an assignment with a client at the time that we
            are made aware of a conviction that you have not disclosed to us, we
            may be legally required to inform our client of that information and
            your assignment may be terminated.
          </p>
        </div>
        <footer className="flex w-full gap-4 justify-between">
          <Button className="secondary-btn">Back</Button>
          <Button className="primary-btn">Next</Button>
        </footer>
      </form>
    </Form>
  );
};

export default StepThree;
