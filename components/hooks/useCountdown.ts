"use client";

import { useCallback, useEffect, useState } from "react";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function useCountdown(targetDate: Date) {

  const getTimeLeft = useCallback((): Countdown => {

    const diff =
      targetDate.getTime() - Date.now();

    if (diff <= 0) {

      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

    }

    return {

      days: Math.floor(
        diff / (1000 * 60 * 60 * 24)
      ),

      hours: Math.floor(
        (diff / (1000 * 60 * 60)) % 24
      ),

      minutes: Math.floor(
        (diff / (1000 * 60)) % 60
      ),

      seconds: Math.floor(
        (diff / 1000) % 60
      ),

    };

  }, [targetDate]);

  const [timeLeft, setTimeLeft] =
    useState<Countdown>(() => getTimeLeft());

  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft(getTimeLeft());

    }, 1000);

    return () => clearInterval(timer);

  }, [getTimeLeft]);

  return timeLeft;

}