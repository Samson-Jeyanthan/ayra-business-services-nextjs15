import React from "react";
import { Footer, Navbar } from "@/components/shared";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative flex min-h-screen w-full flex-col scroll-smooth">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default RootLayout;
