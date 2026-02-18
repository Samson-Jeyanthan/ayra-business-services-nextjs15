import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileAvatar = ({ username }: { username?: string | null }) => {
  return (
    <Avatar className="cursor-pointer">
      <AvatarImage src="" alt="@shadcn" className="bg-primary" />
      <AvatarFallback className="bg-light-700">
        {username?.slice(0, 2).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};

export default ProfileAvatar;
