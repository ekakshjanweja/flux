import { Hint } from "@/components/hint";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

interface UserAvatarProps {
  src?: string;
  name?: string;
  fallback?: string;
  borderColor?: string;
}

export const UserAvatar = ({
  src,
  name,
  fallback,
  borderColor,
}: UserAvatarProps) => {
  return (
    <>
      <Hint label={name || "Anonymous"} side="bottom" sideOffset={20}>
        <Avatar className="h-8 w-8 border-2" style={{ borderColor }}>
          <AvatarImage src={src} />
          <AvatarFallback className="text-xs font-semibold">
            {fallback}
          </AvatarFallback>
        </Avatar>
      </Hint>
    </>
  );
};
