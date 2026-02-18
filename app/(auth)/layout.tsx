import { auth } from "@/auth";
import { getUserAction } from "@/lib/actions/auth.actions";
import { redirect } from "next/navigation";
import React from "react";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  const userId = session?.user?.id;

  if (userId) {
    const res = await getUserAction({ userId });

    const user = res.success ? res.data?.user : null;

    if (user?.userType === "client") {
      redirect("/client-profile");
    } else {
      redirect("/candidate-profile");
    }
  }

  return (
    <main
      className="relative flex min-h-screen items-start md:items-center justify-center w-full flex-col bg-black"
      data-scroll-behavior="smooth"
    >
      {children}
    </main>
  );
};

export default AuthLayout;
