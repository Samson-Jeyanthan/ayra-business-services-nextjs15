"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { FormInput, RadioButton, SwitchButton } from "@/components/inputs";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { CandidRegNineSchema } from "@/lib/validations";
import Required from "@/components/shared/common/Required";

const StepNine = () => {
  const form = useForm<z.infer<typeof CandidRegNineSchema>>({
    resolver: zodResolver(CandidRegNineSchema),
    defaultValues: {
      nationalInsuranceNo: "",
      sex: "",
      p45File: [],
      employeeStatus: "",
      studentLoans: {
        dontHaveLoan: false,
        haveLoan: false,
        havePlanOneLoan: false,
        havePlanTwoLoan: false,
        havePlanFourLoan: false,
        havePostgraduateLoan: false,
      },
    },
  });

  async function onSubmit(values: z.infer<typeof CandidRegNineSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <FormInput
          form={form}
          inputName="nationalInsuranceNo"
          inputType="text"
          formLabel="National Insurance Number"
        />
        <RadioButton
          form={form}
          inputName="sex"
          formLabel="Sex"
          options={[
            { _id: "male", name: "Male" },
            { _id: "female", name: "Female" },
          ]}
        />
        <RadioButton
          form={form}
          inputName="employeeStatus"
          formLabel="Employee Status"
          options={[
            {
              _id: "thisIsYourFirstJob",
              name: "A- THIS IS YOUR FIRST JOB since start of tax year abd you have not been receiving taxable jobseeker's Allowance, Employment and Support Allowance, taxable Incapacity Benefit, State or Occupational pension.",
            },
            {
              _id: "thisISNowYourOnlyJob",
              name: "B- THIS IS NOW YOUR ONLY JOB but since start of tax year they have had another job, or received taxable jobseeker's Allowance, Employment and Support Allowance or taxable Incapacity Benefit.",
            },
            {
              _id: "youHaveAnotherJob",
              name: "C- AS WELL AS THIS JOB, YOU HAVE ANOTHER JOB or you receive State or Occupational pension.",
            },
          ]}
        />
        <div className="flex flex-col gap-4 mt-1">
          <div className="text-sm font-semibold req-wrapper">
            Student Loans
            <Required />
          </div>
          <SwitchButton
            form={form}
            formLabel="You do not have a student loan"
            inputName="studentLoans.dontHaveLoan"
          />
          <SwitchButton
            form={form}
            formLabel="You have a student loan, BUT are still studying, finished during this tax year, have repaid your loan in full or are making direct payments to the Student Loans Company"
            inputName="studentLoans.haveLoan"
          />
          <SwitchButton
            form={form}
            formLabel="You have a Plan 1 Student Loan"
            inputName="studentLoans.havePlanOneLoan"
          />
          <SwitchButton
            form={form}
            formLabel="You have a Plan 2 Student Loan"
            inputName="studentLoans.havePlanTwoLoan"
          />
          <SwitchButton
            form={form}
            formLabel="You have a Plan 4 Student Loan"
            inputName="studentLoans.havePlanFourLoan"
          />
          <SwitchButton
            form={form}
            formLabel="You have a Postgraduate Loan"
            inputName="studentLoans.havePostgraduateLoan"
          />
          <p>Please tick all that Apply</p>
        </div>
        <footer className="flex w-full gap-4 justify-between">
          <Button className="secondary-btn">Back</Button>
          <Button className="primary-btn" type="submit">
            Next
          </Button>
        </footer>
      </form>
    </Form>
  );
};

export default StepNine;
