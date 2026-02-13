"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { Button } from "../ui/button";
// import { signOutAction } from "@/lib/actions/auth.actions";
import dynamic from "next/dynamic";

const MobileNavbar = dynamic(() => import("./MobileNavbar"), { ssr: false });
import ProfileAvatar from "./common/ProfileAvatar";

const Navbar = ({
  isLogin,
  userName,
  userLink,
}: {
  isLogin: boolean;
  userName?: string | null;
  userLink: string;
}) => {
  console.log(isLogin, "islogin params");
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 10) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  // const handleSignOut = async () => {
  //   await signOutAction();
  // };

  return (
    <nav
      className={`${scrollNav ? "bg-light-900 shadow-md shadow-gray-900/5" : "bg-transparent"} flex sticky top-0 px-10 md:px-14 items-center -mt-20 z-50 justify-between p-4`}
    >
      <Link href="/">
        <Image
          src="/images/ayrabs-logo.png"
          alt="logo"
          width={130}
          height={32}
          priority
          unoptimized
        />
      </Link>

      <div className="hidden md:flex gap-6">
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

      <div className="hidden md:flex w-auto">
        {isLogin ? (
          <ProfileAvatar userName={userName} userLink={userLink} />
        ) : (
          <Link
            href="/sign-in"
            className="secondary-btn-custom h-10 px-6 text-sm"
          >
            Sign in
          </Link>
        )}
      </div>

      <MobileNavbar isLogin={isLogin} />
    </nav>
  );
};

export default Navbar;

{
  /* <form action={handleSignOut}>
              <Button
                type="submit"
                className="secondary-btn-custom h-10 px-6 text-sm rounded-full bg-white cursor-pointer"
              >
                <span className="text-dark300_light900">Logout</span>
 </Button>
</form> */
}
