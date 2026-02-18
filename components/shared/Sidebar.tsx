import Link from "next/link";
import { Button } from "../ui/button";
import { ADMIN_SIDEBAR_LINKS } from "@/constants";
import Image from "next/image";
import { signOut } from "@/auth";

const Sidebar = () => {
  return (
    <aside className="w-64 py-8 px-4 h-min-screen flex flex-col items-center justify-between bg-black text-white">
      <header className="w-full">
        <div className="w-full flex items-center justify-center">
          <Image
            src="/images/ayrabs-logo-light.png"
            alt="logo"
            width={130}
            height={32}
          />
        </div>

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
    </aside>
  );
};

export default Sidebar;
