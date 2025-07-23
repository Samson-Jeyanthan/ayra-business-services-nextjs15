import { NAV_LINKS } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex sticky top-0 z-50 justify-between w-full p-4">
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

      <p>Contact Us</p>
    </nav>
  );
};

export default Navbar;
