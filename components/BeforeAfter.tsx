import ClientScript from "./ClientScript";

type Image = {
  src: string;
  alt: string;
};

export default function BeforeAfter(props: {
  before: Image;
  after: Image;
  caption: React.ReactNode;
}): React.ReactNode {
  return (
    <>
      <figure>
        <div
          className="ba-wrap relative block overflow-hidden m-0 cursor-col-resize select-none"
          style={{ "--pos": `50%`, "--pos-ratio": 0.5 } as React.CSSProperties}
        >
          <img
            className="block w-full h-auto pointer-events-none align-top"
            src={props.after.src}
            alt={props.after.alt}
          />

          <div
            className="absolute inset-0 overflow-hidden bg-sumiInk1"
            style={{ width: "var(--pos, 50%)" }}
            aria-hidden="true"
          >
            <img
              className="block h-auto pointer-events-none align-top max-w-none"
              style={{ width: "calc(100% / var(--pos-ratio, 0.5))" }}
              src={props.before.src}
              alt=""
            />
          </div>

          {/* Divider line + handle */}
          <div
            className="absolute top-0 bottom-0 w-px bg-lighterYellow shadow-[0_0_4px_rgba(0,0,0,0.3)] flex items-center justify-center -translate-x-1/2"
            style={{ left: "var(--pos, 50%)" }}
            role="separator"
            aria-label="Drag to compare"
          >
            <button
              className="absolute cursor-col-resize bg-transparent border-0 p-0 flex items-center justify-center touch-none drop-shadow transition-transform duration-100 hover:scale-110 active:scale-95"
              type="button"
              aria-label="Drag to compare images"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  fill="RGBA(31,31,40,0.7)"
                  stroke="rgba(0,0,0,0.2)"
                  strokeWidth="1"
                />
                <path
                  d="M13 20l-5 0M17 20l-3-3M17 20l-3 3"
                  stroke="#E6E3CF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27 20l5 0M23 20l3-3M23 20l3 3"
                  stroke="#E6E3CF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <figcaption className="text-katanaGray text-center text-sm mt-2">
          {props.caption}
        </figcaption>
      </figure>
      <ClientScript fn={beforeAfter} />
    </>
  );
}

function beforeAfter() {
  function initWrap(wrap: HTMLElement) {
    function setPos(x: number) {
      var rect = wrap.getBoundingClientRect();
      var ratio = Math.min(1, Math.max(0, (x - rect.left) / rect.width));
      wrap.style.setProperty("--pos", ratio * 100 + "%");
      wrap.style.setProperty("--pos-ratio", ratio.toString());
    }

    var dragging = false;

    wrap.addEventListener("mousedown", function (e) {
      dragging = true;
      setPos(e.clientX);
      e.preventDefault();
    });
    window.addEventListener("mousemove", function (e) {
      if (dragging) setPos(e.clientX);
    });
    window.addEventListener("mouseup", function () {
      dragging = false;
    });

    wrap.addEventListener(
      "touchstart",
      function (e) {
        dragging = true;
        setPos(e.touches[0].clientX);
      },
      { passive: true },
    );
    wrap.addEventListener(
      "touchmove",
      function (e) {
        if (dragging) setPos(e.touches[0].clientX);
      },
      { passive: true },
    );
    wrap.addEventListener("touchend", function () {
      dragging = false;
    });
  }

  (document.querySelectorAll(".ba-wrap") as NodeListOf<HTMLElement>).forEach(
    initWrap,
  );
}
