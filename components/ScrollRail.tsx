"use client";

import { useEffect, useRef } from "react";

/** Thin progress bar pinned to the top of the viewport. */
export default function ScrollRail() {
  const fillRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const el = fillRef.current;
      if (!el) return;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      el.style.width = `${Math.min(100, Math.max(0, progress * 100))}%`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="dfy-scrollrail" aria-hidden="true">
      <i ref={fillRef} />
    </div>
  );
}
