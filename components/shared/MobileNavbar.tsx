import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { Menu, User } from "lucide-react";
import { auth, signOut } from "@/auth";
import { getUserAction } from "@/lib/actions/auth.actions";
import { Button } from "../ui/button";
import React from "react";

const MobileNavbar = async () => {
  const session = await auth();

  const userId = session?.user?.id;
  let userLink = "";

  if (userId) {
    const res = await getUserAction({ userId });

    const user = res.success ? res.data?.user : null;

    if (user?.userType === "client") userLink = "client";
    else if (user?.userType === "candidate") userLink = "candidate";
    else if (user?.userType === "admin") userLink = "admin";
  }

  return (
    <Sheet>
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
          <SheetTitle className="mt-3">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col justify-center items-center h-7/10 gap-8">
          {NAV_LINKS.map((item) => {
            return (
              <SheetClose asChild key={item.name}>
                <Link
                  key={item.name}
                  href={item.href}
                  scroll={item.scroll}
                  className="text-base font-bold w-max underline hover:text-light-300 py-2"
                >
                  {item.name}
                </Link>
              </SheetClose>
            );
          })}
        </div>

        <SheetFooter className="w-full flex-center flex-col gap-4">
          {session && (
            <SheetClose asChild>
              <Link
                href={`${userLink}-profile`}
                className="flex justify-center items-center gap-2 border border-solid border-black !h-10 w-28"
              >
                <User className="size-4" />
                <p className="w-min">Profile</p>
              </Link>
            </SheetClose>
          )}

          {session ? (
            <SheetClose className="flex flex-col gap-2">
              <form
                action={async () => {
                  "use server";

                  await signOut();
                }}
                className="flex-center"
              >
                <Button
                  type="submit"
                  className="secondary-btn-custom h-10 w-28 px-6 text-sm rounded bg-white cursor-pointer"
                >
                  <p className="text-dark300_light900">Logout</p>
                </Button>
              </form>
            </SheetClose>
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
