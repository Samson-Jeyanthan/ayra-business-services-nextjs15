import React from "react";
import { MultiStepSidebar } from "@/components/shared";
import { CANDIDATE_MULTISTEP_STAGES } from "@/constants";
import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { enforceCandidateStep } from "@/lib/functions/profileRedirection";

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

  const TOTAL_STEPS = 9;

  if (!session) {
    return redirect("/");
  } else if (userId) {
    console.log("going to try completesteps");

    await enforceCandidateStep({
      userId,
      stepNo: resolvedParams.stepNo,
      totalSteps: TOTAL_STEPS,
    });
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
