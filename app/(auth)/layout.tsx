import { auth } from "@/auth";
import { getUserByIdAction } from "@/lib/actions/auth.actions";
import { redirect } from "next/navigation";
import React from "react";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  const user = await getUserByIdAction(session?.user?.id);

  // if (user.userType === "client") {
  //   redirect("/client-profile");
  // } else {
  //   redirect("/candidate-profile");
  // }

  return (
    <main className="relative flex min-h-screen items-center justify-center w-full flex-col scroll-smooth">
      {children}
    </main>
  );
};

export default AuthLayout;
