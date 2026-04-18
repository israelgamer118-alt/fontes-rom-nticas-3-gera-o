import { useEffect, useRef, useState } from "react";

const SIZE = 56; // px rendered cursor size
// Fingertip located at ~(17, 9) within a 32x32 viewBox
const TIP_X_RATIO = 17 / 32;
const TIP_Y_RATIO = 9 / 32;

const CustomCursor = () => {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const tilt = useRef(0);
  const targetTilt = useRef(0);
  const lastX = useRef(0);
  const lastT = useRef(performance.now());
  const raf = useRef<number | null>(null);
  const [pressed, setPressed] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop)
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setEnabled(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("custom-cursor-active");

    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;

      const now = performance.now();
      const dt = Math.max(1, now - lastT.current);
      const vx = (e.clientX - lastX.current) / dt; // px per ms
      lastX.current = e.clientX;
      lastT.current = now;
      // Tilt based on horizontal velocity, clamped
      const t = Math.max(-18, Math.min(18, vx * 6));
      targetTilt.current = t;
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);

    const tick = () => {
      // Smooth follow
      pos.current.x += (target.current.x - pos.current.x) * 0.35;
      pos.current.y += (target.current.y - pos.current.y) * 0.35;
      // Tilt easing + decay back to 0
      tilt.current += (targetTilt.current - tilt.current) * 0.15;
      targetTilt.current *= 0.85;

      if (ref.current) {
        const tipOffsetX = SIZE * TIP_X_RATIO;
        const tipOffsetY = SIZE * TIP_Y_RATIO;
        ref.current.style.transform = `translate3d(${pos.current.x - tipOffsetX}px, ${pos.current.y - tipOffsetY}px, 0) rotate(${tilt.current}deg)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{
        width: SIZE,
        height: SIZE,
        // Rotation pivot at the fingertip
        transformOrigin: `${TIP_X_RATIO * 100}% ${TIP_Y_RATIO * 100}%`,
        willChange: "transform",
      }}
    >
      <img
        src="/cursor-hand.svg"
        alt=""
        draggable={false}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          transform: pressed ? "scale(0.86)" : "scale(1)",
          transformOrigin: `${TIP_X_RATIO * 100}% ${TIP_Y_RATIO * 100}%`,
          transition: "transform 320ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </div>
  );
};

export default CustomCursor;
