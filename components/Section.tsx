import type { ReactNode } from "react";

export default function Section(props: {
  light?: boolean;
  className?: string;
  children: ReactNode;
}): ReactNode {
  return (
    <section
      className={`flex flex-col items-center justify-center ${props.light === true ? "bg-lighterYellow text-sumiInk1 [&_a]:text-linkBlue" : "[&_a]:text-lighterBlue"} ${props.className ?? ""} py-8`}
    >
      <div className="max-w-6xl w-screen flex flex-col gap-8 p-4">
        {props.children}
      </div>
    </section>
  );
}
