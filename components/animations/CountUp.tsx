"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type CountUpProps = {
  value: number;
  duration?: number;
  digits?: number;
  prefix?: string;
  suffix?: string;
};

export default function CountUp({
  value,
  duration = 1.5,
  digits = 2,
  prefix = "",
  suffix = "",
}: CountUpProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration,
      onUpdate(latest) {
        setCount(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  const formatted = count.toString().padStart(digits, "0");

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}