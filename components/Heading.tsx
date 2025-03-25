import type { ReactNode } from "react";

export default function Heading(props: { children: ReactNode }): ReactNode {
  return <h2 className="text-xl sm:text-3xl my-6">{props.children}</h2>;
}

