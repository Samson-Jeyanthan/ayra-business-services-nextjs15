import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-7 px-20 py-10 bg-light-900">
      <div className="h-2 w-full flex bg-primary" />
      <div className="flex gap-18 justify-between items-start px-5">
        <div className="flex flex-col items-start gap-5 w-[45%]">
          <h1 className="font-bold text-2xl">Ayra Business Services</h1>
          <p className="text-light-500">
            We don’t just fill vacancies or sell services—we build long-term
            solutions for your workforce, your operations, and your brand.
            Partner with Ayra and unlock growth across every lane of your
            business.
          </p>
          <div>Social medias</div>
        </div>

        <div className="w-max">
          <h3 className="footer-title">Quick Links</h3>
          <div className="footer-links-group">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                scroll={item.scroll}
                className="text-sm font-normal w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-max">
          <h3 className="footer-title">Licence</h3>
          <div className="footer-links-group">
            <Link href="/privacy-policy">Privacy policy</Link>
            <Link href="/copyright">Copyright</Link>
            <Link href="/email">Email Address</Link>
          </div>
        </div>

        <div className="w-max">
          <h3 className="footer-title">Contact</h3>
          <ul className="footer-links-group">
            <li className="flex gap-2">
              <Image
                src="/svgs/phone.svg"
                alt="location"
                width={25}
                height={25}
              />
              (406) 555-0120
            </li>
            <li className="flex gap-2">
              <Image
                src="/svgs/email.svg"
                alt="location"
                width={25}
                height={25}
              />
              ayrabusiness@gmail.com
            </li>
            <li className="flex gap-2">
              <Image
                src="/svgs/location.svg"
                alt="location"
                width={25}
                height={25}
              />
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </li>
          </ul>
        </div>
      </div>
      <p className="text-xs text-center mt-10">
        © 2025 AYRA BUSINESS SERVICES. All Rights Reserved. | Designed &
        Developed By Samson
      </p>
    </footer>
  );
};

export default Footer;
