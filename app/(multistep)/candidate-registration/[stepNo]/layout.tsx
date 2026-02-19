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

  if (!session) {
    return redirect("/");
  } else if (userId) {
    const res = await getCandidateRegInfoByUserId({ userId: "" });

    const completedSteps = res?.data?.completedSteps ?? 0;

    const TOTAL_STEPS = 9;

    if (completedSteps >= TOTAL_STEPS) {
      redirect("/candidate-profile");
    }

    // ✅ Otherwise go to next step
    // If completedSteps = 2 -> next is step 3 => /candidate-registration/step-3
    const nextStep = completedSteps + 1;

    // If your routes are /candidate-registration/1, /candidate-registration/2 ...
    redirect(`/candidate-registration/step-${nextStep}`);
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
