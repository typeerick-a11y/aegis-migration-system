/**
 * ==========================================================
 * AEGIS Migration System
 * File : page.tsx
 * Layer : Register Success Page
 * Description : Registration Success
 * ==========================================================
 */

import Link from "next/link";
import { cookies } from "next/headers";
import CopyGovernorButton from "@/components/player/CopyGovernorButton";

import {
  REGISTRATION_SUCCESS_COOKIE,
} from "@/lib/helpers/registration-cookie";

import {
  PlayerService,
} from "@/lib/services/player.service";

export default async function RegisterSuccessPage() {

  const cookieStore =
    await cookies();

  const registrationCookie =
    cookieStore.get(
      REGISTRATION_SUCCESS_COOKIE
    );

  if (!registrationCookie) {

    return (
      <div className="container mx-auto py-20 text-center">
        Registration data not found.
      </div>
    );

  }

  const player =
    await PlayerService.findPlayerById(
      registrationCookie.value
    );

  if (!player) {

    return (
      <div className="container mx-auto py-20 text-center">
        Registration data not found.
      </div>
    );

  }

  return (

    <main className="container mx-auto flex min-h-[70vh] items-center justify-center px-4 py-12">

      <div className="w-full max-w-2xl rounded-2xl border bg-card p-10 shadow-lg">

        {/* Header */}

        <div className="text-center">

          <div className="mb-4 text-6xl">
            🎉
          </div>

          <h1 className="text-3xl font-bold text-green-600">
            Registration Submitted
          </h1>

          <p className="mt-3 text-muted-foreground">
            Your migration registration has been received successfully.
          </p>

        </div>

        <div className="my-8 border-t" />

        {/* Registration Information */}

        <div className="rounded-xl border p-6 space-y-4">

          <div className="flex justify-between items-center">

            <span className="text-muted-foreground">
              Governor ID
            </span>

            <div className="flex items-center gap-2">

              <span className="font-semibold">
                {player.governor_id}
              </span>

              <CopyGovernorButton
                governorId={player.governor_id}
              />

            </div>

          </div>

          <div className="flex justify-between">

            <span className="text-muted-foreground">
              Nickname
            </span>

            <span className="font-semibold">
              {player.nickname}
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-muted-foreground">
              Power
            </span>

            <span className="font-semibold">
              {player.power.toLocaleString()}
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-muted-foreground">
              Merits
            </span>

            <span className="font-semibold">
              {player.merits.toLocaleString()}
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-muted-foreground">
              Grade
            </span>

            <span className="font-semibold">
              {player.grade_rules?.grade}
            </span>

          </div>

        </div>

        {/* What Happens Next */}

        <div className="rounded-xl border p-6 mt-6">

          <h2 className="text-lg font-semibold mb-4">
            📌 What Happens Next?
          </h2>

          <ul className="space-y-3 text-sm text-muted-foreground">

            <li>
              ✅ Your registration has been submitted successfully.
            </li>

            <li>
              ✅ Our officers will review your screenshots and migration data.
            </li>

            <li>
              ✅ Please stay in Discord for further announcements.
            </li>

          </ul>

          <div className="grid grid-cols-2 gap-4 mt-6">

            <div className="grid grid-cols-2 gap-4 mt-6">

  <a
    href="https://discord.com/channels/XXXX"
    target="_blank"
    className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
  >
    Notify Our Officer
  </a>

  <a
    href="https://discord.gg/XXXX"
    target="_blank"
    className="inline-flex items-center justify-center rounded-lg border px-4 py-3 text-sm font-semibold hover:bg-muted"
  >
    Join Discord
  </a>

</div>

          </div>

        </div>

        <div className="my-8 border-t" />

        {/* Bottom Buttons */}

        <div className="flex flex-col gap-3 sm:flex-row">

          <Link
            href="/"
            className="flex-1 rounded-lg bg-primary px-4 py-3 text-center font-semibold text-primary-foreground"
          >
            Back to Home
          </Link>

          <Link
            href="/register"
            className="flex-1 rounded-lg border px-4 py-3 text-center font-semibold"
          >
            Register Another Governor
          </Link>

        </div>

      </div>

    </main>

  );

}