import { model, models, Schema } from "mongoose";

export interface IClient {
  companyName: string;
  phoneNo: string;
  message: string;
  status: string;
}

const ClientSchema = new Schema({
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

const Client = models?.Client || model<IClient>("Client", ClientSchema);

export default Client;
