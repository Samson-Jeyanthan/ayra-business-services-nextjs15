import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative flex min-h-screen items-center justify-center w-full flex-col scroll-smooth">
      {children}
    </main>
  );
};

export default AuthLayout;
