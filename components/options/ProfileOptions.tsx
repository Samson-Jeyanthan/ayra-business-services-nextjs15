import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ProfileAvatar } from "../shared";
import { Button } from "../ui/button";
import { signOut } from "@/auth";
import { LogOut, User } from "lucide-react";
import Link from "next/link";

const ProfileOptions = ({
  username,
  userLink,
}: {
  username?: string | null;
  userLink: string;
}) => {
  const profileHref =
    userLink === "client"
      ? "/client-profile"
      : userLink === "candidate"
        ? "/candidate-profile"
        : "/";

  return (
    <Menubar className="relative border-none rounded md:!rounded-full !p-0 shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="!p-0">
          <ProfileAvatar username={username} />
        </MenubarTrigger>
        <MenubarContent className="absolute -right-5 z-[99] min-w-36 flex flex-col gap-1 rounded-lg border border-solid p-1.5 shadow-md shadow-dark-100/25 dark:border-dark-300">
          <MenubarItem className="flex justify-center !w-full !items-center cursor-pointer gap-3 rounded text-sm hover:bg-light-600">
            <Link
              href={profileHref}
              className="w-full flex justify-center items-center gap-2"
            >
              <User className="size-4" />
              <p className="w-min">Profile</p>
            </Link>
          </MenubarItem>
          <form
            action={async () => {
              "use server";

              console.log("Logged out successfully");
              await signOut();
            }}
            className="w-full"
          >
            <Button
              type="submit"
              className="w-full bg-transparent flex-center cursor-pointer h-8 gap-3 rounded text-xs p-1 hover:bg-light-600"
            >
              <LogOut />
              <p className="text-dark300_light900">Logout</p>
            </Button>
          </form>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default ProfileOptions;
