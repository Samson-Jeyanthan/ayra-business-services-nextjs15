import React from "react";
import { Navbar } from "@/components/shared";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative flex min-h-screen w-full flex-col scroll-smooth">
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
