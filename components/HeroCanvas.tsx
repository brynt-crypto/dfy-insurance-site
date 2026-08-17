"use client";

import { useEffect, useRef } from "react";

/**
 * The hero's animated visual. Takes the structure of the 21st.dev "blackhole
 * hero" — an off-center focal visual with a directional scrim — but renders a
 * calm drifting node network instead of a black hole, so it reads as
 * "connection and protection" rather than science fiction.
 *
 * Plain Canvas 2D on purpose: no three.js, no shader compile, no extra
 * megabytes on first load.
 */

type Props = {
  /** Focal point of the glow, as a fraction of the canvas box. */
  focus?: { x: number; y: number };
  /** Which edge gets darkened so overlaid text stays readable. */
  scrim?: "left" | "right" | "none";
  /** Overall brightness of the glow, 0-1. */
  glow?: number;
  className?: string;
};

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

const NAVY_900 = "#0b1b33";
const LINK_DISTANCE = 132;
const MAX_DPR = 2;

export default function HeroCanvas({
  focus = { x: 0.58, y: 0.48 },
  scrim = "left",
  glow = 0.9,
  className,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let frame = 0;
    let time = 0;
    let visible = true;

    /** Node count scales with area so phones stay cheap and desktops stay full. */
    const nodeCount = () =>
      Math.round(Math.min(84, Math.max(26, (width * height) / 15000)));

    const seed = () => {
      nodes = Array.from({ length: nodeCount() }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: 1 + Math.random() * 1.8,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    /** Soft drifting light behind the network — the "accretion glow" analogue. */
    const paintGlow = () => {
      const fx = width * focus.x;
      const fy = height * focus.y;
      const drift = Math.sin(time * 0.00018) * (width * 0.04);
      const pulse = 0.86 + Math.sin(time * 0.00042) * 0.14;
      const radius = Math.max(width, height) * 0.62;

      const core = ctx.createRadialGradient(
        fx + drift,
        fy,
        0,
        fx + drift,
        fy,
        radius,
      );
      core.addColorStop(0, `rgba(62, 144, 240, ${0.6 * glow * pulse})`);
      core.addColorStop(0.35, `rgba(30, 111, 217, ${0.32 * glow * pulse})`);
      core.addColorStop(0.7, `rgba(23, 85, 159, ${0.12 * glow})`);
      core.addColorStop(1, "rgba(11, 27, 51, 0)");
      ctx.fillStyle = core;
      ctx.fillRect(0, 0, width, height);

      // Second, slower blob offset the other way for depth.
      const bx = width * (focus.x + 0.18) - drift * 0.6;
      const by = height * (focus.y - 0.26);
      const halo = ctx.createRadialGradient(bx, by, 0, bx, by, radius * 0.55);
      halo.addColorStop(0, `rgba(120, 180, 255, ${0.16 * glow})`);
      halo.addColorStop(1, "rgba(11, 27, 51, 0)");
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, width, height);
    };

    const paintNetwork = () => {
      // Links first so dots sit on top of the lines.
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist > LINK_DISTANCE) continue;
          const strength = 1 - dist / LINK_DISTANCE;
          ctx.strokeStyle = `rgba(150, 197, 255, ${strength * 0.3})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }

      for (const node of nodes) {
        ctx.fillStyle = "rgba(214, 232, 255, 0.82)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    /** Directional darkening so the headline never fights the animation. */
    const paintScrim = () => {
      if (scrim === "none") return;
      const gradient = ctx.createLinearGradient(
        scrim === "left" ? 0 : width,
        0,
        scrim === "left" ? width : 0,
        0,
      );
      gradient.addColorStop(0, "rgba(11, 27, 51, 0.92)");
      gradient.addColorStop(0.38, "rgba(11, 27, 51, 0.45)");
      gradient.addColorStop(0.72, "rgba(11, 27, 51, 0)");
      gradient.addColorStop(1, "rgba(11, 27, 51, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Slight bottom fade into the section below.
      const bottom = ctx.createLinearGradient(0, height * 0.6, 0, height);
      bottom.addColorStop(0, "rgba(11, 27, 51, 0)");
      bottom.addColorStop(1, "rgba(11, 27, 51, 0.7)");
      ctx.fillStyle = bottom;
      ctx.fillRect(0, 0, width, height);
    };

    const step = () => {
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;
      }
    };

    const render = () => {
      ctx.fillStyle = NAVY_900;
      ctx.fillRect(0, 0, width, height);
      paintGlow();
      paintNetwork();
      paintScrim();
    };

    const loop = (now: number) => {
      time = now;
      if (visible) {
        step();
        render();
      }
      frame = requestAnimationFrame(loop);
    };

    resize();

    if (reduceMotion) {
      // One static frame, no animation loop at all.
      render();
      const onResize = () => {
        resize();
        render();
      };
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }

    // Stop burning frames when the hero is scrolled out of view.
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    observer.observe(canvas);

    window.addEventListener("resize", resize);
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [focus.x, focus.y, scrim, glow]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      // Static gradient underneath so SSR and first paint are never blank.
      style={{
        background:
          "radial-gradient(120% 90% at 62% 45%, #1c3a68 0%, #12294d 45%, #0b1b33 100%)",
      }}
    />
  );
}
