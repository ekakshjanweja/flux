"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { ConfirmDialog } from "./confirm-dialog";
import { Button } from "./ui/button";
import { useRenameDialog } from "@/store/use-rename-dialog";

interface ActionProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

export const Actions = ({
  children,
  side,
  sideOffset,
  id,
  title,
}: ActionProps) => {
  const onCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success("Link copied to clipboard"))
      .catch(() => toast.error("Failed to copy link"));
  };

  const { mutate, pending } = useApiMutation(api.board.remove);

  const onDelete = () => {
    mutate({ id })
      .then(() => toast.success("Board deleted"))
      .catch(() => toast.error("Failed to delete board"));
  };

  const { onOpen } = useRenameDialog();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent
          onClick={(e) => e.stopPropagation()}
          side={side}
          sideOffset={sideOffset}
          className="w-60"
        >
          <DropdownMenuItem className="p-3 cursor-pointer" onClick={onCopyLink}>
            <Link2 className="h-4 w-4 mr-2" />
            Copy Board Link
          </DropdownMenuItem>
          <DropdownMenuItem
            className="p-3 cursor-pointer"
            onClick={() => {
              onOpen(id, title);
            }}
          >
            <Pencil className="h-4 w-4 mr-2" />
            Rename Board
          </DropdownMenuItem>
          <ConfirmDialog
            header="Delete Board?"
            description="This will delete the board and all of its contents permanently."
            onConfirm={onDelete}
          >
            <Button
              className="p-3 cursor-pointer text-sm w-[230px] rounded-sm justify-start font-normal"
              variant="ghost"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Board
            </Button>
          </ConfirmDialog>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
