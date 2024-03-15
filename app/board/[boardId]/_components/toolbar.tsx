import { Skeleton } from "@/components/ui/skeleton";
import { ToolButton } from "./tool-button";
import {
  Circle,
  MousePointer2,
  Pencil,
  Redo2,
  Square,
  StickyNote,
  Type,
  Undo2,
} from "lucide-react";

export const Toolbar = () => {
  return (
    <>
      <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
        <div className="bg-neutral-50 dark:bg-neutral-950 rounded-md p-1.5 float-start gap-y-1 flex flex-col items-center shadow-md">
          <ToolButton
            label="Select"
            icon={MousePointer2}
            onClick={() => {}}
            isActive={false}
          />

          <ToolButton
            label="Text"
            icon={Type}
            onClick={() => {}}
            isActive={false}
          />

          <ToolButton
            label="Sticky Note"
            icon={StickyNote}
            onClick={() => {}}
            isActive={false}
          />

          <ToolButton
            label="Rectangle"
            icon={Square}
            onClick={() => {}}
            isActive={false}
          />

          <ToolButton
            label="Ellipse"
            icon={Circle}
            onClick={() => {}}
            isActive={false}
          />

          <ToolButton
            label="Pen"
            icon={Pencil}
            onClick={() => {}}
            isActive={false}
          />
        </div>
        <div className="bg-neutral-50 dark:bg-neutral-950 rounded-md p-1.5 flex flex-col items-center shadow-md">
          <ToolButton
            label="Undo"
            icon={Undo2}
            onClick={() => {}}
            isActive={false}
            isDisabled={true}
          />

          <ToolButton
            label="Redo"
            icon={Redo2}
            onClick={() => {}}
            isActive={false}
            isDisabled={true}
          />
        </div>
      </div>
    </>
  );
};

export const ToolbarSkeleton = () => {
  return (
    <>
      <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 w-[50px]">
        <Skeleton className="bg-neutral-50 dark:bg-neutral-950 w-[52px] h-[200px] shadow-md rounded-md" />
        <Skeleton className="bg-neutral-50 dark:bg-neutral-950 w-[52px] h-[75px] shadow-md rounded-md" />
      </div>
    </>
  );
};
