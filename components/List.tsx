import type { ReactNode } from "react";

export default function List(props: { children: ReactNode }): ReactNode {
  return (
    <ul className="flex flex-col gap-3 list-disc *:ml-10">{props.children}</ul>
  );
}
