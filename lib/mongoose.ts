import mongoose, { Mongoose } from "mongoose";
import logger from "./logger";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Extend globalThis type safely
declare global {
  var mongoose: MongooseCache | undefined;
}

const globalWithMongoose = globalThis as typeof globalThis & {
  mongoose?: MongooseCache;
};

let cached = globalWithMongoose.mongoose;

if (!cached) {
  cached = globalWithMongoose.mongoose = {
    conn: null,
    promise: null,
  };
}

const dbConnect = async (): Promise<Mongoose> => {
  if (cached!.conn) {
    return cached!.conn;
  }

  if (!cached!.promise) {
    cached!.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "ayra_business_services",
        bufferCommands: false,
      })
      .then((mongoose) => {
        logger.info("Connected to MongoDB");
        return mongoose;
      });
  }

  cached!.conn = await cached!.promise;
  return cached!.conn;
};

export default dbConnect;
