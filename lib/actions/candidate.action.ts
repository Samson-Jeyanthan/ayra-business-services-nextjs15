"use server";

import handleError from "../handlers/error";
import mongoose from "mongoose";
import action from "../handlers/action";
import { CandidateReqSchema, CandidRegOneSchema } from "../validations";
import User from "@/database/user.model";
import CandiRequest from "@/database/candiRequest.model";
import Candidate from "@/database/candidate.model";

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
  const validationResult = await action({
    params,
    schema: CandidRegOneSchema,
    authorize: false,
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

  try {
    session.startTransaction();

    const [candidRegOne] = await Candidate.create([
      {
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
      },
    ]);

    if (!candidRegOne) {
      throw new Error("Failed to submit request");
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
