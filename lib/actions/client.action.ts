"use server";

import mongoose from "mongoose";
import handleError from "../handlers/error";
import {
  CliRegFiveSchema,
  CliRegFourSchema,
  CliRegOneSchema,
  CliRegThreeSchema,
  CliRegTwoSchema,
  ClientReqSchema,
  GetUserRegInfoSchema,
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

  const { primaryContact, sameAsPrimary, billingContact } =
    validationResult.params!;

  const userId = validationResult?.session?.user?.id;

  if (!userId) {
    return handleError(new Error("Unauthorized")) as ErrorResponse;
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const client = await Client.findOneAndUpdate(
      {
        userId,
        completedSteps: { $gte: 1 }, // ✅ step one completed
        $or: [
          { "stepTwo.status": { $exists: false } },
          { "stepTwo.status": { $in: ["pending", "rejected"] } },
        ],
      },
      {
        $set: {
          "stepTwo.data": {
            primaryContact,
            sameAsPrimary,
            billingContact,
          },
          "stepTwo.isCompleted": true,
          "stepTwo.status": "pending",
          "stepTwo.reviewedBy": null,
          "stepTwo.reviewedAt": null,
          "stepTwo.rejectionReason": null,
        },
        $max: {
          completedSteps: 2, // ✅ prevents rollback
        },
      },
      {
        new: true,
        session,
      }
    );

    console.log(client, "client");

    if (!client) {
      throw new Error(
        "Step two cannot be submitted. Please complete step one or this step is locked."
      );
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

export async function clientRegStepThreeAction(
  params: IClientRegStepThreeParams
): Promise<ActionResponse> {
  const validationResult = await action({
    params,
    schema: CliRegThreeSchema,
    authorize: true,
  });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const {
    jobInformation,
    employmentTerms,
    compensations,
    roleAndCandidateProfile,
  } = validationResult.params!;

  const userId = validationResult?.session?.user?.id;

  if (!userId) {
    return handleError(new Error("Unauthorized")) as ErrorResponse;
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const client = await Client.findOneAndUpdate(
      {
        userId,
        completedSteps: { $gte: 2 }, // ✅ step two completed
        $or: [
          { "stepThree.status": { $exists: false } },
          { "stepThree.status": { $in: ["pending", "rejected"] } },
        ],
      },
      {
        $set: {
          "stepThree.data": {
            jobInformation,
            employmentTerms,
            compensations,
            roleAndCandidateProfile,
          },
          "stepThree.isCompleted": true,
          "stepThree.status": "pending",
          "stepThree.reviewedBy": null,
          "stepThree.reviewedAt": null,
          "stepThree.rejectionReason": null,
        },
        $max: {
          completedSteps: 3, // ✅ prevents rollback
        },
      },
      {
        new: true,
        session,
      }
    );

    console.log(client, "client");

    if (!client) {
      throw new Error(
        "Step three cannot be submitted. Please complete previous steps or this step is locked."
      );
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

export async function clientRegStepFourAction(
  params: IClientRegStepFourParams
) {
  const validationResult = await action({
    params,
    schema: CliRegFourSchema,
    authorize: true,
  });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const { intendedInterviewProcess, deadlineForCandidate } =
    validationResult.params!;

  const userId = validationResult?.session?.user?.id;

  if (!userId) {
    return handleError(new Error("Unauthorized")) as ErrorResponse;
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const client = await Client.findOneAndUpdate(
      {
        userId,
        completedSteps: { $gte: 3 }, // ✅ step two completed
        $or: [
          { "stepFour.status": { $exists: false } },
          { "stepFour.status": { $in: ["pending", "rejected"] } },
        ],
      },
      {
        $set: {
          "stepFour.data": {
            intendedInterviewProcess,
            deadlineForCandidate,
          },
          "stepFour.isCompleted": true,
          "stepFour.status": "pending",
          "stepFour.reviewedBy": null,
          "stepFour.reviewedAt": null,
          "stepFour.rejectionReason": null,
        },
        $max: {
          completedSteps: 4, // ✅ prevents rollback
        },
      },
      {
        new: true,
        session,
      }
    );

    console.log(client, "client");

    if (!client) {
      throw new Error(
        "Step four cannot be submitted. Please complete previous steps or this step is locked."
      );
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

export async function clientRegStepFiveAction(
  params: IClientRegStepFiveParams
) {
  const validationResult = await action({
    params,
    schema: CliRegFiveSchema,
    authorize: true,
  });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const { authorizedPersonName, jobTitle, signature, date } =
    validationResult.params!;

  const userId = validationResult?.session?.user?.id;

  if (!userId) {
    return handleError(new Error("Unauthorized")) as ErrorResponse;
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const client = await Client.findOneAndUpdate(
      {
        userId,
        completedSteps: { $gte: 4 }, // ✅ step two completed
        $or: [
          { "stepFive.status": { $exists: false } },
          { "stepFive.status": { $in: ["pending", "rejected"] } },
        ],
      },
      {
        $set: {
          "stepFive.data": {
            authorizedPersonName,
            jobTitle,
            signature,
            date,
          },
          "stepFive.isCompleted": true,
          "stepFive.status": "pending",
          "stepFive.reviewedBy": null,
          "stepFive.reviewedAt": null,
          "stepFive.rejectionReason": null,
        },
        $max: {
          completedSteps: 5, // ✅ prevents rollback
        },
      },
      {
        new: true,
        session,
      }
    );

    console.log(client, "client");

    if (!client) {
      throw new Error(
        "Step five cannot be submitted. Please complete previous steps or this step is locked."
      );
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

export async function getClientRegInfoByUserId(params: IGetUserRegInfoParams) {
  const validationResult = await action({
    params,
    schema: GetUserRegInfoSchema,
    authorize: true,
  });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const { userId } = validationResult.params!;
  const currentUserId = validationResult?.session?.user?.id;
  const paramId = userId ? userId : currentUserId;

  if (!paramId) {
    return {
      success: false,
      data: null,
      error: { message: "User ID not found" },
    };
  }

  const clientRegInfo = await Client.findOne({ userId: paramId })
    .select("+stepThree")
    .lean();

  console.log(clientRegInfo, "client.actions.ts");

  return {
    success: true,
    data: clientRegInfo ? clientRegInfo : null,
  };
}
