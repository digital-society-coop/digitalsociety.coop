import type { ReactNode } from "react";

export default function Container(props: { children: ReactNode }): ReactNode {
  return <div className="flex flex-col gap-4">{props.children}</div>;
}
