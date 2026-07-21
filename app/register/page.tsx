/**
 * ==========================================================
 * AEGIS Migration System
 * File : page.tsx
 * Layer : App Router Page
 * Description : Player Registration Page
 * ==========================================================
 */

import { PlayerRegistrationForm } from "@/components/player/PlayerRegistrationForm";

export default function RegisterPage() {
  return (
    <main className="container mx-auto max-w-4xl px-6 py-10">

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          AEGIS Migration Registration
        </h1>

        <p className="mt-2 text-muted-foreground">
          Register your Governor for Kingdom Migration.
        </p>

      </div>

      <PlayerRegistrationForm />

    </main>
  );
}