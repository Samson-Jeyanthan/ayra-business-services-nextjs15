import mongoose from "mongoose";
import { dbConnect, dbDisconnect } from "./mongoose.js";

const { model, models, Schema } = mongoose;

// ------------------------ user model ------------------------------

const UserSchema = new Schema(
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

const User = models.User || model("User", UserSchema);

export default User;

// ------------------------ migration function ----------------------------
// inserting username for user model

const migrateUsers = async () => {
  try {
    await dbConnect();

    const result = await User.updateMany(
      { username: { $exists: false } }, // filter
      {
        $set: {
          username: "temp_user",
        },
      }
    );

    console.log("Migration successful:", {
      matched: result.matchedCount,
      modified: result.modifiedCount,
    });
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    await dbDisconnect();
  }
};

migrateUsers();
