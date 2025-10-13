import type { ReactNode } from "react";

export default function Link(props: {
  children: ReactNode;
  href: string;
  target?: "_blank" | "_self " | "_parent " | "_top " | "framename";
  event?: string;
  className?: string;
}): ReactNode {
  return (
    <a
      className={`hover:no-underline underline break-words ${props.className ?? ""}`}
      href={props.href}
      target={props.target ?? (props.href.startsWith("http") ? "_blank" : "")}
      data-umami-event={props.event}
    >
      {props.children}
    </a>
  );
}
