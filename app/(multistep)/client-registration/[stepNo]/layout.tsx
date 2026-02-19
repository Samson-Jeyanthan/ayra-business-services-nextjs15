import React from "react";
import { MultiStepSidebar } from "@/components/shared";
import { CLIENT_MULTISTEP_STAGES } from "@/constants";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getClientRegInfoByUserId } from "@/lib/actions/client.action";
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
  let loopupStep = 0;

  if (!session) {
    return redirect("/");
  } else if (userId) {
    loopupStep++;

    if (loopupStep === 1) {
      const res = await getClientRegInfoByUserId({ userId: "" });

      const completedSteps = Array.isArray(res?.data)
        ? (res.data[0]?.completedSteps ?? 0)
        : (res?.data?.completedSteps ?? 0);

      const TOTAL_STEPS = 5;

      if (completedSteps >= TOTAL_STEPS) {
        redirect("/client-profile");
      }

      // ✅ Otherwise go to next step
      // If completedSteps = 2 -> next is step 3 => /candidate-registration/step-3
      const nextStep = completedSteps + 1;

      // If your routes are /candidate-registration/1, /candidate-registration/2 ...
      redirect(`/client-registration/step-${nextStep}`);
    }
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
