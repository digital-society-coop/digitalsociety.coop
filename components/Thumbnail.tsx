import { ReactNode } from "react";
import ClientScript from "./ClientScript";

export type ThumbnailProps = {
  alt: string;
  src: string;
  thumbClassName?: string;
  containerClassName?: string;
};

export default function Thumbnail(props: ThumbnailProps): ReactNode {
  return (
    <>
      <img
        id={`${props.src}-thumb`}
        alt={props.alt}
        src={props.src}
        className={`h-[12rem] object-contain rounded-xl cursor-pointer ${props.thumbClassName ?? ""}`}
      />
      <dialog
        id={`${props.src}-dialog`}
        className="inset-0 size-full max-h-full max-w-full bg-transparent backdrop-blur-sm open:flex items-center justify-center p-2 md:p-12"
        /* @ts-ignore */
        closedBy="any"
      >
        <div
          id={`${props.src}-container`}
          className={`relative max-w-full max-h-full overflow-hidden rounded-lg bg-linkBlue text-right ${props.containerClassName ?? ""}`}
        >
          <a
            id={`${props.src}-close`}
            className="inline-block m-1 mr-2 p-1 rounded-sm cursor-pointer text-lighterYellow! hover:bg-waveBlue2!"
          >
            Close
          </a>
          <img
            id={`${props.src}-img`}
            alt={props.alt}
            src={props.src}
            className="max-w-full max-h-[calc(100vh-4rem)] md:max-h-[calc(100vh-8rem)] w-auto h-auto"
          />
        </div>
      </dialog>
      <ClientScript
        fn={setupThumbnail}
        args={[
          "window.thumbnails || (window.thumbnails = [])",
          JSON.stringify(props.src),
        ]}
      />
    </>
  );
}

// This function isn't called inline, but is injected into the HTML.
function setupThumbnail(items: string[], src: string) {
  items.push(src);

  const idx = items.length - 1;
  let currentIdx = idx;

  const thumb = document.getElementById(`${src}-thumb`);
  const dialogEl = document.getElementById(`${src}-dialog`);
  const container = document.getElementById(`${src}-container`);
  const close = document.getElementById(`${src}-close`);
  const imgEl = document.getElementById(`${src}-img`);

  let dialog: HTMLDialogElement;
  if (dialogEl instanceof HTMLDialogElement) {
    dialog = dialogEl;
  } else {
    throw new Error(
      `Unable to configure thumbnail for src=${src}: couldn't find ${src}-dialog`,
    );
  }

  let img: HTMLImageElement;
  if (imgEl instanceof HTMLImageElement) {
    img = imgEl;
  } else {
    throw new Error(
      `Unable to configure thumbnail for src=${src}: couldn't find ${src}-img`,
    );
  }

  thumb.addEventListener("click", () => {
    dialog.showModal();
    document.body.classList.add("overflow-hidden");
    document.addEventListener("keydown", onKeydown);
  });

  close.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
  });

  dialog.addEventListener("click", () => {
    dialog.close();
  });

  container.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  dialog.addEventListener("cancel", () => {
    onClose();
  });

  dialog.addEventListener("close", () => {
    onClose();
  });

  function onClose() {
    currentIdx = idx;
    img.src = items[idx];
    document.body.classList.remove("overflow-hidden");
    document.removeEventListener("keydown", onKeydown);
  }

  function onKeydown(e: KeyboardEvent) {
    switch (e.key) {
      case "ArrowLeft":
        if (currentIdx > 0) {
          img.src = items[--currentIdx];
        }
        break;
      case "ArrowRight":
        if (currentIdx < items.length - 1) {
          img.src = items[++currentIdx];
        }
        break;
    }
  }
}
