"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { signOutAction } from "@/lib/actions/auth.actions";

const Navbar = ({ isLogin }: { isLogin: boolean }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  // const handleSignOut = async () => {
  //   await signOut();
  // };

  return (
    <nav
      className={`${scrollNav ? "bg-light-900 shadow-md shadow-gray-900/5" : "bg-transparent"} flex sticky top-0 px-14 items-center -mt-20 z-50 justify-between p-4`}
    >
      <Image src="/images/ayrabs-logo.png" alt="logo" width={130} height={32} />
      <div className="flex gap-6">
        {NAV_LINKS.map((item) => {
          return (
            <Link
              key={item.name}
              href={item.href}
              scroll={item.scroll}
              className="text-sm font-semibold"
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {isLogin ? (
        <form
          action={async () => {
            await signOutAction();
          }}
        >
          <Button
            type="submit"
            className="secondary-btn-custom h-10 px-6 text-sm rounded-full bg-white cursor-pointer"
          >
            <span className="text-dark300_light900 max-lg:hidden">Logout</span>
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
    </nav>
  );
};

export default Navbar;
