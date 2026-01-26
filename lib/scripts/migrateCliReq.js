import mongoose from "mongoose";
import { dbConnect, dbDisconnect } from "./mongoose.js";

const { model, models, Schema } = mongoose;

// ------------------------ cliRequest model ------------------------------

const CliRequestSchema = new Schema(
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

const CliRequest = models.CliRequest || model("CliRequest", CliRequestSchema);

export default CliRequest;

// ------------------------ migration function ----------------------------

const migrateCliRequests = async () => {
  try {
    await dbConnect();

    const result = await CliRequest.updateMany(
      { phoneNo: { $exists: false } },
      { $set: { phoneNo: "N/A" } }
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

migrateCliRequests();
