import React from "react";
import { Footer, Navbar } from "@/components/shared";
import { auth } from "@/auth";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  return (
    <main className="relative flex min-h-screen w-full flex-col scroll-smooth">
      <Navbar isLogin={session ? true : false} />
      {children}
      <Footer />
    </main>
  );
};

export default RootLayout;
