"use client";

import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas";

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return (
    <>
      <div className="flex flex-wrap gap-2 items-center max-w-[300px] pr-2 mr-2 border-r py-2 border-muted-foreground">
        <ColorButton
          onClick={onChange}
          color={{
            r: 224,
            g: 49,
            b: 49,
          }}
        />
        <ColorButton
          onClick={onChange}
          color={{
            r: 47,
            g: 158,
            b: 68,
          }}
        />
        <ColorButton
          onClick={onChange}
          color={{
            r: 240,
            g: 140,
            b: 0,
          }}
        />
        <ColorButton
          onClick={onChange}
          color={{
            r: 10,
            g: 151,
            b: 245,
          }}
        />
        <ColorButton
          onClick={onChange}
          color={{
            r: 170,
            g: 60,
            b: 250,
          }}
        />
        <ColorButton
          onClick={onChange}
          color={{
            r: 255,
            g: 255,
            b: 255,
          }}
        />
        <ColorButton
          onClick={onChange}
          color={{
            r: 0,
            g: 0,
            b: 0,
          }}
        />

        <ColorButton
          onClick={onChange}
          color={{
            r: 227,
            g: 140,
            b: 140,
          }}
        />
        <ColorButton
          onClick={onChange}
          color={{
            r: 120,
            g: 214,
            b: 131,
          }}
        />
        <ColorButton
          onClick={onChange}
          color={{
            r: 214,
            g: 164,
            b: 120,
          }}
        />
        <ColorButton
          onClick={onChange}
          color={{
            r: 120,
            g: 180,
            b: 240,
          }}
        />
        <ColorButton
          onClick={onChange}
          color={{
            r: 195,
            g: 121,
            b: 230,
          }}
        />
      </div>
    </>
  );
};

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
}

const ColorButton = ({ color, onClick }: ColorButtonProps) => {
  return (
    <>
      <button
        className="w-8 h-8 flex items-center justify-center hover:opacity-75 border border-muted-foreground rounded-md"
        onClick={() => onClick(color)}
      >
        <div
          className="h-8 w-8 rounded-md border-muted-foreground"
          style={{ background: colorToCss(color) }}
        ></div>
      </button>
    </>
  );
};
