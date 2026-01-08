import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import mongoose from "mongoose";
import logger from "./logger.js";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

// Cache connection to avoid reconnection
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

// Connect to database
const dbConnect = async () => {
  if (cached.conn) {
    logger.info("Reusing existing database connection");
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "ayra_business_services",
      })
      .then((mongooseInstance) => {
        logger.info("Connected to MongoDB");
        return mongooseInstance;
      })
      .catch((error) => {
        logger.error("Error connecting to MongoDB:", error);
        throw error;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

// 🔌 Disconnect from database
const dbDisconnect = async () => {
  if (!cached.conn) {
    logger.info("No active MongoDB connection to disconnect");
    return;
  }

  try {
    await mongoose.disconnect();
    cached.conn = null;
    cached.promise = null;
    logger.info("Disconnected from MongoDB");
  } catch (error) {
    logger.error("Error disconnecting MongoDB:", error);
    throw error;
  }
};

export { dbConnect, dbDisconnect };
