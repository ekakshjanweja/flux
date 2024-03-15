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
import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";

interface ToolbarProps {
  canvasState: CanvasState;
  setCanvasState: (state: CanvasState) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

export const Toolbar = ({
  canvasState,
  setCanvasState,
  undo,
  redo,
  canUndo,
  canRedo,
}: ToolbarProps) => {
  return (
    <>
      <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
        <div className="bg-neutral-50 dark:bg-neutral-950 rounded-md p-1.5 float-start gap-y-1 flex flex-col items-center shadow-md">
          <ToolButton
            label="Select"
            icon={MousePointer2}
            onClick={() => setCanvasState({ mode: CanvasMode.None })}
            isActive={
              canvasState.mode === CanvasMode.None ||
              canvasState.mode === CanvasMode.Translating ||
              canvasState.mode === CanvasMode.SelectionNet ||
              canvasState.mode === CanvasMode.Pressing ||
              canvasState.mode === CanvasMode.Resizing
            }
          />

          <ToolButton
            label="Text"
            icon={Type}
            onClick={() =>
              setCanvasState({
                mode: CanvasMode.Inserting,
                layerType: LayerType.Text,
              })
            }
            isActive={
              canvasState.mode === CanvasMode.Inserting &&
              canvasState.layerType === LayerType.Text
            }
          />

          <ToolButton
            label="Sticky Note"
            icon={StickyNote}
            onClick={() =>
              setCanvasState({
                mode: CanvasMode.Inserting,
                layerType: LayerType.Note,
              })
            }
            isActive={
              canvasState.mode === CanvasMode.Inserting &&
              canvasState.layerType === LayerType.Note
            }
          />

          <ToolButton
            label="Rectangle"
            icon={Square}
            onClick={() =>
              setCanvasState({
                mode: CanvasMode.Inserting,
                layerType: LayerType.Rectangle,
              })
            }
            isActive={
              canvasState.mode === CanvasMode.Inserting &&
              canvasState.layerType === LayerType.Rectangle
            }
          />

          <ToolButton
            label="Ellipse"
            icon={Circle}
            onClick={() =>
              setCanvasState({
                mode: CanvasMode.Inserting,
                layerType: LayerType.Ellipse,
              })
            }
            isActive={
              canvasState.mode === CanvasMode.Inserting &&
              canvasState.layerType === LayerType.Ellipse
            }
          />

          <ToolButton
            label="Pen"
            icon={Pencil}
            onClick={() =>
              setCanvasState({
                mode: CanvasMode.Pencil,
              })
            }
            isActive={canvasState.mode === CanvasMode.Pencil}
          />
        </div>
        <div className="bg-neutral-50 dark:bg-neutral-950 rounded-md p-1.5 flex flex-col items-center shadow-md">
          <ToolButton
            label="Undo"
            icon={Undo2}
            onClick={undo}
            isActive={false}
            isDisabled={!canUndo}
          />

          <ToolButton
            label="Redo"
            icon={Redo2}
            onClick={redo}
            isActive={false}
            isDisabled={!canRedo}
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
