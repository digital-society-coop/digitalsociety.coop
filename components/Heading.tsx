import type { ReactNode } from "react";

export default function Heading(props: {
  children: ReactNode;
  anchor?: string;
}): ReactNode {
  return (
    <h2 className="text-2xl sm:text-3xl my-6" id={props.anchor}>
      {props.children}
    </h2>
  );
}
