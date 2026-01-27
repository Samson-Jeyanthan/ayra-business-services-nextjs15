"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { CandidRegSevenSchema } from "@/lib/validations";
import { Form } from "@/components/ui/form";
import { SwitchButton, TimeInput } from "@/components/inputs";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useTransition } from "react";
import { candidateRegStepSevenAction } from "@/lib/actions/candidate.action";
import { toast } from "sonner";

const CANDIDATE_PREFERENCES_STEP_SEVEN = {
  jobPrefs: {
    adrTanks: false,
    adrPackages: false,
    bullTanker: false,
    carTransporters: false,
    container: false,
    curtainSideOrTautliner: false,
    doubleDecker: false,
    flatBedOrLowLoader: false,
    freezer: false,
    fridge: false,
    gravityPumpOrCompressor: false,
    handBall: false,
    haibGrab: false,
    hookLift: false,
    leftHandDrive: false,
    moffat: false,
    multiDrop: false,
    nonHazTankers: false,
    pallestised: false,
    pdpPetrol: false,
    rollCages: false,
    ropingAndSheeting: false,
    shunting: false,
    bitumen: false,
    tailLift: false,
    tipper: false,
    tramping: false,
    trunking: false,
    tug: false,
    vaccumTankers: false,
    wagAndDrag: false,
    walkingFloors: false,
  },
  preferredShiftPatterns: {
    days: false,
    nights: false,
    nightsOut: false,
    tramper: false,
  },
};

const PREFERENCE_SWITCHES = [
  { label: "ADR Tanks", name: "jobPrefs.adrTanks" },
  { label: "ADR Packages", name: "jobPrefs.adrPackages" },
  { label: "Bull Tanker", name: "jobPrefs.bullTanker" },
  { label: "Car Transporters", name: "jobPrefs.carTransporters" },
  { label: "Container", name: "jobPrefs.container" },
  {
    label: "Curtain Side / Tautliner",
    name: "jobPrefs.curtainSideOrTautliner",
  },
  { label: "Double Decker", name: "jobPrefs.doubleDecker" },
  { label: "Flatbed / Low Loader", name: "jobPrefs.flatBedOrLowLoader" },
  { label: "Freezer", name: "jobPrefs.freezer" },
  { label: "Fridge", name: "jobPrefs.fridge" },
  {
    label: "Gravity Pump / Compressor",
    name: "jobPrefs.gravityPumpOrCompressor",
  },
  { label: "Hand Ball", name: "jobPrefs.handBall" },
  { label: "HIAB / Grab", name: "jobPrefs.haibGrab" },
  { label: "Hook Lift", name: "jobPrefs.hookLift" },
  { label: "Left Hand Drive", name: "jobPrefs.leftHandDrive" },
  { label: "Moffat", name: "jobPrefs.moffat" },
  { label: "Multi Drop", name: "jobPrefs.multiDrop" },
  { label: "Non-Haz Tankers", name: "jobPrefs.nonHazTankers" },
  { label: "Pallestised", name: "jobPrefs.pallestised" },
  { label: "PDP Petrol", name: "jobPrefs.pdpPetrol" },
  { label: "Roll Cages", name: "jobPrefs.rollCages" },
  { label: "Roping & Sheeting", name: "jobPrefs.ropingAndSheeting" },
  { label: "Shunting", name: "jobPrefs.shunting" },
  { label: "Bitumen", name: "jobPrefs.bitumen" },
  { label: "Tail Lift", name: "jobPrefs.tailLift" },
  { label: "Tipper", name: "jobPrefs.tipper" },
  { label: "Tramping", name: "jobPrefs.tramping" },
  { label: "Trunking", name: "jobPrefs.trunking" },
  { label: "Tug", name: "jobPrefs.tug" },
  { label: "Vacuum Tankers", name: "jobPrefs.vaccumTankers" },
  { label: "Wag & Drag", name: "jobPrefs.wagAndDrag" },
  { label: "Walking Floors", name: "jobPrefs.walkingFloors" },

  // --- Nested shift patterns ---
  { label: "Shift Pattern • Days", name: "preferredShiftPatterns.days" },
  { label: "Shift Pattern • Nights", name: "preferredShiftPatterns.nights" },
  {
    label: "Shift Pattern • Nights Out",
    name: "preferredShiftPatterns.nightsOut",
  },
  { label: "Shift Pattern • Tramper", name: "preferredShiftPatterns.tramper" },
];

const StepSeven = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof CandidRegSevenSchema>>({
    resolver: zodResolver(CandidRegSevenSchema),
    defaultValues: {
      preferences: [CANDIDATE_PREFERENCES_STEP_SEVEN],
      preferredStartedTimeWindow: "10:00:00",
    },
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: "preferences", // the form root is an array
  });

  async function onSubmit(values: z.infer<typeof CandidRegSevenSchema>) {
    startTransition(async () => {
      const result = await candidateRegStepSevenAction(values);
      console.log(result, "results on server side");
      if (result.success) {
        toast.success("Form has been submitted");
        redirect("/candidate-registration/step-eight");
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
        <h3>
          TICK EACH box you are qualified are experienced in, and would be
          willing to do
        </h3>

        {fields.map((field, fieldIndex) => (
          <div key={field.id} className="flex flex-col gap-6">
            {/* Render ALL normal preferences first */}
            {PREFERENCE_SWITCHES.slice(0, PREFERENCE_SWITCHES.length - 4).map(
              (item) => (
                <SwitchButton
                  key={item.name}
                  form={form}
                  formLabel={item.label}
                  inputName={`preferences.${fieldIndex}.${item.name}`}
                />
              )
            )}

            {form.formState.errors.preferences?.[0]?.jobPrefs?.message && (
              <p className="text-red-600 text-xs">
                {form.formState.errors.preferences[0].jobPrefs.message}
              </p>
            )}

            {/* Preferred Shift Pattern Section */}
            <div className="mt-4 flex flex-col gap-4">
              <h3 className="font-semibold text-sm mb-2">
                Preferred Shift Patterns
              </h3>

              {PREFERENCE_SWITCHES.slice(-4).map((item) => (
                <SwitchButton
                  key={item.name}
                  form={form}
                  formLabel={item.label}
                  inputName={`preferences.${fieldIndex}.${item.name}`}
                />
              ))}
            </div>
          </div>
        ))}

        {form.formState.errors.preferences?.[0]?.preferredShiftPatterns
          ?.message && (
          <p className="text-red-600 text-xs">
            {
              form.formState.errors.preferences[0].preferredShiftPatterns
                .message
            }
          </p>
        )}

        <div className="w-1/2">
          <TimeInput
            form={form}
            inputName="preferredStartedTimeWindow"
            inputType="time"
            formLabel="Preferred Start Time Window"
          />
        </div>

        <footer className="flex w-full gap-4 justify-between">
          <Button
            type="button"
            className="secondary-btn"
            onClick={() => redirect("/candidate-registration/step-six")}
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

export default StepSeven;
