"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CandidRegFiveSchema } from "@/lib/validations";
import { Form, FormField } from "@/components/ui/form";
import { FormInput, MediaInput } from "@/components/inputs";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IImageMediaProps } from "@/types/utils.types";
import Required from "@/components/shared/common/Required";

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
        hgvPsvCollisionYears5: false,
        subjectFromTrafficCommissioner: false,
        appearedBeforeTrafficCommissioner: false,
        prescribedMedication: false,
        sufferFromDrugs: false,
        illegalSubstance: false,
        reasonForIllegalSubstance: "",
        needGlassToDrive: "",
        lastEyeTestDate: "",
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
          {/* ------------------ Driving License ------------------- */}
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
          {/* ---------------- Digital Driving Tacograph ---------------- */}
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
          {/* --------------------- All in One --------------------- */}
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
        </div>
        <footer className="flex w-full gap-4 justify-between">
          <Button className="secondary-btn">Back</Button>
          <Button className="primary-btn">Next</Button>
        </footer>
      </form>
    </Form>
  );
};

export default StepFive;
