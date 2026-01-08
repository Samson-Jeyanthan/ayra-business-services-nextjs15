import { model, models, Schema } from "mongoose";

export interface ICandiRequest {
  userId: Schema.Types.ObjectId;
  address: string;
  phoneNo: string;
  prefferedRole: string;
  prefferedEmploymentStatus: string;
  typeOfWork: string;
}

const CandiRequestSchema = new Schema<ICandiRequest>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    address: { type: String, required: true },
    phoneNo: { type: String, required: true },
    prefferedRole: { type: String, required: true },
    prefferedEmploymentStatus: { type: String, required: true },
    typeOfWork: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const CandiRequest =
  models?.CandiRequest ||
  model<ICandiRequest>("CandiRequest", CandiRequestSchema);

export default CandiRequest;

// candidate request model
