import { Skeleton } from "@/components/ui/skeleton";

export const Participants = () => {
  return (
    <>
      <div className="absolute h-12 top-2 right-2 bg-neutral-50 dark:bg-neutral-950 rounded-md p-3 float-start items-center shadow-md">
        List of users
      </div>
    </>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <>
      <div className="absolute top-2 right-2 rounded-md px-1.5 float-start items-center ">
        <Skeleton className="bg-neutral-50 dark:bg-neutral-950 shadow-md h-12 w-[100px]" />
      </div>
    </>
  );
};
