import type { ReactNode } from "react";

export default function Section(props: {
  light?: boolean;
  className?: string;
  children: ReactNode;
}): ReactNode {
  return (
    <>
      {props.light === true && (
        <div className="bg-linear-to-bl h-10 md:h-20 from-sumiInk1 from-49% to-lighterYellow to-50%" />
      )}
      <section
        className={`flex flex-col items-center justify-center ${props.light === true ? "bg-lighterYellow text-sumiInk1 [&_a]:text-linkBlue" : "[&_a]:text-lighterBlue"} ${props.className ?? ""} pb-8`}
      >
        {props.children}
      </section>
      {props.light === true && (
        <div className="bg-linear-to-br h-10 md:h-20 to-sumiInk1 from-49% from-lighterYellow to-50%" />
      )}
    </>
  );
}
