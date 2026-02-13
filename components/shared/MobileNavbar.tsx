"use client";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { signOutAction } from "@/lib/actions/auth.actions";
import { Menu } from "lucide-react";

const MobileNavbar = ({ isLogin }: { isLogin: boolean }) => {
  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await signOutAction();
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          className="cursor-pointer md:hidden"
          aria-label="Open menu"
        >
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent
        aria-describedby={undefined}
        className="bg-light-700 !w-full"
      >
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col justify-center items-center h-7/10 gap-8">
          {NAV_LINKS.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.href}
                scroll={item.scroll}
                className="text-base font-bold w-max underline hover:text-light-300 py-2"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <SheetFooter className="w-full flex-center">
          {isLogin ? (
            <form action={handleSignOut} className="flex-center">
              <Button
                type="submit"
                className="secondary-btn-custom h-10 px-6 text-sm rounded-full bg-white cursor-pointer"
              >
                <p className="text-dark300_light900">Logout</p>
              </Button>
            </form>
          ) : (
            <Link
              href="/sign-in"
              className="secondary-btn-custom h-10 px-6 text-sm"
            >
              Sign in
            </Link>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
