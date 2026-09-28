import type { ReactNode } from "react";

export default function Card(props: {
  href: string;
  title: string;
  date?: string;
  description: string;
  screenshots: ReactNode;
  className?: string;
}): ReactNode {
  return (
    <a
      href={props.href}
      className="flex-1 flex flex-col rounded-xl bg-lighterYellow shadow items-start hover:underline"
    >
      <div
        className={`max-h-[15rem] w-full self-center overflow-hidden aspect-320/213 flex gap-2 items-between rounded-t-xl ${props.className ?? ""}`}
      >
        {props.screenshots}
      </div>
      <div className="text-sumiInk2 min-w-0 p-4 text-center flex flex-col gap-2 justify-between self-center">
        <h2 className="text-xl sm:text-2xl font-extrabold">{props.title}</h2>
        {props.date && <p className="text-lg sm:text-xl">{props.date}</p>}
        <p className="text-lg sm:text-xl">{props.description}</p>
      </div>
    </a>
  );
}

export function Img(props: {
  alt: string;
  src: string;
  object?: "contain" | "cover";
}): React.ReactNode {
  return (
    <img
      alt={props.alt}
      src={props.src}
      className={`w-full ${props.object === "contain" ? "object-contain" : "object-cover"}`}
    />
  );
}
