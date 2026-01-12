import { Schema } from "mongoose";

// step 07 - pay information

export const candStepSevenSchema = new Schema(
  {
    adrTanks: Boolean,
    adrPackages: Boolean,
    bullTanker: Boolean,
    carTransporters: Boolean,
    container: Boolean,
    curtainSideOrTautliner: Boolean,
    doubleDecker: Boolean,
    flatBedOrLowLoader: Boolean,
    freezer: Boolean,
    fridge: Boolean,
    gravityPumpOrCompressor: Boolean,
    handBall: Boolean,
    haibGrab: Boolean,
    hookLift: Boolean,
    leftHandDrive: Boolean,
    moffat: Boolean,
    multiDrop: Boolean,
    nonHazTankers: Boolean,
    pallestised: Boolean,
    pdpPetrol: Boolean,
    rollCages: Boolean,
    ropingAndSheeting: Boolean,
    shunting: Boolean,
    bitumen: Boolean,
    tailLift: Boolean,
    tipper: Boolean,
    tramping: Boolean,
    trunking: Boolean,
    tug: Boolean,
    vaccumTankers: Boolean,
    wagAndDrag: Boolean,
    walkingFloors: Boolean,
    preferredShiftPatterns: {
      days: Boolean,
      nights: Boolean,
      nightsOut: Boolean,
      tramper: Boolean,
    },
    preferredStartedTimeWindow: Boolean,
  },
  { _id: false }
);
