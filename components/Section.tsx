import type { ReactNode } from "react";

export default function Section(props: {
  light?: boolean;
  className?: string;
  children: ReactNode;
  background?: ReactNode;
}): ReactNode {
  return (
    <section
      className={`relative flex flex-col items-center justify-center ${props.light === true ? "bg-lighterYellow text-sumiInk1 [&_a]:text-linkBlue" : "[&_a]:text-lighterBlue"} ${props.className ?? ""} py-8`}
    >
      {props.background}
      <div className="relative z-10 max-w-6xl w-screen flex flex-col gap-8 p-4">
        {props.children}
      </div>
    </section>
  );
}
