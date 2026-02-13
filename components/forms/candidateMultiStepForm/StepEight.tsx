"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CandidRegEightSchema } from "@/lib/validations";
import { Form } from "@/components/ui/form";
import { CheckBox } from "@/components/inputs";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import { candidateRegStepEightAction } from "@/lib/actions/candidate.action";
import { useTransition } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

const StepEight = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof CandidRegEightSchema>>({
    resolver: zodResolver(CandidRegEightSchema),
    defaultValues: {
      drivingLicenseInfo: false,
      payInfo: false,
      contactInfo: false,
      medicalInfo: false,
      criminalConvictionsInfo: false,
      rightToWorkInfo: false,
    },
  });

  async function onSubmit(values: z.infer<typeof CandidRegEightSchema>) {
    startTransition(async () => {
      const result = await candidateRegStepEightAction(values);
      console.log(result, "results on server side");
      if (result.success) {
        toast.success("Form has been submitted");
        redirect("/candidate-registration/step-nine");
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
        <p className="text-sm md:text-base">
          Adapt Logistics Recruitment provides work-finding services to its
          clients and work-seekers. We must process personal data (including
          sensitive personal data) so that we can provide these services. - in
          doing so, we act as a data controller. This is why we have asked for
          your personal data on this form. When we process your personal data,
          we must do so in accordance with data protection laws. Those laws
          require us to give you a Privacy Statement to explain how we manage
          your personal data. Permission for Resolute Logistics Recruitment to
          state my information with Clients and other relavant parties
          (including, but not limited to: Insurers, Police and Local
          Authorities) I will be working with:
        </p>
        <CheckBox
          form={form}
          checkboxLabel="Permission Granted"
          formLabel="Driving License Information"
          inputName="drivingLicenseInfo"
          formDescription="Including but not limited to: Driving License Photos, Driving License Check Documents, Photos of Other Licenses"
        />
        <CheckBox
          form={form}
          checkboxLabel="Permission Granted"
          formLabel="Pay Information"
          inputName="payInfo"
          formDescription="Including but not limited to: Payslips, National Insurance Information, Hourly Pay Information"
        />
        <CheckBox
          form={form}
          checkboxLabel="Permission Granted"
          formLabel="Conatact Information"
          inputName="contactInfo"
          formDescription="Including but not limited to: Full Address, Full Name, Email and Phone Number"
        />
        <CheckBox
          form={form}
          checkboxLabel="Permission Granted"
          formLabel="Medical Information"
          inputName="medicalInfo"
          formDescription="Including but not limited to: Any Medical Information you have declared. Any adjustments required, Any injuries you may or will have. This includes sensitive personal data"
        />
        <CheckBox
          form={form}
          checkboxLabel="Permission Granted"
          formLabel="Criminal Convictions Information"
          inputName="criminalConvictionsInfo"
          formDescription="Including but not limited to: Any Information you have provided us about convictions you have. DBS Check Information, Any information we become aware of during your contact with us. This includes sensitive personal data."
        />
        <CheckBox
          form={form}
          checkboxLabel="Permission Granted"
          formLabel="Right to Work Information"
          inputName="rightToWorkInfo"
          formDescription="Including but not limited to: Full Right to Work Check Documents, Passport, Right to Work Expiry. This includes sensitive personal data."
        />
        <p className="text-sm md:text-base">
          Adapt Logistics recruitment is committed to a policy of equal
          oppurtunities for all work seekers and shall adhere to such a policy
          all time and will recieve on an on-going basis on all aspects of
          recruitment to avoid unlawful or undesirable discrimination. We will
          treat everyone equally irrespective of sex, sexual orientation, gender
          reassignment, marital or civil partnership status, age, disability,
          colour, race, nationality, ethnic or national origin, religion or
          belief, political beliefs or membership or non-membership of a trade
          union and we place an obligation upon all staff to respect and act in
          accordance with the policy. Resolute Logistics Recruitment shall not
          discriminate unlawfully when deciding which candidate/temporary worker
          is submitted for a vacancy or assignment, or in any terms of
          employment or terms of engagement for temporary workers. Resolute
          Logistics Recruitment will ensure that each candidate is assessed only
          in accordance with the candidate&apos;s merits, qualification and
          ability to perform the relevant duties required by the particular
          vacancy.
        </p>
        <footer className="flex w-full gap-4 justify-between">
          <Button
            type="button"
            className="secondary-btn"
            onClick={() => redirect("/candidate-registration/step-seven")}
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

export default StepEight;
