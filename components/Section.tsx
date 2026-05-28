import type { ReactNode } from "react";

type Color = "green" | "light";

function getColor(color?: Color): string {
  if (color == null) return "[&_a]:text-oniViolet2";
  switch (color) {
    case "green":
      return "bg-waveAqua2 text-sumiInk1";
    case "light":
      return "bg-lighterYellow text-sumiInk1";
  }
}

export default function Section(props: {
  color?: Color;
  className?: string;
  children: ReactNode;
  background?: ReactNode;
}): ReactNode {
  return (
    <section
      className={`relative flex flex-col items-center justify-center py-8 ${getColor(props.color)} ${props.className ?? ""}`}
    >
      {props.background}
      <div className="relative z-10 max-w-6xl w-screen flex flex-col gap-8 p-4">
        {props.children}
      </div>
    </section>
  );
}
