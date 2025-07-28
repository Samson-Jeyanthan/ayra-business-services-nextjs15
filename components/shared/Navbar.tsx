import { NAV_LINKS } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex sticky top-0 px-14 items-center -mt-20 z-50 justify-between w-full p-4">
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

      <Link href="/contact-us" className="secondary-btn">
        Contact Us
      </Link>
    </nav>
  );
};

export default Navbar;
