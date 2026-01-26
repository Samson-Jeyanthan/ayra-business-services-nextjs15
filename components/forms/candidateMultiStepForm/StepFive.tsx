"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CandidRegFiveSchema } from "@/lib/validations";
import { Form, FormField } from "@/components/ui/form";
import {
  FormInput,
  MediaInput,
  PopupCalendar,
  RadioButton,
  TextArea,
} from "@/components/inputs";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import { IYesNoOptions } from "@/types/utils.types";
import Required from "@/components/shared/common/Required";
import { ReloadIcon } from "@radix-ui/react-icons";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import { candidateRegStepFiveAction } from "@/lib/actions/candidate.action";
import { getSignedURL } from "@/lib/actions/utils.action";

export const YES_NO_OPTIONS: IYesNoOptions[] = [
  {
    _id: "true",
    name: "Yes",
  },
  {
    _id: "false",
    name: "No",
  },
];

interface IImageMediaProps {
  mediaURL: string;
}

const StepFive = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof CandidRegFiveSchema>>({
    resolver: zodResolver(CandidRegFiveSchema),
    defaultValues: {
      drivingLicenceNo: "",
      drivingLicenseShareCode: "",
      drivingLicense: {
        frontPic: [],
        backPic: [],
      },
      cpcCard: {
        frontPic: [],
        backPic: [],
      },
      digitalDrivingTachographCard: {
        frontPic: [],
        backPic: [],
      },
      allInOne: {
        frontPic: [],
        backPic: [],
      },
      motorIncidents: {
        currentDrivingEndorsement: undefined,
        isHgvPsvCollisionYears5: undefined,
        isSubjectFromTrafficCommissioner: undefined,
        isAppearedBeforeTrafficCommissioner: undefined,
        isPrescribedMedication: undefined,
        isSufferFromDrugs: undefined,
        isIllegalSubstance: undefined,
        reasonForIllegalSubstance: "",
        isRandomDrugTest: undefined,
        reasonForNoRandomDrugTest: "",
        isNeedGlassToDrive: undefined,
        lastEyeTestDate: undefined,
      },
    },
  });

  const [prevFrontDL, setPrevFrontDL] = useState<IImageMediaProps>({
    mediaURL: "",
  });
  const [prevDLBack, setPrevDLBack] = useState<IImageMediaProps>({
    mediaURL: "",
  });
  const [prevFrontCPC, setPrevFrontCPC] = useState<IImageMediaProps>({
    mediaURL: "",
  });
  const [prevBackCPC, setPrevBackCPC] = useState<IImageMediaProps>({
    mediaURL: "",
  });
  const [prevFrontDDTC, setPrevFrontDDTC] = useState<IImageMediaProps>({
    mediaURL: "",
  });
  const [prevBackDDTC, setPrevBackDDTC] = useState<IImageMediaProps>({
    mediaURL: "",
  });
  const [prevFrontAll, setPrevFrontAll] = useState<IImageMediaProps>({
    mediaURL: "",
  });
  const [prevBackAll, setPrevBackAll] = useState<IImageMediaProps>({
    mediaURL: "",
  });

  async function uploadSingleFile(file: File): Promise<string> {
    const signedURLResult = await getSignedURL({
      fileType: file.type, // ✅ correct
    });

    if (signedURLResult.failure !== undefined) {
      throw new Error(signedURLResult.failure);
    }

    const uploadURL = signedURLResult.success;

    const res = await fetch(uploadURL, {
      method: "PUT",
      body: file,
      headers: {
        "Content-Type": file.type,
      },
    });

    if (!res.ok) {
      throw new Error("File upload failed");
    }

    return uploadURL.split("?")[0]; // ✅ clean S3 URL
  }

  async function onSubmit(values: z.infer<typeof CandidRegFiveSchema>) {
    toast.warning("Please wait...", { duration: 10000 });

    startTransition(async () => {
      const postImageURLs = {
        drivingLicense: { frontPic: "", backPic: "" },
        cpcCard: { frontPic: "", backPic: "" },
        digitalDrivingTachographCard: { frontPic: "", backPic: "" },
        allInOne: { frontPic: "", backPic: "" },
      };

      try {
        // 1️⃣ Driving License
        if (values.drivingLicense.frontPic?.length) {
          postImageURLs.drivingLicense.frontPic = await uploadSingleFile(
            values.drivingLicense.frontPic[0]
          );
        }

        if (values.drivingLicense.backPic?.length) {
          postImageURLs.drivingLicense.backPic = await uploadSingleFile(
            values.drivingLicense.backPic[0]
          );
        }

        // 2️⃣ CPC Card
        if (values.cpcCard.frontPic?.length) {
          postImageURLs.cpcCard.frontPic = await uploadSingleFile(
            values.cpcCard.frontPic[0]
          );
        }

        if (values.cpcCard.backPic?.length) {
          postImageURLs.cpcCard.backPic = await uploadSingleFile(
            values.cpcCard.backPic[0]
          );
        }

        // 3️⃣ Digital Tachograph Card
        if (values.digitalDrivingTachographCard.frontPic?.length) {
          postImageURLs.digitalDrivingTachographCard.frontPic =
            await uploadSingleFile(
              values.digitalDrivingTachographCard.frontPic[0]
            );
        }

        if (values.digitalDrivingTachographCard.backPic?.length) {
          postImageURLs.digitalDrivingTachographCard.backPic =
            await uploadSingleFile(
              values.digitalDrivingTachographCard.backPic[0]
            );
        }

        // 4️⃣ All-in-One
        if (values.allInOne.frontPic?.length) {
          postImageURLs.allInOne.frontPic = await uploadSingleFile(
            values.allInOne.frontPic[0]
          );
        }

        if (values.allInOne.backPic?.length) {
          postImageURLs.allInOne.backPic = await uploadSingleFile(
            values.allInOne.backPic[0]
          );
        }
      } catch (error) {
        console.error(error);
        toast.error("Image upload failed");
        return;
      }

      console.log("Uploaded URLs:", postImageURLs);

      const result = await candidateRegStepFiveAction({
        ...values,
        drivingLicense: {
          frontPic: postImageURLs.drivingLicense.frontPic,
          backPic: postImageURLs.drivingLicense.backPic,
        },
        cpcCard: {
          frontPic: postImageURLs.cpcCard.frontPic,
          backPic: postImageURLs.cpcCard.backPic,
        },
        digitalDrivingTachographCard: {
          frontPic: postImageURLs.digitalDrivingTachographCard.frontPic,
          backPic: postImageURLs.digitalDrivingTachographCard.backPic,
        },
        allInOne: {
          frontPic: postImageURLs.allInOne.frontPic,
          backPic: postImageURLs.allInOne.backPic,
        },
      });

      if (result.success) {
        toast.success("Form has been submitted");
        redirect("/candidate-registration/step-six");
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
        <div className="multi-form-wrapper">
          <p>
            Please ensure you provide{" "}
            <span className="form-semibold">CLEAR pictures, </span>
            as it is important we are able to read these documents
          </p>
          <div className="w-full flex gap-4 items-start">
            <FormInput
              form={form}
              inputName="drivingLicenceNo"
              inputType="text"
              formLabel="Driving Licence No"
            />
            <FormInput
              form={form}
              inputName="drivingLicenseShareCode"
              inputType="text"
              formLabel="Driving License Share Code"
              formDescription="You can get these from https://gov.uk/view-driving-licence"
            />
          </div>
          {/* ----------------- Driving License ------------------ */}
          <div className="form-img-input-wrapper">
            <div className="req-wrapper">
              Please upload pictures of the
              <span className="form-semibold">FRONT</span>
              of your
              <span className="form-semibold">Driving Licence</span>
              <Required />
            </div>
            <FormField
              control={form.control}
              name="drivingLicense.frontPic"
              render={({ field }) => (
                <MediaInput
                  fieldChange={field.onChange}
                  previousMedia={prevFrontDL}
                  setPreviousMedia={setPrevFrontDL}
                />
              )}
            />
          </div>
          <div className="form-img-input-wrapper">
            <div className="req-wrapper">
              Please upload pictures of the{" "}
              <span className="form-semibold">BACK</span>
              of your
              <span className="form-semibold">Driving Licence</span>
              <Required />
            </div>
            <FormField
              control={form.control}
              name="drivingLicense.backPic"
              render={({ field }) => (
                <MediaInput
                  fieldChange={field.onChange}
                  previousMedia={prevDLBack}
                  setPreviousMedia={setPrevDLBack}
                />
              )}
            />
          </div>
          {/* --------------------- CPC Card --------------------- */}
          <div className="form-img-input-wrapper">
            <div className="req-wrapper">
              Please upload pictures of the
              <span className="form-semibold">FRONT</span>
              of your
              <span className="form-semibold">CPC card</span>
              <Required />
            </div>
            <FormField
              control={form.control}
              name="cpcCard.frontPic"
              render={({ field }) => (
                <MediaInput
                  fieldChange={field.onChange}
                  previousMedia={prevFrontCPC}
                  setPreviousMedia={setPrevFrontCPC}
                />
              )}
            />
          </div>
          <div className="form-img-input-wrapper">
            <div className="req-wrapper">
              Please upload pictures of the{" "}
              <span className="form-semibold">BACK</span>
              of your
              <span className="form-semibold">CPC card</span>
              <Required />
            </div>
            <FormField
              control={form.control}
              name="cpcCard.backPic"
              render={({ field }) => (
                <MediaInput
                  fieldChange={field.onChange}
                  previousMedia={prevBackCPC}
                  setPreviousMedia={setPrevBackCPC}
                />
              )}
            />
          </div>
          {/* -------------- Digital Driving Tacograph ----------- */}
          <div className="form-img-input-wrapper">
            <div className="req-wrapper">
              Please upload pictures of the{" "}
              <span className="form-semibold"></span>
              FRONT of your
              <span className="form-semibold">
                Digital Driver Tachograph Card
              </span>
              <Required />
            </div>
            <FormField
              control={form.control}
              name="digitalDrivingTachographCard.frontPic"
              render={({ field }) => (
                <MediaInput
                  fieldChange={field.onChange}
                  previousMedia={prevFrontDDTC}
                  setPreviousMedia={setPrevFrontDDTC}
                />
              )}
            />
          </div>
          <div className="form-img-input-wrapper">
            <div className="req-wrapper">
              Please upload pictures of the{" "}
              <span className="form-semibold">BACK</span>
              of your
              <span className="form-semibold">
                Digital Driver Tachograph Card
              </span>
              <Required />
            </div>
            <FormField
              control={form.control}
              name="digitalDrivingTachographCard.backPic"
              render={({ field }) => (
                <MediaInput
                  fieldChange={field.onChange}
                  previousMedia={prevBackDDTC}
                  setPreviousMedia={setPrevBackDDTC}
                />
              )}
            />
          </div>
          {/* --------------------- All in One ------------------- */}
          <div className="form-img-input-wrapper">
            <div className="req-wrapper">
              Please upload ONE picture showing the{" "}
              <span className="form-semibold">FRONT</span>
              of your driving cards
              <span className="form-semibold">
                (DRIVING LICENCE, CPC & TACHOGRAPH)
              </span>
              all in one picture
              <Required />
            </div>
            <FormField
              control={form.control}
              name="allInOne.frontPic"
              render={({ field }) => (
                <MediaInput
                  fieldChange={field.onChange}
                  previousMedia={prevFrontAll}
                  setPreviousMedia={setPrevFrontAll}
                />
              )}
            />
          </div>
          <div className="form-img-input-wrapper">
            <div className="req-wrapper w-[95%]">
              Please upload ONE picture showing the{" "}
              <span className="form-semibold">BACK</span>
              of your driving cards
              <span className="form-semibold">
                {" "}
                (DRIVING LICENCE, CPC & TACHOGRAPH)
              </span>
              all in one picture
              <Required />
            </div>
            <FormField
              control={form.control}
              name="allInOne.backPic"
              render={({ field }) => (
                <MediaInput
                  fieldChange={field.onChange}
                  previousMedia={prevBackAll}
                  setPreviousMedia={setPrevBackAll}
                />
              )}
            />
          </div>
          <h3 className="text-2xl font-bold w-[80%] pb-4 border-b border-solid border-b-gray-300">
            Motor Incidents
          </h3>
          <div className="w-[80%]">
            <TextArea
              form={form}
              inputName="motorIncidents.currentDrivingEndorsement"
              formLabel="Detail any current Driving Endorsement and Points"
              maxLength={400}
            />
          </div>
          <RadioButton
            form={form}
            inputName="motorIncidents.isHgvPsvCollisionYears5"
            formLabel="Have you been involved in anyb motor vehicle collisions whilst driving a HGV or PSV in the last 5 years?"
            options={YES_NO_OPTIONS}
          />
          <RadioButton
            form={form}
            inputName="motorIncidents.isSubjectFromTrafficCommissioner"
            formLabel="Are you currently subject to any direction from a Traffic Commissioner e.g.Suspension / Revocation of your vocational HGV entitlement?"
            options={YES_NO_OPTIONS}
          />
          <RadioButton
            form={form}
            inputName="motorIncidents.isAppearedBeforeTrafficCommissioner"
            formLabel="Have you ever appeared before a Traffic Commissioner at a driver conduct hearing regarding any matter and had action taken against your vocational HGV entitlement?"
            options={YES_NO_OPTIONS}
          />
          <RadioButton
            form={form}
            inputName="motorIncidents.isPrescribedMedication"
            formLabel="Are you taking any prescribed or other medication which has the capacity to affect your work and/or driving?"
            options={YES_NO_OPTIONS}
          />
          <RadioButton
            form={form}
            inputName="motorIncidents.isSufferFromDrugs"
            formLabel="Do you currently suffer from, or within the last 12 months, have you suffered from, dependence on alcohol or drugs of any king (including prescription drugs)?"
            options={YES_NO_OPTIONS}
          />
          <RadioButton
            form={form}
            inputName="motorIncidents.isIllegalSubstance"
            formLabel="Have you taken any illegal substances (drugs) in the last 6 months?"
            options={YES_NO_OPTIONS}
          />
          <div className="w-[80%]">
            <TextArea
              form={form}
              inputName="motorIncidents.reasonForIllegalSubstance"
              formLabel="If you answered YES to any of the above, please provide details"
              maxLength={400}
            />
          </div>
          <RadioButton
            form={form}
            inputName="motorIncidents.isRandomDrugTest"
            formLabel="Do you agree to random drug and alcohol testing if required by either Resolute Logistics Recruitment or our clients if required?"
            options={YES_NO_OPTIONS}
          />
          <div className="w-[80%]">
            <TextArea
              form={form}
              inputName="motorIncidents.reasonForNoRandomDrugTest"
              formLabel="If you answered NO to the above, please give reason as to why"
              maxLength={400}
            />
          </div>
          <RadioButton
            form={form}
            inputName="motorIncidents.isNeedGlassToDrive"
            formLabel="Do you need to wear glasses to drive?"
            options={YES_NO_OPTIONS}
          />
          <div className="w-1/2 pr-4">
            <PopupCalendar
              form={form}
              inputName="motorIncidents.lastEyeTestDate"
              formLabel="Date of Last Eye Test"
            />
          </div>
        </div>
        <footer className="flex w-full gap-4 justify-between">
          <Button
            className="secondary-btn"
            onClick={() => redirect("/candidate-registration/step-four")}
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

export default StepFive;
