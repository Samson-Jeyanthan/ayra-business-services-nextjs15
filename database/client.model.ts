import { cliStepOneSchema } from "./schemas/cliStepOne.schema";
import { model, models, Schema } from "mongoose";
import { cliStepThreeSchema } from "./schemas/cliStepThree.schema";
import { cliStepTwoSchema } from "./schemas/cliStepTwo.schema";
import { cliStepFourSchema } from "./schemas/cliStepFour.schema";
import { cliStepFiveSchema } from "./schemas/cliStepFive.schema";

const ClientSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    clientReqId: { type: Schema.Types.ObjectId, ref: "ClientReq" },

    // multistep forms
    stepOne: cliStepOneSchema,
    stepTwo: cliStepTwoSchema,
    stepThree: cliStepThreeSchema,
    stepFour: cliStepFourSchema,
    stepFive: cliStepFiveSchema,

    completedSteps: { type: Number, default: 0 },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

const Client = models?.Client || model("Client", ClientSchema);

export default Client;
