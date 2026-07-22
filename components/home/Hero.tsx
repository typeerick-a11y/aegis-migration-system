"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import useCountdown from "@/components/hooks/useCountdown";
import CountdownCard from "@/components/shared/CountDownCard";
import MigrationStatusPanel from "@/components/home/MigrationStatusPanel";
import type {
  MigrationSettings,
} from "@/lib/types/migration-settings";

interface HeroProps {
  settings: MigrationSettings;
}

export default function Hero({
  settings,
}: HeroProps) {
  const migrationDate =
  new Date(settings.regularStart);

  const { days, hours, minutes, seconds } =
    useCountdown(migrationDate);

  return (
    <section
      id="migration"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background */}
      <Image
        src="/images/hero/hero-bg.jpg"
        alt="AEGIS Hero"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6">

          {/* Hero Top */}
          <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:items-center">

            {/* LEFT : Countdown */}
            <CountdownCard
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            />

            {/* RIGHT : Hero Content */}
            <div className="max-w-3xl">

              <h1 className="mt-6 text-6xl font-black leading-[0.95] tracking-tight text-white md:text-8xl">
 KINGDOM E{settings.kingdomNumber}
  <br />
  Awaits You!
</h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-zinc-300">
                Join one of the strongest kingdoms in Age of Empires Mobile.
              </p>

              {/* Buttons */}
              <div className="mt-14 flex flex-wrap gap-6">

                <Link href="/register">
  <Button
    size="lg"
    className="group rounded-xl bg-yellow-400 px-8 py-6 text-lg font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-500/30"
  >
    Apply Now

    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Button>
</Link>

                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-yellow-500/50 px-8 py-6 text-lg font-semibold text-yellow-400 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  Join Discord
                </Button>

              </div>

            </div>

          </div>

          {/* Migration Status */}
          <div className="mt-16">
            <MigrationStatusPanel />
          </div>

        </div>
      </div>
    </section>
  );
}