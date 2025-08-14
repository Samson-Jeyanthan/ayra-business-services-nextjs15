import { model, models, Schema } from "mongoose";

export interface ICandidateReq {
  userId: Schema.Types.ObjectId;
  address: string;
  prefRole: string;
  prefEmpStatus: string;
  typeOfWork: string;
  phoneNo: string;
  status: string;
}

const CandidateReqSchema = new Schema<ICandidateReq>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
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

const CandidateReq =
  models?.CandidateReq ||
  model<ICandidateReq>("CandidateReq", CandidateReqSchema);

export default CandidateReq;
