import type { ReactNode } from "react";

export default function Figure(props: {
  src: string;
  alt: string;
  caption: string;
  large?: boolean;
}): ReactNode {
  return (
    <figure
      className={`text-center mx-auto my-8 ${props.large === true ? "" : "w-[12rem]"}`}
    >
      <img
        className={`${props.large === true ? "h-[15rem]" : "h-[6rem]"} aspect-square object-contain mx-auto`}
        alt={props.alt}
        src={props.src}
      />
      <figcaption>{props.caption}</figcaption>
    </figure>
  );
}
