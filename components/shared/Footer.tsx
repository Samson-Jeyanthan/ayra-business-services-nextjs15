import { NAV_LINKS, SOCIAL_MEDIAS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="flex flex-col gap-7 px-10 md:px-20 py-10 bg-light-900"
      id="footer"
    >
      <div className="h-2 w-full flex bg-primary" />
      <div className="flex flex-col md:flex-row gap-8 md:gap-18 justify-between items-start px-5">
        <div className="flex flex-col items-start gap-5 w-full md:w-[45%]">
          <h1 className="font-semibold text-3xl">Ayra Business Services</h1>
          <p className="text-light-400">
            We don’t just fill vacancies or sell services—we build long-term
            solutions for your workforce, your operations, and your brand.
            Partner with Ayra and unlock growth across every lane of your
            business.
          </p>
          <div className="flex gap-2 items-center -ml-4">
            {SOCIAL_MEDIAS.map((item) => (
              <Link key={item.name} href={item.href}>
                <Image src={item.icon} alt={item.name} width={48} height={48} />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-8 md:gap-18">
          <div className="w-40 md:w-max">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links-group">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  scroll={item.scroll}
                  className="text-sm font-normal w-max"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-40 md:w-max">
            <h3 className="footer-title">Licence</h3>
            <div className="footer-links-group">
              <Link
                href="/privacy-policy"
                className="text-sm font-normal w-max"
              >
                Privacy policy
              </Link>
              <Link href="/copyright" className="text-sm font-normal w-max">
                Copyright
              </Link>
              <Link href="/email" className="text-sm font-normal w-max">
                Email Address
              </Link>
            </div>
          </div>

          <div className="w-auto md:w-max">
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-links-group">
              <li className="flex gap-2">
                <Image
                  src="/svgs/phone.svg"
                  alt="location"
                  width={24}
                  height={24}
                />
                +44 7459 089424
              </li>
              <li className="flex gap-2">
                <Image
                  src="/svgs/email.svg"
                  alt="location"
                  width={24}
                  height={24}
                />
                info@ayrabs.com
              </li>
              <li className="flex gap-2">
                <Image
                  src="/svgs/location.svg"
                  alt="location"
                  width={24}
                  height={24}
                />
                Ayra Business Services Suite 29 Earl of Derby Complex North
                Mersey Business Centre Woodward Road L33 7UY
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-xs text-center mt-10">
        © {new Date().getFullYear()} AYRA BUSINESS SERVICES. All Rights
        Reserved. | Designed & Developed By Samson
      </p>
    </footer>
  );
};

export default Footer;
