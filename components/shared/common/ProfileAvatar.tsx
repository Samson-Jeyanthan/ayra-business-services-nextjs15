"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileAvatar = ({
  userName,
  userLink,
}: {
  userName?: string | null;
  userLink: string;
}) => {
  const handleProfileNavigate = () => {
    if (userLink === "client") {
      window.location.href = "/client-profile";
    } else if (userLink === "candidate") {
      window.location.href = "/candidate-profile";
    }
  };

  return (
    <Avatar onClick={handleProfileNavigate} className="cursor-pointer">
      <AvatarImage src="" alt="@shadcn" className="grayscale" />
      <AvatarFallback>{userName?.slice(0, 2).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};

export default ProfileAvatar;
