import { create } from "zustand";

const defaultValues = { id: "" };

interface IDeleteDialog {
  isOpen: boolean;
  initialValues: typeof defaultValues;
  onOpenDeleteDialog: (id: string) => void;
  onCloseCloseDeleteDialog: () => void;
}

export const useDeleteDialog = create<IDeleteDialog>((set) => ({
  isOpen: false,
  onOpenDeleteDialog: (id) =>
    set({
      isOpen: true,
      initialValues: { id },
    }),
  onCloseCloseDeleteDialog: () =>
    set({
      isOpen: false,
      initialValues: defaultValues,
    }),
  initialValues: defaultValues,
}));
