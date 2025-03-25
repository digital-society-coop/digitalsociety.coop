import type { ReactNode } from "react";

export default function Figure(props: {
  src: string;
  alt: string;
  caption: string;
}): ReactNode {
  return (
    <figure className="text-center mx-auto my-8 w-[12rem]">
      <img
        className="h-[6rem] aspect-square object-contain mx-auto"
        alt={props.alt}
        src={props.src}
      />
      <figcaption>{props.caption}</figcaption>
    </figure>
  );
}
