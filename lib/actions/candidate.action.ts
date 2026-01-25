"use server";

import handleError from "../handlers/error";
import mongoose from "mongoose";
import action from "../handlers/action";
import {
  CandidateReqSchema,
  CandidRegFiveSchema,
  CandidRegFourSchema,
  CandidRegOneSchema,
  CandidRegSevenSchema,
  CandidRegSixSchema,
  CandidRegThreeSchema,
  CandidRegTwoSchema,
  GetCandidateRegInfoSchema,
} from "../validations";
import User from "@/database/user.model";
import CandiRequest from "@/database/candiRequest.model";
import z from "zod";
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
          isCompleted: true,
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

export async function candidateRegStepTwoAction(
  params: ICandidateRegStepTwoParams
): Promise<ActionResponse> {
  const validationResult = await action({
    params,
    schema: CandidRegTwoSchema,
    authorize: true,
  });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const { fullNameOfKin, relationToYou, kinMobileNo, kinLandlineNo, kinEmail } =
    validationResult.params!;

  const userId = validationResult?.session?.user?.id;

  if (!userId) {
    return handleError(new Error("Unauthorized")) as ErrorResponse;
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const candidate = await Candidate.findOneAndUpdate(
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
            fullNameOfKin,
            relationToYou,
            kinMobileNo,
            kinLandlineNo,
            kinEmail,
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

    console.log(candidate, "candidate");

    if (!candidate) {
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

export async function candidateRegStepThreeAction(
  params: ICandidateRegStepThreeParams
): Promise<ActionResponse> {
  const validationResult = await action({
    params,
    schema: CandidRegThreeSchema,
    authorize: true,
  });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const { criminalCautionAct1974, reasonForAct1974 } = validationResult.params!;

  const userId = validationResult?.session?.user?.id;

  if (!userId) {
    return handleError(new Error("Unauthorized")) as ErrorResponse;
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const candidate = await Candidate.findOneAndUpdate(
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
            criminalCautionAct1974: criminalCautionAct1974 === "true",
            reasonForAct1974,
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

    console.log(candidate, "candidate");

    if (!candidate) {
      throw new Error(
        "Step three cannot be submitted. Please complete step one or this step is locked."
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

export async function candidateRegStepFourAction(
  params: ICandidateRegStepFourParams
): Promise<ActionResponse> {
  const validationResult = await action({
    params,
    schema: CandidRegFourSchema,
    authorize: true,
  });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const {
    nameAsOnAccount,
    bankSocietyName,
    accountNo,
    sortCode,
    bankDetailConfirmation,
    holidayMode,
  } = validationResult.params!;

  const userId = validationResult?.session?.user?.id;

  if (!userId) {
    return handleError(new Error("Unauthorized")) as ErrorResponse;
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const candidate = await Candidate.findOneAndUpdate(
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
            nameAsOnAccount,
            bankSocietyName,
            accountNo,
            sortCode,
            bankDetailConfirmation,
            holidayMode,
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

    console.log(candidate, "candidate");

    if (!candidate) {
      throw new Error(
        "Step Four cannot be submitted. Please complete step one or this step is locked."
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

export async function candidateRegStepFiveAction(
  params: ICandidateRegStepFiveParams
): Promise<ActionResponse> {
  // server side validation omit & refine
  const CandidRegFiveServerSchema = CandidRegFiveSchema.omit({
    drivingLicense: true,
    cpcCard: true,
    digitalDrivingTachographCard: true,
    allInOne: true,
  }).extend({
    drivingLicense: z.object({
      frontPic: z.string(),
      backPic: z.string(),
    }),
    cpcCard: z.object({
      frontPic: z.string(),
      backPic: z.string(),
    }),
    digitalDrivingTachographCard: z.object({
      frontPic: z.string(),
      backPic: z.string(),
    }),
    allInOne: z.object({
      frontPic: z.string(),
      backPic: z.string(),
    }),
  });

  const validationResult = await action({
    params,
    schema: CandidRegFiveServerSchema,
    authorize: true,
  });

  console.log(validationResult, "validation_result_five");

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const {
    drivingLicenceNo,
    drivingLicenseShareCode,
    drivingLicense,
    cpcCard,
    digitalDrivingTachographCard,
    allInOne,
    motorIncidents: {
      currentDrivingEndorsement,
      isHgvPsvCollisionYears5,
      isSubjectFromTrafficCommissioner,
      isAppearedBeforeTrafficCommissioner,
      isPrescribedMedication,
      isSufferFromDrugs,
      isIllegalSubstance,
      reasonForIllegalSubstance,
      isRandomDrugTest,
      reasonForNoRandomDrugTest,
      isNeedGlassToDrive,
      lastEyeTestDate,
    },
  } = validationResult.params!;

  const session = await mongoose.startSession();

  const userId = validationResult?.session?.user?.id;

  try {
    session.startTransaction();

    const candidate = await Candidate.findOneAndUpdate(
      {
        userId,
        completedSteps: { $gte: 4 }, // ✅ step four completed
        $or: [
          { "stepFive.status": { $exists: false } },
          { "stepFive.status": { $in: ["pending", "rejected"] } },
        ],
      },
      {
        $set: {
          "stepFive.data": {
            drivingLicenceNo,
            drivingLicenseShareCode,
            drivingLicense,
            cpcCard,
            digitalDrivingTachographCard,
            allInOne,
            motorIncidents: {
              currentDrivingEndorsement,
              isHgvPsvCollisionYears5,
              isSubjectFromTrafficCommissioner,
              isAppearedBeforeTrafficCommissioner,
              isPrescribedMedication,
              isSufferFromDrugs,
              isIllegalSubstance,
              reasonForIllegalSubstance,
              isRandomDrugTest,
              reasonForNoRandomDrugTest,
              isNeedGlassToDrive,
              lastEyeTestDate: lastEyeTestDate.toString(),
            },
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

    console.log(candidate, "candidate");

    if (!candidate) {
      throw new Error("Failed to submit the step four form");
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

export async function candidateRegStepSixAction(
  params: ICandidateRegStepSixParams
): Promise<ActionResponse> {
  const validationResult = await action({
    params,
    schema: CandidRegSixSchema,
    authorize: true,
  });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const { references } = validationResult.params!;

  if (!references.length) {
    throw new Error("At least one reference is required");
  }

  const normalizedReferences = references.map((ref) => ({
    companyName: ref.companyName,
    position: ref.position,
    contactName: ref.contactName,
    address: ref.address,
    postCode: ref.postCode,
    phoneNo: ref.phoneNo,
    email: ref.email,
    employmentStartDate: ref.employmentStartDate
      ? ref.employmentStartDate.toISOString()
      : null,
    employmentEndDate: ref.employmentEndDate
      ? ref.employmentEndDate.toISOString()
      : null,
    approachability: ref.approachability,
  }));

  const userId = validationResult?.session?.user?.id;

  if (!userId) {
    return handleError(new Error("Unauthorized")) as ErrorResponse;
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const candidate = await Candidate.findOneAndUpdate(
      {
        userId,
        completedSteps: { $gte: 5 }, // ✅ step five completed
        $or: [
          { "stepSix.status": { $exists: false } },
          { "stepSix.status": { $in: ["pending", "rejected"] } },
        ],
      },
      {
        $set: {
          "stepSix.data": {
            references: normalizedReferences,
          },
          "stepSix.isCompleted": true,
          "stepSix.status": "pending",
          "stepSix.reviewedBy": null,
          "stepSix.reviewedAt": null,
          "stepSix.rejectionReason": null,
        },
        $max: {
          completedSteps: 6, // ✅ prevents rollback
        },
      },
      {
        new: true,
        session,
      }
    );

    console.log(candidate, "candidate");

    if (!candidate) {
      throw new Error(
        "Step Six cannot be submitted. Please complete previous step or this step is locked."
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

export async function candidateRegStepSevenAction(
  params: ICandidateRegStepSevenParams
): Promise<ActionResponse> {
  const validationResult = await action({
    params,
    schema: CandidRegSevenSchema,
    authorize: true,
  });

  console.log(validationResult);
  return { success: true };
}

export async function candidateRegStepEightAction() {}

export async function candidateRegStepNineAction() {}

export async function getCandidateRegInfoByUserId(
  params: IGetCandidateRegInfoParams
): Promise<ActionResponse> {
  const validationResult = await action({
    params,
    schema: GetCandidateRegInfoSchema,
    authorize: true,
  });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const currentUserId = validationResult?.session?.user?.id;

  const candidateRegInfo = await Candidate.findOne({ userId: currentUserId });

  console.log(candidateRegInfo, currentUserId);

  return { success: true, data: candidateRegInfo };
}
