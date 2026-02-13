import React from "react";
import { Footer, Navbar } from "@/components/shared";
import { auth } from "@/auth";
import { getUserByIdAction } from "@/lib/actions/auth.actions";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  let userLink = "";

  console.log(session);

  if (session !== null) {
    const user = await getUserByIdAction(session?.user?.id);

    if (user?.userType === "client") {
      userLink = "client";
    } else if (user?.userType === "candidate") {
      userLink = "candidate";
    } else if (user?.userType === "admin") {
      userLink = "admin";
    }
  }

  return (
    <main className="relative flex min-h-screen w-full flex-col scroll-smooth">
      <Navbar
        isLogin={session !== null ? true : false}
        userName={session?.user?.name}
        userLink={userLink}
      />
      {children}
      <Footer />
    </main>
  );
};

export default RootLayout;
