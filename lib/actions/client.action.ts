"use server";

import mongoose from "mongoose";
import handleError from "../handlers/error";
import {
  CliRegOneSchema,
  CliRegTwoSchema,
  ClientReqSchema,
} from "../validations";
import User from "@/database/user.model";
import action from "../handlers/action";
import CliRequest from "@/database/cliRequest.model";
import Client from "@/database/client.model";

export async function createClientRequestAction(
  params: IClientRequestParams
): Promise<ActionResponse> {
  const validationResult = await action({
    params,
    schema: ClientReqSchema,
    authorize: false,
  });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const { firstName, lastName, companyName, email, phoneNo, message } =
    validationResult.params!;

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
          userType: "client",
          status: "pending",
        },
      ],
      { session }
    );

    if (!newUser) {
      throw new Error("Failed to create new user request");
    }

    const [cliRequest] = await CliRequest.create(
      [
        {
          userId: newUser._id,
          companyName,
          phoneNo,
          message,
        },
      ],
      { session }
    );

    if (!cliRequest) {
      throw new Error("Failed to submit the client request");
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

// client registration multistep form actions

export async function clientRegStepOneAction(
  params: IClientRegStepOneParams
): Promise<ActionResponse> {
  const validationResult = await action({
    params,
    schema: CliRegOneSchema,
    authorize: true,
  });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const {
    companyLegalName,
    tradingAs,
    companyRegistrationNo,
    vatNo,
    registeredBusinessAddress,
    companyWebsite,
    industry,
  } = validationResult.params!;

  const session = await mongoose.startSession();
  const userId = validationResult?.session?.user?.id;

  if (!userId) {
    return handleError(new Error("Unauthorized")) as ErrorResponse;
  }

  try {
    session.startTransaction();

    const [cliRegOne] = await Client.create([
      {
        userId,
        stepOne: {
          data: {
            companyLegalName,
            tradingAs,
            companyRegistrationNo,
            vatNo,
            registeredBusinessAddress,
            companyWebsite,
            industry,
          },
          isCompleted: true,
          status: "pending",
          reviewedBy: null,
          reviewedAt: null,
          rejectionReason: null,
        },
        completedSteps: 1,
      },
    ]);

    if (!cliRegOne) {
      throw new Error("Failed to submit the step one form");
    }

    await session.commitTransaction();

    return { success: true };
  } catch (error) {
    await session.abortTransaction();
    return handleError(error) as ErrorResponse;
  } finally {
    session.endSession();
  }
}

export async function clientRegStepTwoAction(params: IClientRegStepTwoParams) {
  const validationResult = await action({
    params,
    schema: CliRegTwoSchema,
    authorize: true,
  });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }
}
