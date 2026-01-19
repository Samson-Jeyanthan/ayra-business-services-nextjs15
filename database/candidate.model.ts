import { model, models, Schema } from "mongoose";
import { candStepOneSchema } from "./schemas/candStepOne";
import { candStepTwoSchema } from "./schemas/candStepTwo";
import { candStepThreeSchema } from "./schemas/candStepThree";
import { candStepFourSchema } from "./schemas/candStepFour";
import { candStepFiveSchema } from "./schemas/candStepFive";
import { candStepSixSchema } from "./schemas/candStepSix.schema";
import { candStepSevenSchema } from "./schemas/candStepSeven.schema";
import { candStepEightSchema } from "./schemas/candStepEight.schema";
import { candStepNineSchema } from "./schemas/candStepNine.schema";

const CandidateSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  candidateReqId: {
    type: Schema.Types.ObjectId,
    ref: "CandidateReq",
  },
  // multistep forms
  stepOne: candStepOneSchema,
  stepTwo: candStepTwoSchema,
  stepThree: candStepThreeSchema,
  stepFour: candStepFourSchema,
  stepFive: candStepFiveSchema,
  stepSix: candStepSixSchema,
  stepSeven: candStepSevenSchema,
  stepEight: candStepEightSchema,
  stepNine: candStepNineSchema,
  status: {
    type: String,
    required: true,
    enum: ["read", "unread", "approved", "rejected"],
    default: "unread",
  },
  completedSteps: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Candidate = models?.Candidate || model("Candidate", CandidateSchema);

export default Candidate;
