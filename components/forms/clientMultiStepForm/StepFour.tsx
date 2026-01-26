"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { CliRegFourSchema } from "@/lib/validations";
import { PopupCalendar, TextArea } from "@/components/inputs";

const StepFour = () => {
  const form = useForm<z.infer<typeof CliRegFourSchema>>({
    resolver: zodResolver(CliRegFourSchema),
    defaultValues: {
      intendedInterviewProcess: "",
      deadlineForCandidate: new Date(),
    },
  });

  async function onSubmit(values: z.infer<typeof CliRegFourSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <div className="multi-form-wrapper">
          <TextArea
            form={form}
            inputName="intendedInterviewProcess"
            formLabel="Please outline your intended interview process"
            formDescription="e.g., 1st stage video call, 2nd stage in-person with task"
            maxLength={400}
          />
          <div className="w-1/2">
            <PopupCalendar
              form={form}
              formLabel="Deadline For Candidate"
              inputName="deadlineForCandidate"
            />
          </div>
        </div>
        <footer className="flex w-full gap-4 justify-between">
          <Button className="secondary-btn">Back</Button>
          <Button className="primary-btn">Next</Button>
        </footer>
      </form>
    </Form>
  );
};

export default StepFour;
