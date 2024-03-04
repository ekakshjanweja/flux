"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    mutate({
      orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created");
        //TODO: redirect to the new board
      })
      .catch(() => {
        toast.error("Failed to create board");
      });
  };
  return (
    <>
      <button
        disabled={pending}
        onClick={onClick}
        className={cn(
          "col-span-1 aspect-square text-white rounded-lg hover:bg-blue-800 bg-blue-500 dark:bg-blue-800 hover:dark:bg-blue-500 transition duration-500 flex flex-col items-center justify-center p-6",
          (pending || disabled) &&
            "opacity-50 cursor-not-allowed bg-blue-500 dark:bg-blue-800"
        )}
      >
        <div />
        <Plus className="h-12 w-12 stroke-1" />
        <p className="text-sm"> New Board</p>
      </button>
    </>
  );
};
