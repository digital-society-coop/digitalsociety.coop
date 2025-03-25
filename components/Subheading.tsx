import type { ReactNode } from "react";

export default function Subheading(props: { children: ReactNode }): ReactNode {
  return <h3 className="text-lg sm:text-xl my-4">{props.children}</h3>;
}
