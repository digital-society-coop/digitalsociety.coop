import type { ReactNode } from "react";

export default function Container(props: { children: ReactNode }): ReactNode {
  return (
    <div className="max-w-6xl p-4 w-screen flex flex-col gap-4">
      {props.children}
    </div>
  );
}
