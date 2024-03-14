"use client";

import { Actions } from "@/components/actions";
import { Hint } from "@/components/hint";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useRenameDialog } from "@/store/use-rename-dialog";
import { useQuery } from "convex/react";
import { Menu } from "lucide-react";

interface InfoProps {
  boardId: string;
}

export const Info = ({ boardId }: InfoProps) => {
  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  const { onOpen } = useRenameDialog();

  if (!data) {
    return (
      <>
        <InfoSkeleton />
      </>
    );
  }

  return (
    <>
      <div className="absolute top-2 left-2 bg-neutral-50 dark:bg-neutral-950 rounded-md px-4 py-4 h-12 flex items-center shadow-md">
        <Hint label="Go to boards" side="bottom" sideOffset={10}>
          <div className="flex items-center justify-start">
            <Logo />
          </div>
        </Hint>
        <div className="pl-4" />
        <TabSeparator />
        <Hint label="Edit Title" side="bottom" sideOffset={10}>
          <Button
            className="px-2 text-sm"
            variant="ghost"
            onClick={() => {
              onOpen(data._id, data.title);
            }}
          >
            {data.title}
          </Button>
        </Hint>
        <TabSeparator />

        <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
          <div>
            <Hint label="Main Menu" side="bottom" sideOffset={10}>
              <Button
                size="icon"
                variant="ghost"
                className="hover:text-foreground text-muted-foreground"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </Hint>
          </div>
        </Actions>
      </div>
    </>
  );
};

export const InfoSkeleton = () => {
  return (
    <>
      <div className="absolute top-2 left-2 rounded-md px-1.5 h-12 flex items-center">
        <Skeleton className="h-full w-[300px] bg-neutral-50 dark:bg-neutral-950 shadow-md" />
      </div>
    </>
  );
};

const TabSeparator = () => {
  return <div className="px-1.5 text-muted-foreground">|</div>;
};
