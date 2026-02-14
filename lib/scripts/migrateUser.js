import mongoose from "mongoose";
import { dbConnect, dbDisconnect } from "./mongoose.js";

const { model, models, Schema } = mongoose;

// ------------------------ user model ------------------------------

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
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

    // 🔥 Drop unique index on username
    await User.collection.dropIndex("username_1");

    console.log("Migration successful: username unique constraint removed");
  } catch (error) {
    // If index does not exist, ignore error
    if (error.codeName === "IndexNotFound") {
      console.log("Index already removed");
    } else {
      console.error("Migration failed:", error);
    }
  } finally {
    await dbDisconnect();
  }
};

migrateUsers();
