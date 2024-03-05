"use client";

import { RenameDialog } from "@/components/dialogs/rename-dialog";
import { useEffect, useState } from "react";

export const DialogProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    setIsMounted(true);
  }
  return (
    <>
      <RenameDialog />
    </>
  );
};
