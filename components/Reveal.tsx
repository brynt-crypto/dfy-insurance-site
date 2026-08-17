"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * The site's one entrance animation: a short fade and 16px rise, played once
 * when the element scrolls into view. Everything reveals the same way on
 * purpose — varied animations read as busy to a non-technical audience.
 *
 * Reduced motion is handled by zeroing the duration rather than swapping in a
 * different element. The server does not know the user's motion preference, so
 * branching on it here would render one tree on the server and another on the
 * client, and React would throw a hydration mismatch.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{
        duration: reduceMotion ? 0 : 0.42,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 0.61, 0.36, 1],
      }}
    >
      {children}
    </Component>
  );
}
