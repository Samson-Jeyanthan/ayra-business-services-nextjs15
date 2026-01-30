"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

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
        <Button className="secondary-btn-custom h-10 px-6 text-sm !rounded-full bg-white">
          Logout
        </Button>
      ) : (
        <Link
          href="/sign-up"
          className="secondary-btn-custom h-10 px-6 text-sm"
        >
          Sign Up
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
