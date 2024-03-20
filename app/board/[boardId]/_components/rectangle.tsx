import { colorToCss } from "@/lib/utils";
import { RectangleLayer } from "@/types/canvas";

interface RectanlgeProps {
  id: string;
  layer: RectangleLayer;
  onPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
}

export const Rectangle = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: RectanlgeProps) => {
  const { x, y, height, width, fill } = layer;

  return (
    <>
      <rect
        className="drop-shadow-md"
        onPointerDown={(e) => {
          onPointerDown(e, id);
        }}
        style={{
          transform: `translate(${x}px, ${y}px)`,
        }}
        x={0}
        y={0}
        width={width}
        height={height}
        strokeWidth={1}
        stroke={selectionColor || "transparent"}
        fill={fill ? colorToCss(fill) : "#FFFFFF"}
      />
    </>
  );
};
