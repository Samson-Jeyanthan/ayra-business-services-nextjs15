import { model, models, Schema } from "mongoose";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  userType: string;
}

const UserSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    userType: {
      type: String,
      required: true,
      enum: ["client", "canditate", "admin", "superadmin"],
    },
  },
  {
    timestamps: true,
  }
);

const User = models?.User || model<IUser>("User", UserSchema);

export default User;
