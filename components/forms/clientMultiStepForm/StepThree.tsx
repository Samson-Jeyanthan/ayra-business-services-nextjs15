"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { CliRegThreeSchema } from "@/lib/validations";
import {
  FormInput,
  PopupCalendar,
  RadioButton,
  TextArea,
} from "@/components/inputs";
import { useTransition } from "react";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { clientRegStepThreeAction } from "@/lib/actions/client.action";
import { ReloadIcon } from "@radix-ui/react-icons";

const StepThree = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof CliRegThreeSchema>>({
    resolver: zodResolver(CliRegThreeSchema),
    defaultValues: {
      jobInformation: {
        jobTitle: "",
        department: "",
        reportingTo: "",
        locationOfWork: undefined,
        ifHybridDays: "",
      },
      employmentTerms: {
        typeOfPosition: "",
        startDate: undefined,
        endDate: undefined,
        workingTimeType: undefined,
        workingHours: "",
        workSchedule: "",
      },
      compensations: {
        salaryRangeFrom: "",
        salaryRangeTo: "",
        hourlyRate: "",
        isBonusCommission: undefined,
        ifYesBonusCommission: "",
        keyBenefitsOffered: "",
      },
      roleAndCandidateProfile: {
        mainResponsibilities: "",
        essentialSkills: "",
        desirableSkills: "",
        requiredQualifications: "",
        keySoftSkills: "",
      },
    },
  });

  async function onSubmit(values: z.infer<typeof CliRegThreeSchema>) {
    startTransition(async () => {
      const result = await clientRegStepThreeAction(values);
      console.log(result, "results on server side");
      if (result.success) {
        toast.success("Form has been submitted");
        redirect("/client-registration/step-4");
      } else {
        toast.error("Form submission failed");
      }
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 md:gap-8"
      >
        <h3 className="form-sub-title">Job Information</h3>
        <FormInput
          form={form}
          inputName="jobInformation.jobTitle"
          formLabel="Job Title"
          inputType="text"
        />
        <FormInput
          form={form}
          inputName="jobInformation.department"
          formLabel="Department"
          inputType="text"
        />
        <FormInput
          form={form}
          inputName="jobInformation.reportingTo"
          formLabel="Reporting To (Job Title)"
          inputType="text"
        />
        <RadioButton
          form={form}
          inputName="jobInformation.locationOfWork"
          formLabel="Location of Work"
          options={[
            {
              _id: "onsite",
              name: "On-Site",
            },
            {
              _id: "hybrid",
              name: "Hybrid (Please specify days in office)",
            },
            {
              _id: "fullyremote",
              name: "Fully Remote",
            },
          ]}
        />
        <div className="md:w-1/2">
          <FormInput
            form={form}
            inputName="jobInformation.ifHybridDays"
            formLabel="If yes, please specify days in office"
            inputType="text"
          />
        </div>
        <h3 className="form-sub-title">Employment Terms</h3>
        <RadioButton
          form={form}
          inputName="employmentTerms.typeOfPosition"
          formLabel="Type of Position"
          options={[
            {
              _id: "permanent",
              name: "Permanent",
            },
            {
              _id: "temporary",
              name: "Temporary",
            },
            {
              _id: "fixedTermContract",
              name: "Fixed Term Contract",
            },
            {
              _id: "tempToPerm",
              name: "Temp to Perm",
            },
          ]}
        />
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <PopupCalendar
            form={form}
            formLabel="Desired Start Date"
            inputName="employmentTerms.startDate"
          />
          <PopupCalendar
            form={form}
            formLabel="For Temporary/Contract roles, specify duration or end date"
            inputName="employmentTerms.endDate"
          />
        </div>
        <h3 className="form-sub-title">Working Hours</h3>
        <RadioButton
          form={form}
          inputName="employmentTerms.workingTimeType"
          formLabel="Working Time Type"
          options={[
            {
              _id: "fullTime",
              name: "Full Time",
            },
            {
              _id: "partTime",
              name: "Part Time",
            },
          ]}
        />
        <div className="flex flex-col md:flex-row gap-4">
          <FormInput
            form={form}
            inputName="employmentTerms.workingHours"
            formLabel="Please specify hours per days or week"
            inputType="text"
            formDescription="e.g. 37.5 hours/days"
          />
          <FormInput
            form={form}
            inputName="employmentTerms.workSchedule"
            formLabel="Work Schedule"
            inputType="text"
            formDescription="e.g. Mon-Fri, 9am-5pm"
          />
        </div>
        <h3 className="form-sub-title">Compensation & Benefits</h3>
        <div className="flex gap-4 items-start">
          <FormInput
            form={form}
            inputName="compensations.salaryRangeFrom"
            formLabel="Salary Range From £"
            inputType="text"
            formDescription="Annual"
          />
          <FormInput
            form={form}
            inputName="compensations.salaryRangeTo"
            formLabel="To £"
            inputType="text"
            formDescription=""
          />
        </div>
        <FormInput
          form={form}
          inputName="compensations.hourlyRate"
          formLabel="Hourly/Daily Rate £"
          inputType="text"
          formDescription="e.g. for Temp/Contract - £10 per Hour"
        />
        <RadioButton
          form={form}
          inputName="compensations.isBonusCommission"
          formLabel="Is there any Bonus/Commission"
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
        <div className="md:w-1/2">
          <FormInput
            form={form}
            inputName="compensations.ifYesBonusCommission"
            formLabel="If yes, please provide details below"
            inputType="text"
          />
        </div>
        <TextArea
          form={form}
          inputName="compensations.keyBenefitsOffered"
          formLabel="Key Benefits Offered"
          formDescription="e.g., Pension scheme, private medical, life insurance, etc."
          maxLength={400}
        />
        <h3 className="form-sub-title">Role & Candidate Profile</h3>
        <TextArea
          form={form}
          inputName="roleAndCandidateProfile.mainResponsibilities"
          formLabel="Main Responsibilities & Duties of the Role"
          formDescription="Please be as detailed as possible"
          maxLength={400}
        />
        <TextArea
          form={form}
          inputName="roleAndCandidateProfile.essentialSkills"
          formLabel="Essential Skills & Experience (Non Negotiable)"
          maxLength={400}
        />
        <TextArea
          form={form}
          inputName="roleAndCandidateProfile.desirableSkills"
          formLabel="Desirable Skills & Experience (Nice to have)"
          maxLength={400}
        />
        <TextArea
          form={form}
          inputName="roleAndCandidateProfile.requiredQualifications"
          formLabel="Required Qualifications / Certifications"
          maxLength={400}
        />
        <TextArea
          form={form}
          inputName="roleAndCandidateProfile.keySoftSkills"
          formLabel="Key Soft Skills"
          formDescription="e.g., Communication, team player, leadership, problem-solving"
          maxLength={400}
        />
        <footer className="flex w-full gap-4 justify-between">
          <Button className="secondary-btn">Back</Button>
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

export default StepThree;
