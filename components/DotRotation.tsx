import type { ReactNode } from "react";

import ClientScript from "./ClientScript";

function initDotGrid(): void {
  const section = document.currentScript?.closest("section");
  const canvasEl = section?.querySelector("canvas");
  if (!(canvasEl instanceof HTMLCanvasElement)) return;
  const canvas: HTMLCanvasElement = canvasEl;
  const rawCtx = canvas.getContext("2d");
  if (!rawCtx) return;
  const ctx: CanvasRenderingContext2D = rawCtx;

  let S: number = 0,
    DOT_R: number = 0,
    GAP: number = 0,
    W: number = 0,
    H: number = 0,
    OX: number = 0,
    OY: number = 0,
    dpr: number = 1,
    COLS: number = 0,
    ROWS: number = 0,
    CX: number = 0,
    CY: number = 0;

  let LINES: [number, number][] = [];

  function buildGrid(): void {
    COLS = Math.ceil(W / S) + 1;
    ROWS = Math.ceil(H / S) + 1;
    OX = (W - (COLS - 1) * S) / 2;
    OY = (H - (ROWS - 1) * S) / 2;
    CX = (COLS - 1) / 2;
    CY = (ROWS - 1) / 2;
    MAX_PULSES = Math.ceil(COLS * ROWS * 0.1);
    LINES = [];
    for (let r = 0; r < ROWS; r++)
      for (let c = 0; c < COLS - 1; c++)
        LINES.push([r * COLS + c, r * COLS + c + 1]);
    for (let r = 0; r < ROWS - 1; r++)
      for (let c = 0; c < COLS; c++)
        LINES.push([r * COLS + c, (r + 1) * COLS + c]);
  }

  function dotPos(i: number) {
    const r = (i / COLS) | 0;
    const c = i % COLS;
    return { x: OX + c * S, y: OY + r * S, r, c };
  }

  function setup(): void {
    dpr = window.devicePixelRatio || 1;
    W = canvas.offsetWidth;
    H = canvas.offsetHeight;
    S = Math.min(Math.min(W, H) * 0.205, 60);
    DOT_R = Math.max(4.5, S * 0.048);
    GAP = DOT_R * 2.5;
    buildGrid();
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
  }

  function draw(
    t: number,
    pulsingDots: { dot: number; progress: number }[] = [],
  ): void {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    const theta = t * Math.PI * 2;
    const env = Math.sin(t * Math.PI);
    ctx.lineCap = "butt";
    LINES.forEach(([ai, bi]) => {
      const a = dotPos(ai);
      const b = dotPos(bi);
      const mx = (a.x + b.x) * 0.5;
      const my = (a.y + b.y) * 0.5;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const origAngle = Math.atan2(dy, dx);
      const halfLen = Math.hypot(dx, dy) * 0.5 - GAP;
      if (halfLen <= 0) return;
      const cr = (a.r + b.r) * 0.5;
      const cc = (a.c + b.c) * 0.5;
      const dist = Math.hypot(cr - CY, cc - CX);
      const wave = Math.sin(theta * 2.6 + dist * 1.85) * env * 0.24;
      const angle = origAngle + theta + wave;
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      ctx.beginPath();
      ctx.moveTo(mx + halfLen * cosA, my + halfLen * sinA);
      ctx.lineTo(mx - halfLen * cosA, my - halfLen * sinA);
      ctx.strokeStyle = "#957fb8";
      ctx.lineWidth = DOT_R * 1.3;
      ctx.stroke();
    });
    for (let i = 0; i < COLS * ROWS; i++) {
      const p = dotPos(i);
      const pulse = pulsingDots.find((pd) => pd.dot === i);
      ctx.beginPath();
      if (pulse) {
        const bright = Math.sin(pulse.progress * Math.PI);
        const ri = Math.round(149 + (255 - 149) * bright);
        const gi = Math.round(127 + (255 - 127) * bright);
        const bi = Math.round(184 + (255 - 184) * bright);
        ctx.fillStyle = `rgb(${ri},${gi},${bi})`;
        ctx.arc(p.x, p.y, DOT_R * 1.1, 0, Math.PI * 2);
      } else {
        ctx.arc(p.x, p.y, DOT_R, 0, Math.PI * 2);
        ctx.fillStyle = "#957fb8";
      }
      ctx.fill();
    }
  }

  let rafId: number = 0;
  let currentT: number = 0;
  let idleRafId: number = 0;
  let idleTimer: number = 0;
  let pulses: { dot: number; start: number }[] = [];
  let pulseOrder: number[] = [];
  let pulseIdx: number = 0;
  const PULSE_MS = 2000;
  let MAX_PULSES = 10;
  const STAGGER_MS = 200;

  function shuffleDots(): void {
    pulseOrder = Array.from({ length: COLS * ROWS }, (_, i) => i);
    for (let i = pulseOrder.length - 1; i > 0; i--) {
      const j = (Math.random() * (i + 1)) | 0;
      const tmp = pulseOrder[i];
      pulseOrder[i] = pulseOrder[j];
      pulseOrder[j] = tmp;
    }
    pulseIdx = 0;
  }

  function idleTick(ts: number): void {
    pulses = pulses.filter((p) => ts - p.start < PULSE_MS);
    const canAdd =
      pulses.length < MAX_PULSES &&
      (pulses.length === 0 ||
        ts - pulses[pulses.length - 1].start >= STAGGER_MS);
    if (canAdd) {
      if (pulseIdx >= pulseOrder.length) shuffleDots();
      pulses.push({ dot: pulseOrder[pulseIdx++], start: ts });
    }
    const active = pulses.map((p) => ({
      dot: p.dot,
      progress: (ts - p.start) / PULSE_MS,
    }));
    draw(currentT, active);
    idleRafId = requestAnimationFrame(idleTick);
  }

  function startIdle(): void {
    if (idleRafId) return;
    if (pulseOrder.length === 0) shuffleDots();
    const now = performance.now();
    pulses = [];
    for (let i = 0; i < MAX_PULSES; i++) {
      if (pulseIdx >= pulseOrder.length) shuffleDots();
      pulses.push({
        dot: pulseOrder[pulseIdx++],
        start: now - i * (PULSE_MS / MAX_PULSES),
      });
    }
    idleRafId = requestAnimationFrame(idleTick);
  }

  function stopIdle(): void {
    cancelAnimationFrame(idleRafId);
    idleRafId = 0;
    pulses = [];
  }

  function onScroll(): void {
    stopIdle();
    clearTimeout(idleTimer);
    const hero = canvas.parentElement;
    if (!hero) return;
    const viewportH = window.innerHeight;
    const startScroll = Math.max(hero.offsetTop - viewportH, 0);
    const endScroll = Math.min(
      hero.offsetTop + hero.offsetHeight,
      document.documentElement.scrollHeight - viewportH,
    );
    const t = Math.min(
      Math.max((window.scrollY - startScroll) / (endScroll - startScroll), 0),
      1,
    );
    currentT = t;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => draw(t));
    idleTimer = setTimeout(startIdle, 800) as unknown as number;
  }

  function run(): void {
    setup();
    draw(0);
    startIdle();
    window.addEventListener("resize", () => {
      setup();
      draw(currentT);
    });
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    requestAnimationFrame(run);
  }
}

export default function DotRotation({
  side,
}: {
  side: "left" | "right";
}): ReactNode {
  const isRight = side === "right";
  return (
    <>
      <canvas
        className={`absolute ${isRight ? "right-0" : "left-0"} top-0 h-full w-[60%] pointer-events-none`}
        style={{
          WebkitMaskImage: `linear-gradient(to ${side}, rgba(0,0,0,0.01), rgba(0,0,0,0.3))`,
          maskImage: `linear-gradient(to ${side}, rgba(0,0,0,0.01), rgba(0,0,0,0.3))`,
        }}
      />
      <ClientScript fn={initDotGrid} />
    </>
  );
}
