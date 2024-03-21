"use client";

import { useRenameDialog } from "@/store/use-rename-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export const DeleteDialog = () => {
  const { isOpen, onClose, initialValues } = useRenameDialog();

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Board?</DialogTitle>
            <DialogDescription>
              This will delete the board and all of its contents permanently.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
