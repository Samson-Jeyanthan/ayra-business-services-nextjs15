import { model, models, Schema } from "mongoose";

export interface IUser {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userType: string;
  status: string;
}

export interface IUserDoc extends IUser, Document {
  _id: string | undefined;
}
const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    userType: {
      type: String,
      required: true,
      enum: ["client", "candidate", "admin", "superadmin"],
    },
    status: {
      type: String,
      required: true,
      enum: ["pending", "rejected", "signedUp", "registered", "removed"],
    },
  },
  {
    timestamps: true,
  }
);

const User = models?.User || model<IUser>("User", UserSchema);

export default User;
