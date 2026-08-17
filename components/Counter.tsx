"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Counts up to `value` once, the first time it scrolls into view.
 *
 * The first render is always 0, on the server and on the client alike. The
 * reduced-motion path jumps straight to the final value from inside a frame
 * callback rather than during render, so there is no hydration mismatch.
 */
export default function Counter({
  value,
  suffix = "",
  duration = 1400,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    // Read the preference here rather than via a hook: this runs at the moment
    // the counter enters view, so the answer is always current.
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let frame = 0;

    if (reduceMotion) {
      frame = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(frame);
    }

    let start: number | null = null;

    const tick = (now: number) => {
      if (start === null) start = now;
      const progress = Math.min((now - start) / duration, 1);
      // Ease-out so it decelerates into the final number.
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
