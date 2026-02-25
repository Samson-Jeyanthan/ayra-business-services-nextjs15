"use server";

import { redirect } from "next/navigation";
import { getCandidateRegInfoByUserId } from "@/lib/actions/candidate.action";
import { getClientRegInfoByUserId } from "../actions/client.action";

type GuardParams = {
  userId: string;
  stepNo?: string; // optional because profile page won't have stepNo
  totalSteps: number;
  basePath?: string;
  profilePath?: string;
};

function parseStep(stepNo?: string) {
  if (!stepNo) return null;
  return Number(stepNo.replace("step-", ""));
}

export async function enforceCandidateStep({
  userId,
  stepNo,
  totalSteps,
  basePath = "/candidate-registration",
  profilePath = "/candidate-profile",
}: GuardParams) {
  const res = await getCandidateRegInfoByUserId({ userId });
  const completedSteps = res?.data?.completedSteps ?? 0;

  const allowedStep = completedSteps + 1;

  console.log("Completed Steps:", completedSteps);
  console.log("Allowed Step:", allowedStep);

  // ✅ If all steps completed → only allow profile
  if (completedSteps >= totalSteps) {
    redirect(profilePath);
  }

  const currentStep = parseStep(stepNo);

  // If user tries to open profile before finishing
  if (!stepNo) {
    redirect(`${basePath}/step-${allowedStep}`);
  }

  // If user tries wrong step (past or future)
  if (currentStep !== allowedStep) {
    redirect(`${basePath}/step-${allowedStep}`);
  }

  return {
    completedSteps,
    allowedStep,
  };
}

export async function enforceClientStep({
  userId,
  stepNo,
  totalSteps,
  basePath = "/client-registration",
  profilePath = "/client-profile",
}: GuardParams) {
  const res = await getClientRegInfoByUserId({ userId });

  const completedSteps = Array.isArray(res?.data)
    ? (res.data[0]?.completedSteps ?? 0)
    : (res?.data?.completedSteps ?? 0);

  const allowedStep = completedSteps + 1;

  console.log("Completed Steps:", completedSteps);
  console.log("Allowed Step:", allowedStep);

  // ✅ If all steps completed → only allow profile
  if (completedSteps >= totalSteps) {
    redirect(profilePath);
  }

  const currentStep = parseStep(stepNo);

  // If user tries to open profile before finishing
  if (!stepNo) {
    redirect(`${basePath}/step-${allowedStep}`);
  }

  // If user tries wrong step (past or future)
  if (currentStep !== allowedStep) {
    redirect(`${basePath}/step-${allowedStep}`);
  }

  return {
    completedSteps,
    allowedStep,
  };
}
