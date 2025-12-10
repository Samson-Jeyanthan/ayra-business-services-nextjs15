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
import { useState } from "react";
import { IImageMediaProps, IYesNoOptions } from "@/types/utils.types";
import Required from "@/components/shared/common/Required";

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

const StepFive = () => {
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
        currentDrivingEndorsement: "",
        hgvPsvCollisionYears5: "",
        subjectFromTrafficCommissioner: "",
        appearedBeforeTrafficCommissioner: "",
        prescribedMedication: "",
        sufferFromDrugs: "",
        illegalSubstance: "",
        reasonForIllegalSubstance: "",
        randomDrugTest: "",
        reasonForNoRandomDrugTest: "",
        needGlassToDrive: "",
        lastEyeTestDate: new Date(),
      },
    },
  });

  const [previousMedia, setPreviousMedia] = useState<IImageMediaProps>({
    mediaURL: "",
  });

  async function onSubmit(values: z.infer<typeof CandidRegFiveSchema>) {
    console.log(values);
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
                  previousMedia={previousMedia}
                  setPreviousMedia={setPreviousMedia}
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
                  previousMedia={previousMedia}
                  setPreviousMedia={setPreviousMedia}
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
                  previousMedia={previousMedia}
                  setPreviousMedia={setPreviousMedia}
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
                  previousMedia={previousMedia}
                  setPreviousMedia={setPreviousMedia}
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
                  previousMedia={previousMedia}
                  setPreviousMedia={setPreviousMedia}
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
                  previousMedia={previousMedia}
                  setPreviousMedia={setPreviousMedia}
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
                  previousMedia={previousMedia}
                  setPreviousMedia={setPreviousMedia}
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
                  previousMedia={previousMedia}
                  setPreviousMedia={setPreviousMedia}
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
              inputName="currentDrivingEndorsement"
              formLabel="Detail any current Driving Endorsement and Points"
              maxLength={400}
            />
          </div>
          <RadioButton
            form={form}
            inputName="hgvPsvCollisionYears5"
            formLabel="Have you been involved in anyb motor vehicle collisions whilst driving a HGV or PSV in the last 5 years?"
            options={YES_NO_OPTIONS}
          />
          <RadioButton
            form={form}
            inputName="subjectFromTrafficCommissioner"
            formLabel="Are you currently subject to any direction from a Traffic Commissioner e.g.Suspension / Revocation of your vocational HGV entitlement?"
            options={YES_NO_OPTIONS}
          />
          <RadioButton
            form={form}
            inputName="motorIncidents.appearedBeforeTrafficCommissioner"
            formLabel="Have you ever appeared before a Traffic Commissioner at a driver conduct hearing regarding any matter and had action taken against your vocational HGV entitlement?"
            options={YES_NO_OPTIONS}
          />
          <RadioButton
            form={form}
            inputName="motorIncidents.prescribedMedication"
            formLabel="Are you taking any prescribed or other medication which has the capacity to affect your work and/or driving?"
            options={YES_NO_OPTIONS}
          />
          <RadioButton
            form={form}
            inputName="motorIncidents.sufferFromDrugs"
            formLabel="Do you currently suffer from, or within the last 12 months, have you suffered from, dependence on alcohol or drugs of any king (including prescription drugs)?"
            options={YES_NO_OPTIONS}
          />
          <RadioButton
            form={form}
            inputName="motorIncidents.illegalSubstance"
            formLabel="Have you taken any illegal substances (drugs) in the last 6 months?"
            options={YES_NO_OPTIONS}
          />
          <div className="w-[80%]">
            <TextArea
              form={form}
              inputName="motorIncidents.currentDrivingEndorsement"
              formLabel="If you answered YES to any of the above, please provide details"
              maxLength={400}
            />
          </div>
          <RadioButton
            form={form}
            inputName="motorIncidents.randomDrugTest"
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
            inputName="motorIncidents.needGlassToDrive"
            formLabel="Do you need to wear glasses to drive?"
            options={YES_NO_OPTIONS}
          />
          <div className="w-1/2 pr-4">
            <PopupCalendar
              form={form}
              inputName="lastEyeTestDate"
              formLabel="Date of Last Eye Test"
            />
          </div>
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

export default StepFive;
