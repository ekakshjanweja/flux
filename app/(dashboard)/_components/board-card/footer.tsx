import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface FooterProps {
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  isFavorite: boolean;
  onClick: () => void;
  disabled: boolean;
}

export const Footer = ({
  title,
  authorLabel,
  createdAtLabel,
  isFavorite,
  onClick,
  disabled,
}: FooterProps) => {
  return (
    <>
      <div className="relative bg-blue-50 dark:bg-blue-950 group-hover:bg-pink-50 group-hover:dark:bg-pink-950 dark:bg-opacity-30 group-hover:dark:bg-opacity-50 bg-opacity-30 group-hover:bg-opacity-50  p-3 transition duration-500">
        <div className="flex justify-between items-center">
          <p className="truncate max-w-sm text-lg">{title}</p>
          <button
            disabled={disabled}
            onClick={onClick}
            className="text-muted-foreground hover:text-foreground transition duration-500 top-3 right-3"
          >
            <Star
              className={cn(
                "h-4 w-4",
                isFavorite &&
                  "fill-muted-foreground group-hover:fill-foreground"
              )}
            />
          </button>
        </div>{" "}
        <p className="text-muted-foreground group-hover:text-foreground truncate transition duration-500">
          {authorLabel}, {createdAtLabel}
        </p>
      </div>
    </>
  );
};
