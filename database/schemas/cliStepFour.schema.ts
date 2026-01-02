import { Schema } from "mongoose";

// step 04 - recruitment process

export const cliStepFourSchema = new Schema(
  {
    intendedInterviewProcess: { type: String, required: true },
    deadlineForCandidate: { type: String, required: true },
  },
  { _id: false }
);
