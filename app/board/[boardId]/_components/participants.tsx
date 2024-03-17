"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useOthers, useSelf } from "@/liveblocks.config";
import { UserAvatar } from "./user-avatar";

const MAX_SHOWN_USERS = 4;

export const Participants = () => {
  const users = useOthers();
  const currentUser = useSelf();

  const hasMoreUsers = users.length > MAX_SHOWN_USERS;

  return (
    <>
      <div className="absolute top-2 right-2 bg-neutral-50 dark:bg-neutral-950 rounded-md p-2 float-start items-center justify-center shadow-md">
        <div className="flex gap-x-2">
          {users.slice(0, MAX_SHOWN_USERS).map(({ connectionId, info }) => {
            return (
              <>
                <UserAvatar
                  key={connectionId}
                  src={info?.picture}
                  name={info?.name}
                  fallback={info?.name?.charAt(0) || "A}"}
                />
              </>
            );
          })}
          {currentUser && (
            <UserAvatar
              src={currentUser.info?.picture}
              name={`${currentUser.info?.name} (You)`}
              fallback={currentUser.info?.name?.charAt(0)}
            />
          )}
        </div>
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
