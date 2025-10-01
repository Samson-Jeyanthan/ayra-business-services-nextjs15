import React from "react";
import { Sidebar } from "@/components/shared";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex gap-2 min-h-screen w-full scroll-smooth">
      <Sidebar />
      <section className="relative flex flex-col w-[calc(100%-16rem)]">
        {children}
      </section>
    </main>
  );
};

export default RootLayout;
