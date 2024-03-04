import Image from "next/image";

export const EmptyFavorites = () => {
  return (
    <>
      <div className="flex flex-col h-full items-center justify-center">
        <Image
          src={"/empty_favs.svg"}
          alt="Empty Favs"
          height={140}
          width={140}
        />
        <h2 className="text-2xl font-semibold mt-6">No Favorite Boards!</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Try marking a board as favorite.
        </p>
      </div>
    </>
  );
};
