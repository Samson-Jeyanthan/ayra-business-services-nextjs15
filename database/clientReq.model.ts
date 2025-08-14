import { model, models, Schema } from "mongoose";

export interface IClientReq {
  userId: Schema.Types.ObjectId;
  companyName: string;
  phoneNo: string;
  message: string;
  status: string;
}

const ClientReqSchema = new Schema<IClientReq>({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  companyName: { type: String, required: true },
  phoneNo: { type: String, required: true },
  message: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["read", "unread", "approved", "rejected"],
    default: "unread",
  },
});

const ClientReq =
  models?.ClientReq || model<IClientReq>("ClientReq", ClientReqSchema);

export default ClientReq;
