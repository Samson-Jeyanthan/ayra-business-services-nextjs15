import { Schema } from "mongoose";

// step - 05 - agreement & authourization

export const cliStepFiveSchema = new Schema(
  {
    authorizedPersonName: { type: String, required: true },
    jobTitle: { type: String, required: true },
    signature: { type: String, required: true },
    date: { type: String, required: true },
  },
  { _id: false }
);
