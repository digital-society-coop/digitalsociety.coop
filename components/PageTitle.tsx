import type { ReactNode } from "react";

export default function PageTitle(props: { children: ReactNode }): ReactNode {
  return (
    <h1 className="text-4xl mb-8 text-3xl sm:text-5xl">{props.children}</h1>
  );
}
