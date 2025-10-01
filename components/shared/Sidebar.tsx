import Link from "next/link";
import { Button } from "../ui/button";
import { ADMIN_SIDEBAR_LINKS } from "@/constants";

const Sidebar = () => {
  return (
    <aside className="w-64 py-8 px-4 h-min-screen flex flex-col items-center justify-between bg-black text-white">
      <header className="w-full">
        <h1 className="text-3xl font-bold text-center">Ayrabs</h1>

        <div className="flex flex-col items-start gap-6 w-full mt-10">
          {ADMIN_SIDEBAR_LINKS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="w-full hover:bg-light-800 hover:text-black px-4 py-2 rounded-md"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </header>

      <Button className="bg-white text-black mt-10 rounded-2xl w-full">
        Logout
      </Button>
    </aside>
  );
};

export default Sidebar;
