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

const StepThree = () => {
  const form = useForm<z.infer<typeof CliRegThreeSchema>>({
    resolver: zodResolver(CliRegThreeSchema),
    defaultValues: {
      jobInformation: {
        jobTitle: "",
        department: "",
        reportingTo: "",
        locationOfWork: "",
      },
      employmentTerms: {
        typeOfPosition: "",
        startDate: "",
        endDate: "",
        workingTimeType: "",
        workingHours: "",
        workSchedule: "",
      },
      compensations: {
        salaryRangeFrom: 0,
        salaryRangeTo: 0,
        hourlyRate: 0,
        isBonusCommission: false,
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
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
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
        <div className="w-1/2">
          <FormInput
            form={form}
            inputName="jobInformation.ifYesHybrid"
            formLabel="If yes, please specify days in office"
            inputType="text"
          />
        </div>
        <h3>Employment Terms</h3>
        <RadioButton
          form={form}
          inputName="jobInformation.employmentTerms.typeOfPosition"
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
        <div className="flex gap-4">
          <PopupCalendar
            form={form}
            formLabel="Desired Start Date"
            inputName="jobInformation.employmentTerms.startDate"
          />
          <PopupCalendar
            form={form}
            formLabel="Desired End Date"
            inputName="jobInformation.employmentTerms.endDate"
          />
        </div>
        <h3>Working Hours</h3>
        <RadioButton
          form={form}
          inputName="jobInformation.employmentTerms.workingTimeType"
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
        <div className="flex gap-4">
          <FormInput
            form={form}
            inputName="jobInformation.employmentTerms.workingHours"
            formLabel="Please specify hours per days or week"
            inputType="text"
            formDescription="e.g. 37.5 hours/days"
          />
          <FormInput
            form={form}
            inputName="jobInformation.employmentTerms.workSchedule"
            formLabel="Work Schedule"
            inputType="text"
            formDescription="e.g. Mon-Fri, 9am-5pm"
          />
        </div>
        <h3>Compensation & Benefits</h3>
        <div className="flex gap-4 items-start">
          <FormInput
            form={form}
            inputName="jobInformation.compensations.salaryRangeFrom"
            formLabel="Salary Range From £"
            inputType="number"
            formDescription="Annual"
          />
          <FormInput
            form={form}
            inputName="jobInformation.compensations.salaryRangTo"
            formLabel="To £"
            inputType="number"
            formDescription=""
          />
        </div>
        <FormInput
          form={form}
          inputName="jobInformation.compensations.hourlyRate"
          formLabel="Hourly/Daily Rate £"
          inputType="number"
          formDescription="for Temp/Contract"
        />
        <RadioButton
          form={form}
          inputName="jobInformation.compensations.isBonusCommission"
          formLabel="Is there any Bonus/Commission"
          options={[
            {
              _id: "yes",
              name: "Yes",
            },
            {
              _id: "no",
              name: "No",
            },
          ]}
        />
        <div className="w-1/2">
          <FormInput
            form={form}
            inputName="jobInformation.compensations.ifYesBonusCommission"
            formLabel="If yes, please provide details below"
            inputType="text"
          />
        </div>
        <TextArea
          form={form}
          inputName="jobInformation.compensations.keyBenefitsOffered"
          formLabel="Key Benefits Offered"
          formDescription="e.g., Pension scheme, private medical, life insurance, etc."
          maxLength={400}
        />
        <h3>Role & Candidate Profile</h3>
        <TextArea
          form={form}
          inputName="jobInformation.roleAndCandidateProfile.mainResponsibilities"
          formLabel="Main Responsibilities & Duties of the Role"
          formDescription="Please be as detailed as possible"
          maxLength={400}
        />
        <TextArea
          form={form}
          inputName="jobInformation.roleAndCandidateProfile.essentialSkills"
          formLabel="Essential Skills & Experience (Non Negotiable)"
          maxLength={400}
        />
        <TextArea
          form={form}
          inputName="jobInformation.roleAndCandidateProfile.desirableSkills"
          formLabel="Desirable Skills & Experience (Nice to have)"
          maxLength={400}
        />
        <TextArea
          form={form}
          inputName="jobInformation.roleAndCandidateProfile.requiredQualifications"
          formLabel="Required Qualifications / Certifications"
          maxLength={400}
        />
        <footer className="flex w-full gap-4 justify-between">
          <Button className="secondary-btn">Back</Button>
          <Button className="primary-btn">Next</Button>
        </footer>
      </form>
    </Form>
  );
};

export default StepThree;
