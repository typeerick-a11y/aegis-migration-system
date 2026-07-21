"use client";

import { ReactNode, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

type PremiumCardProps = {
  children: ReactNode;
  className?: string;
};

export default function PremiumCard({
  children,
  className = "",
}: PremiumCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const spotlight = useMotionTemplate`
    radial-gradient(
      220px circle at ${mouseX}px ${mouseY}px,
      rgba(250,204,21,0.18),
      transparent 75%
    )
  `;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-yellow-500/20
        bg-gradient-to-br
        from-zinc-900/95
        via-zinc-900/80
        to-black
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(250,204,21,0.08)]
        transition-all
        duration-500
        hover:border-yellow-400
        hover:shadow-[0_0_60px_rgba(250,204,21,0.18)]
        ${className}
      `}
    >
      {/* Mouse Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: spotlight,
        }}
      />

      {/* Glow */}
      <div
        className="
          absolute
          -right-20
          -top-20
          h-52
          w-52
          rounded-full
          bg-yellow-400/10
          blur-3xl
          opacity-40
          transition-all
          duration-500
          group-hover:scale-125
          group-hover:opacity-80
        "
      />

      {/* Animated Border */}
      <div
        className="
          absolute
          left-0
          top-0
          h-1
          w-0
          bg-gradient-to-r
          from-transparent
          via-yellow-400
          to-transparent
          transition-all
          duration-700
          group-hover:w-full
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}