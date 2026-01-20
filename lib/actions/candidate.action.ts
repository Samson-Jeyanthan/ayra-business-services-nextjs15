"use server";

import handleError from "../handlers/error";
import mongoose from "mongoose";
import action from "../handlers/action";
import { CandidateReqSchema, CandidRegOneSchema } from "../validations";
import User from "@/database/user.model";
import CandiRequest from "@/database/candiRequest.model";
import Candidate from "@/database/candidate.model";
import z from "zod";

export async function createCandidateRequestAction(
  params: ICandidateRequestParams
): Promise<ActionResponse> {
  const validationResult = await action({
    params,
    schema: CandidateReqSchema,
    authorize: false,
  });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const {
    firstName,
    lastName,
    email,
    phoneNo,
    address,
    prefferedRole,
    prefferedEmploymentStatus,
    typeOfWork,
  } = validationResult.params!;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const [newUser] = await User.create(
      [
        {
          username: "N/A",
          firstName,
          lastName,
          email,
          password: "N/A",
          userType: "candidate",
          status: "pending",
        },
      ],
      { session }
    );

    if (!newUser) {
      throw new Error("Failed to create new user request");
    }

    const [candiRequest] = await CandiRequest.create(
      [
        {
          userId: newUser._id,
          address,
          phoneNo,
          prefferedRole,
          prefferedEmploymentStatus,
          typeOfWork,
        },
      ],
      { session }
    );

    if (!candiRequest) {
      throw new Error("Failed to submit request");
    }

    await session.commitTransaction();

    return {
      success: true,
      data: JSON.parse(JSON.stringify(newUser)),
    };
  } catch (error) {
    await session.abortTransaction();
    return handleError(error) as ErrorResponse;
  } finally {
    session.endSession();
  }
}

export async function candidateRegStepOneAction(
  params: ICandidateRegStepOneParams
): Promise<ActionResponse> {
  // server side validation omit & refine
  const CandidRegOneServerSchema = CandidRegOneSchema.omit({
    pictureOfYourself: true,
  }).extend({
    pictureOfYourself: z.string().min(1, "Picture is required"),
  });

  const validationResult = await action({
    params,
    schema: CandidRegOneServerSchema,
    authorize: true,
  });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const {
    title,
    firstName,
    lastName,
    dob,
    homeAddress,
    town,
    postCode,
    mobileNo,
    landlineNo,
    email,
    pictureOfYourself,
  } = validationResult.params!;

  const session = await mongoose.startSession();

  const userId = validationResult?.session?.user?.id;

  try {
    session.startTransaction();

    const [candidRegOne] = await Candidate.create([
      {
        userId,
        stepOne: {
          data: {
            title,
            firstName,
            lastName,
            dob: dob.toISOString(),
            homeAddress,
            town,
            postCode,
            mobileNo,
            landlineNo,
            email,
            pictureOfYourself,
          },
          status: "pending",
          reviewedBy: null,
          reviewedAt: null,
          rejectionReason: null,
        },
        completedSteps: 1,
      },
    ]);

    if (!candidRegOne) {
      throw new Error("Failed to submit the step one form");
    }

    await session.commitTransaction();

    return {
      success: true,
      // data: JSON.parse(JSON.stringify(newUser)),
    };
  } catch (error) {
    await session.abortTransaction();
    return handleError(error) as ErrorResponse;
  } finally {
    session.endSession();
  }
}
