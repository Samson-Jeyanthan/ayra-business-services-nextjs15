import { model, models, Schema } from "mongoose";

export interface ICandidate {
  address: string;
  prefRole: string;
  prefEmpStatus: string;
  typeOfWork: string;
  phoneNo: string;
  status: string;
}

const CandidateSchema = new Schema(
  {
    address: { type: String, required: true },
    prefRole: { type: String, required: true },
    prefEmpStatus: { type: String, required: true },
    typeOfWork: { type: String, required: true },
    phoneNo: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ["read", "unread", "approved", "rejected"],
      default: "unread",
    },
  },
  {
    timestamps: true,
  }
);

const Candidate =
  models?.Candidate || model<ICandidate>("Candidate", CandidateSchema);

export default Candidate;
