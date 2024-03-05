"use client";

import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

interface CanvasProps {
  boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
  return (
    <>
      <main className="h-full w-full relative bg-neutral-100 touch-none dark:bg-neutral-800">
        <Info />
        <Participants />
        <Toolbar />
      </main>
    </>
  );
};
