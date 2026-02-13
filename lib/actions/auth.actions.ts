"use server";

import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import User, { IUserDoc } from "@/database/user.model";
import { signIn, signOut } from "@/auth";

import action from "../handlers/action";
import handleError from "../handlers/error";
import {
  GetUserRegInfoSchema,
  SignInSchema,
  SignUpSchema,
} from "../validations";
import { NotFoundError } from "../http-errors";
import Client from "@/database/client.model";
import Candidate from "@/database/candidate.model";

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

    const userData = await getUserAction(user._id.toString());

    return {
      success: true,
      data: JSON.parse(JSON.stringify(userData.data?.user?.userType)),
    };
  } catch (error) {
    await session.abortTransaction();
    return handleError(error) as ErrorResponse;
  } finally {
    await session.endSession();
  }
}

type SignInData = {
  success: boolean;
  userType?: "candidate" | "client";
  completedSteps?: number;
  error?: {
    message: string;
    details?: Record<string, string[]>;
  };
};

export async function signInWithCredentials(
  params: Pick<AuthCredentials, "email" | "password">
): Promise<ActionResponse<SignInData>> {
  const validationResult = await action({ params, schema: SignInSchema });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const { email, password } = validationResult.params!;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) throw new NotFoundError("User");

    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatch) throw new Error("Password does not match");

    let completedSteps = 0;
    let userData = null;

    if (existingUser.userType === "client") {
      userData = await Client.findOne({ userId: existingUser._id.toString() });
      completedSteps = userData?.completedSteps || 0;
    } else if (existingUser.userType === "candidate") {
      userData = await Candidate.findOne({
        userId: existingUser._id.toString(),
      });
      completedSteps = userData?.completedSteps || 0;
    }

    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    const finalData = {
      userType: existingUser.userType,
      completedSteps,
    };

    return { success: true, data: JSON.parse(JSON.stringify(finalData)) };
  } catch (error) {
    return handleError(error) as ErrorResponse;
  }
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function getUserAction(params: IGetUserParams): Promise<
  ActionResponse<{
    user: IUserDoc;
  }>
> {
  const validationResult = await action({
    params,
    schema: GetUserRegInfoSchema,
  });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const { userId } = validationResult.params!;

  try {
    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");

    console.log(user, "user-in-getuseraction");

    return {
      success: true,
      data: {
        user: JSON.parse(JSON.stringify(user)),
      },
    };
  } catch (error) {
    return handleError(error) as ErrorResponse;
  }
}

// export async function getUserByIdAction(params: IGetUserParams) {
//   const validationResult = await action({
//     params,
//     schema: GetUserRegInfoSchema,
//     authorize: true,
//   });

//   if (validationResult instanceof Error) {
//     return handleError(validationResult) as ErrorResponse;
//   }

//   const { userId } = validationResult.params!;

//   const response = (await api.users.getById(
//     userId
//   )) as ActionResponse<IUserDoc>;

//   console.log(response, "getUserByIdAction");

//   return {
//     success: true,
//     // data: response ? response : null,
//   };
// }
