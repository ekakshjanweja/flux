import { Skeleton } from "@/components/ui/skeleton";

export const Info = () => {
  return (
    <>
      <div className="absolute top-2 left-2 bg-neutral-50 dark:bg-neutral-950 rounded-md px-1.5 h-12 flex items-center shadow-md">
        TODO: Information about the board
      </div>
    </>
  );
};

Info.Skeleton = function InfoSkeleton() {
  return (
    <>
      <div className="absolute top-2 left-2 rounded-md px-1.5 h-12 flex items-center">
        <Skeleton className="h-full w-[300px] bg-neutral-50 dark:bg-neutral-950 shadow-md" />
      </div>
    </>
  );
};
