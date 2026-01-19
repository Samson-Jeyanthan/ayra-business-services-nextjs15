"use server";

import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import User from "@/database/user.model";
import { signIn } from "@/auth";

import action from "../handlers/action";
import handleError from "../handlers/error";
import { SignInSchema, SignUpSchema } from "../validations";
import { NotFoundError } from "../http-errors";

export async function signUpWithCredentials(
  params: AuthCredentials
): Promise<ActionResponse> {
  const validationResult = await action({ params, schema: SignUpSchema });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const { username, email, password } = validationResult.params!;

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // ✅ User MUST already exist (created by admin)
    const user = await User.findOne({ email }).session(session);

    if (!user) {
      throw new Error("Invalid or expired registration link");
    }

    // ❌ Prevent re-registration
    if (user.password !== "N/A") {
      throw new Error("User already registered");
    }

    // ✅ Username must be unique (excluding this user)
    const usernameTaken = await User.findOne({
      username,
      _id: { $ne: user._id },
    }).session(session);

    if (usernameTaken) {
      throw new Error("Username already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    // ✅ Update ONLY allowed fields
    user.username = username;
    user.password = hashedPassword;
    user.status = "signedUp";

    await user.save({ session });

    await session.commitTransaction();

    // ✅ Auto-login after registration
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return { success: true };
  } catch (error) {
    await session.abortTransaction();

    return handleError(error) as ErrorResponse;
  } finally {
    await session.endSession();
  }
}

export async function signInWithCredentials(
  params: Pick<AuthCredentials, "email" | "password">
): Promise<ActionResponse> {
  const validationResult = await action({ params, schema: SignInSchema });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const { email, password } = validationResult.params!;

  try {
    const existingUser = await User.findOne({ email });

    console.log(existingUser, "exisiting_user auth_action");

    if (!existingUser) throw new NotFoundError("User");

    const passwordMatch = await bcrypt.compare(password, existingUser.password);

    if (!passwordMatch) throw new Error("Password does not match");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    console.log(res, "response of auth signin");

    return { success: true };
  } catch (error) {
    return handleError(error) as ErrorResponse;
  }
}
