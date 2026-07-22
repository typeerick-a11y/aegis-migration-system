/**
 * ==========================================================
 * AEGIS Migration System
 * File : ScreenshotCard.tsx
 * Layer : Player Card Component
 * Description : Screenshot Upload Section
 * ==========================================================
 */

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { useFormContext } from "react-hook-form";

import type {
  PlayerRegistrationFormValues,
} from "@/lib/validation/player-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { SectionHeader } from "../shared/SectionHeader";
import type { ChangeEvent } from "react";

export function ScreenshotCard() {
 const {
  setValue,
  trigger,
  formState: {
    errors: clientErrors,
  },
} = useFormContext<PlayerRegistrationFormValues>();

const handleFileChange = async (
  field: "profileScreenshot" | "troopScreenshot",
  event: ChangeEvent<HTMLInputElement>,
) => {

  const file = event.target.files?.[0];

  if (!file) {
    return;
  }

  setValue(field, file, {
    shouldDirty: true,
    shouldTouch: true,
  });

  await trigger(field);

};

void clientErrors;
  return (
    <Card>

      <CardHeader>

        <SectionHeader
          title="Screenshots"
          description="Upload the required screenshots."
        />

      </CardHeader>

      <CardContent>

        <div className="grid gap-6">

          <div className="space-y-2">

            <Label htmlFor="profileScreenshot">
              Governor Profile Screenshot
            </Label>

            <Input
  id="profileScreenshot"
  type="file"
  accept=".jpg,.jpeg,.png,.webp"
  aria-invalid={!!clientErrors.profileScreenshot}


 onChange={(event) =>
  handleFileChange(
    "profileScreenshot",
    event
  )
}
/>

{clientErrors.profileScreenshot && (
  <p className="text-sm text-red-500">
    {clientErrors.profileScreenshot.message}
  </p>
)}

          </div>

          <div className="space-y-2">

            <Label htmlFor="troopScreenshot">
              Strongest Troop Screenshot
            </Label>

            <Input
  id="troopScreenshot"
  type="file"
  accept=".jpg,.jpeg,.png,.webp"
  aria-invalid={!!clientErrors.troopScreenshot}
  
  
  onChange={(event) =>
  handleFileChange(
    "troopScreenshot",
    event
  )
}
/>

{clientErrors.troopScreenshot && (
  <p className="text-sm text-red-500">
    {clientErrors.troopScreenshot.message}
  </p>
)}

          </div>

        </div>

      </CardContent>

    </Card>
  );
}