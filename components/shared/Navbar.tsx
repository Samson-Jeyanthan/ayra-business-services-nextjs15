"use client";

import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
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
      className={`${scrollNav ? "bg-light-900 shadow-md shadow-gray-900/5" : "bg-transparent"} flex sticky top-0 px-14 items-center -mt-20 z-50 justify-between w-full p-4`}
    >
      <h1>Ayra</h1>

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

      <Link
        href="/contact-us"
        className="secondary-btn-custom h-10 px-6 text-sm"
      >
        Contact Us
      </Link>
    </nav>
  );
};

export default Navbar;
