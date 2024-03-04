import { useTheme } from "next-themes";
import Image from "next/image";

export const EmptySearch = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className="flex flex-col h-full items-center justify-center">
        <Image
          src={
            theme === "dark"
              ? "/empy_search_white.svg"
              : "/empy_search_black.svg"
          }
          alt="Empty Search"
          height={140}
          width={140}
        />
        <h2 className="text-2xl font-semibold mt-6">No Results Found!</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Try searching for something else.
        </p>
      </div>
    </>
  );
};
