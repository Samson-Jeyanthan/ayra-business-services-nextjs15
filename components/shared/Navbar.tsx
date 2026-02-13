import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { auth, signOut } from "@/auth";
import { Button } from "../ui/button";
// import { getUserAction } from "@/lib/actions/auth.actions";
// import ProfileAvatar from "./common/ProfileAvatar";

const Navbar = async () => {
  const session = await auth();
  const scrollNav = true;

  //   const userId = session?.user?.id;
  //   let userLink = "";

  //   if (userId) {
  //     const res = await getUserAction({ userId });

  //     const user = res.success ? res.data?.user : null;

  //     if (user?.userType === "client") userLink = "client";
  //     else if (user?.userType === "candidate") userLink = "candidate";
  //     else if (user?.userType === "admin") userLink = "admin";
  // }

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

      {/* <ProfileAvatar userName={ session?.user?.name } userLink={ userLink } /> */}
      <div className="hidden md:flex w-auto">
        {session ? (
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
        ) : (
          <Link
            href="/sign-in"
            className="secondary-btn-custom h-10 px-6 text-sm"
          >
            Sign in
          </Link>
        )}
      </div>

      <MobileNavbar />
    </nav>
  );
};

export default Navbar;
