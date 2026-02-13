"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { CandidRegSixSchema } from "@/lib/validations";
import { FormInput, PopupCalendar, SwitchButton } from "@/components/inputs";
import Required from "@/components/shared/common/Required";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { redirect } from "next/navigation";
import { candidateRegStepSixAction } from "@/lib/actions/candidate.action";
import { toast } from "sonner";

const refereeTemplate = {
  companyName: "",
  position: "",
  contactName: "",
  address: "",
  postCode: "",
  phoneNo: "",
  email: "",
  employmentStartDate: undefined,
  employmentEndDate: undefined,
  approachability: false,
};

const StepSix = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof CandidRegSixSchema>>({
    resolver: zodResolver(CandidRegSixSchema),
    defaultValues: { references: [refereeTemplate, refereeTemplate] },
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: "references", // the form root is an array
  });

  async function onSubmit(values: z.infer<typeof CandidRegSixSchema>) {
    startTransition(async () => {
      const result = await candidateRegStepSixAction(values);
      console.log(result, "results on server side");
      if (result.success) {
        toast.success("Form has been submitted");
        redirect("/candidate-registration/step-seven");
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
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="rounded-lg border md:p-4 flex flex-col gap-4"
          >
            <h2 className="font-semibold text-xl">Referee {index + 1}</h2>

            <FormInput
              form={form}
              inputName={`references.${index}.companyName`}
              inputType="text"
              formLabel="Company Name"
            />
            <FormInput
              form={form}
              inputName={`references.${index}.position`}
              formLabel="Position"
              inputType="text"
            />

            <FormInput
              form={form}
              inputName={`references.${index}.contactName`}
              formLabel="Contact Name"
              inputType="text"
            />

            <div className="flex flex-col md:flex-row gap-4 items-center">
              <FormInput
                form={form}
                inputName={`references.${index}.address`}
                formLabel="Address"
                inputType="text"
              />

              <FormInput
                form={form}
                inputName={`references.${index}.postCode`}
                formLabel="Post Code"
                inputType="text"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center">
              <FormInput
                form={form}
                inputName={`references.${index}.phoneNo`}
                formLabel="Phone Number"
                inputType="text"
              />

              <FormInput
                form={form}
                inputName={`references.${index}.email`}
                formLabel="Email"
                inputType="email"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center">
              <PopupCalendar
                form={form}
                inputName={`references.${index}.employmentStartDate`}
                formLabel="Employment Start Date"
              />

              <PopupCalendar
                form={form}
                inputName={`references.${index}.employmentEndDate`}
                formLabel="Employment End Date"
              />
            </div>

            <div className="flex flex-col gap-4 mt-1">
              <div className="text-sm font-semibold req-wrapper">
                Approachable
                <Required />
              </div>
              <SwitchButton
                form={form}
                formLabel="Please tick if you give permission for the agency to approach this referee."
                inputName={`references.${index}.approachability`}
              />
            </div>
          </div>
        ))}

        <footer className="flex w-full gap-4 justify-between">
          <Button
            type="button"
            className="secondary-btn"
            onClick={() => redirect("/candidate-registration/step-five")}
          >
            Back
          </Button>
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

export default StepSix;
