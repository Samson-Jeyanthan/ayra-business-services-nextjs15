import React from "react";
import { MultiStepSidebar } from "@/components/shared";
import { CLIENT_MULTISTEP_STAGES } from "@/constants";
import Image from "next/image";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { enforceClientStep } from "@/lib/functions/profileRedirection";

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

  const TOTAL_STEPS = 5;

  if (!session) {
    return redirect("/");
  } else if (userId) {
    console.log("going to try completesteps");

    await enforceClientStep({
      userId,
      stepNo: resolvedParams.stepNo,
      totalSteps: TOTAL_STEPS,
    });
  }

  return (
    <main className="relative flex justify-center w-full">
      <section className="w-full max-w-[90rem] flex gap-4">
        <aside className="hidden md:flex flex-col sticky top-0 z-0 py-12 min-h-screen max-h-screen ">
          <header>
            <Image
              src="/images/ayrabs-logo.png"
              alt="logo"
              width={130}
              height={32}
            />
            <p className="mt-4 font-semibold text-lg">Client Registration</p>
          </header>
          <MultiStepSidebar
            multiStepStagesArray={CLIENT_MULTISTEP_STAGES}
            stepNo={resolvedParams.stepNo}
            isCandidStep={false}
          />
        </aside>
        <div className="w-full">{children}</div>
      </section>
    </main>
  );
}
