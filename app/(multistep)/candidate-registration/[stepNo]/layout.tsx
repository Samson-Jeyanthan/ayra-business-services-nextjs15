import React from "react";
import { MultiStepSidebar } from "@/components/shared";
import { CANDIDATE_MULTISTEP_STAGES } from "@/constants";
import Image from "next/image";
import { getCandidateRegInfoByUserId } from "@/lib/actions/candidate.action";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function MultiStepLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ stepNo: string }>;
  children: React.ReactNode;
}>) {
  const resolvedParams = await params;
  const session = await auth();
  const userId = session?.user?.id;

  let isRetry: boolean = false;
  const TOTAL_STEPS = 9;

  if (!session) {
    return redirect("/");
  } else if (userId) {
    if (isRetry) {
      return console.log("Is retry is true");
    }

    console.log("going to try completesteps");

    try {
      const res = await getCandidateRegInfoByUserId({ userId: "" });

      const completedSteps = res?.data?.completedSteps ?? 0;

      if (completedSteps >= TOTAL_STEPS) {
        redirect("/candidate-profile");
      }

      isRetry = true;
      if (completedSteps !== Number(resolvedParams.stepNo)) {
        redirect(`/candidate-registration/step-${completedSteps}`);
      }

      console.log("Completed Steps: ", completedSteps);

      const nextStep = completedSteps + 1;
      redirect(`/candidate-registration/step-${nextStep}`);
    } catch (error) {
      console.log("Error to find completed steps: ", error);
    }
  }

  return (
    <main className="relative flex justify-center w-full">
      <section className="w-full max-w-[90rem] flex gap-4">
        <aside className="sticky top-0 z-0 py-12 hidden md:flex flex-col min-h-screen max-h-screen ">
          <header>
            <Image
              src="/images/ayrabs-logo.png"
              alt="logo"
              width={130}
              height={32}
            />
            <p className="mt-4 font-semibold text-lg">Candidate Registration</p>
          </header>
          <MultiStepSidebar
            multiStepStagesArray={CANDIDATE_MULTISTEP_STAGES}
            stepNo={resolvedParams.stepNo}
            isCandidStep={true}
          />
        </aside>
        <div className="w-full">{children}</div>
      </section>
    </main>
  );
}
