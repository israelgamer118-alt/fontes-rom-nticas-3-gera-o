import { useEffect, useRef, useState } from "react";

interface DraggableMarqueeProps {
  items: string[];
  speed?: number; // pixels per second
}

const DraggableMarquee = ({ items, speed = 40 }: DraggableMarqueeProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const lastDragXRef = useRef(0);
  const lastDragTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const apply = () => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    }
  };

  const normalize = () => {
    const half = halfWidthRef.current;
    if (!half) return;
    while (offsetRef.current <= -half) offsetRef.current += half;
    while (offsetRef.current > 0) offsetRef.current -= half;
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      halfWidthRef.current = track.scrollWidth / 2;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);

    const tick = (t: number) => {
      if (lastTimeRef.current == null) lastTimeRef.current = t;
      const dt = (t - lastTimeRef.current) / 1000;
      lastTimeRef.current = t;

      if (draggingRef.current) {
        // do nothing, position set by pointer
      } else {
        // base auto speed + decaying inertia
        const auto = -speed;
        const v = auto + velocityRef.current;
        offsetRef.current += v * dt;
        // decay inertia
        velocityRef.current *= Math.pow(0.001, dt); // strong decay over time
        if (Math.abs(velocityRef.current) < 1) velocityRef.current = 0;
      }
      normalize();
      apply();
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [speed]);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    lastDragXRef.current = e.clientX;
    lastDragTimeRef.current = performance.now();
    velocityRef.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - dragStartXRef.current;
    offsetRef.current = dragStartOffsetRef.current + dx;

    const now = performance.now();
    const dt = (now - lastDragTimeRef.current) / 1000;
    if (dt > 0) {
      velocityRef.current = (e.clientX - lastDragXRef.current) / dt;
    }
    lastDragXRef.current = e.clientX;
    lastDragTimeRef.current = now;
  };

  const endDrag = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setIsDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
    // clamp inertia velocity
    const max = 2500;
    if (velocityRef.current > max) velocityRef.current = max;
    if (velocityRef.current < -max) velocityRef.current = -max;
  };

  return (
    <div
      className="overflow-hidden border-y border-ink/10 py-3 sm:py-4 select-none touch-pan-y"
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
    >
      <div
        ref={trackRef}
        className="flex w-max gap-8 sm:gap-12 font-display text-2xl text-ink/30 sm:text-4xl md:text-5xl will-change-transform"
        style={{ touchAction: "pan-y" }}
      >
        {[0, 1].map((i) => (
          <div key={i} className="flex shrink-0 gap-8 sm:gap-12" aria-hidden={i === 1}>
            {items.map((item, idx) => (
              <span key={`${i}-${idx}`} className="shrink-0">
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DraggableMarquee;
