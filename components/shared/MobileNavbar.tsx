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
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { auth, signOut } from "@/auth";

const MobileNavbar = async () => {
  const session = await auth();

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
          <SheetTitle>Menu</SheetTitle>
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
        <SheetFooter className="w-full flex-center">
          {session ? (
            <SheetClose asChild>
              <form
                action={async () => {
                  "use server";

                  await signOut();
                }}
                className="flex-center"
              >
                <Button
                  type="submit"
                  className="secondary-btn-custom h-10 px-6 text-sm rounded-full bg-white cursor-pointer"
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
