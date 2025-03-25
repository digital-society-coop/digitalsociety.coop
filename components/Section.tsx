import type { ReactNode } from "react";

export default function Section(props: {
  light?: boolean;
  className?: string;
  children: ReactNode;
}): ReactNode {
  return (
    <section
      className={`flex flex-col items-center justify-center ${props.light === true ? "bg-lighterYellow text-sumiInk1 [&_a]:text-linkBlue" : "[&_a]:text-lighterBlue"} ${props.className ?? ""} pb-8`}
    >
      {props.children}
    </section>
  );
}
