import { model, models, Schema } from "mongoose";

export interface ICliRequest {
  userId: Schema.Types.ObjectId;
  companyName: string;
  phoneNo: string;
  message: string;
}

const CliRequestSchema = new Schema<ICliRequest>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    companyName: { type: String, required: true },
    phoneNo: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const CliRequest =
  models?.CliRequest || model<ICliRequest>("CliRequest", CliRequestSchema);

export default CliRequest;

// client request model
