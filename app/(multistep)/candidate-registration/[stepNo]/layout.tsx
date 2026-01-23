import React from "react";
import { MultiStepSidebar } from "@/components/shared";
import { CANDIDATE_MULTISTEP_STAGES } from "@/constants";
import Image from "next/image";
// import { auth } from "@/auth";
// import { getCandidateRegInfoByUserId } from "@/lib/actions/candidate.action";
// import { redirect } from "next/navigation";

export default async function MultiStepLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ stepNo: string }>;
  children: React.ReactNode;
}>) {
  const resolvedParams = await params;
  // const session = await auth();

  // if (!session) return redirect("/");

  // const res = await getUserByIdAction(session?.user?.id as string);

  // const resTwo = await getCandidateRegInfoByUserId({ userId: "" });

  // console.log(resTwo, "this_is_a_reg_info");

  return (
    <main className="relative flex justify-center w-full">
      <section className="w-full max-w-[90rem] flex gap-4">
        <aside className="sticky top-0 z-0 py-12 min-h-screen max-h-screen ">
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
