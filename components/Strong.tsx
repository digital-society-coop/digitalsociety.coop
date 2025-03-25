import type { ReactNode } from "react";

export default function List(props: { children: ReactNode }): ReactNode {
  return <strong className="text-waveAqua2">{props.children}</strong>;
}
