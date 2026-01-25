import { Schema } from "mongoose";

// step 07 - preference information

export const candStepSevenSchema = new Schema(
  {
    data: {
      preferences: {
        type: [
          {
            adrTanks: { type: Boolean },
            adrPackages: { type: Boolean },
            bullTanker: { type: Boolean },
            carTransporters: { type: Boolean },
            container: { type: Boolean },
            curtainSideOrTautliner: { type: Boolean },
            doubleDecker: { type: Boolean },
            flatBedOrLowLoader: { type: Boolean },
            freezer: { type: Boolean },
            fridge: { type: Boolean },
            gravityPumpOrCompressor: { type: Boolean },
            handBall: { type: Boolean },
            haibGrab: { type: Boolean },
            hookLift: { type: Boolean },
            leftHandDrive: { type: Boolean },
            moffat: { type: Boolean },
            multiDrop: { type: Boolean },
            nonHazTankers: { type: Boolean },
            pallestised: { type: Boolean },
            pdpPetrol: { type: Boolean },
            rollCages: { type: Boolean },
            ropingAndSheeting: { type: Boolean },
            shunting: { type: Boolean },
            bitumen: { type: Boolean },
            tailLift: { type: Boolean },
            tipper: { type: Boolean },
            tramping: { type: Boolean },
            trunking: { type: Boolean },
            tug: { type: Boolean },
            vaccumTankers: { type: Boolean },
            wagAndDrag: { type: Boolean },
            walkingFloors: { type: Boolean },
            preferredShiftPatterns: {
              days: { type: Boolean },
              nights: { type: Boolean },
              nightsOut: { type: Boolean },
              tramper: { type: Boolean },
            },
          },
        ],
        validate: {
          validator: (v: unknown[]) => v.length <= 1,
          message: "Only one preference object is allowed",
        },
        required: true,
      },

      preferredStartedTimeWindow: {
        type: String,
        required: true,
        trim: true,
      },
    },

    isCompleted: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },

    reviewedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    reviewedAt: {
      type: Date,
      default: null,
    },

    rejectionReason: {
      type: String,
      default: null,
    },
  },
  { _id: false }
);
