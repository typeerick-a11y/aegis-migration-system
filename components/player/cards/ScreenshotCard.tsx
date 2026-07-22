/**
 * ==========================================================
 * AEGIS Migration System
 * File : ScreenshotCard.tsx
 * Layer : Player Card Component
 * Description : Screenshot Upload Section
 * ==========================================================
 */

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
} from "react";

import { useFormContext } from "react-hook-form";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import type {
  PlayerRegistrationFormValues,
} from "@/lib/validation/player-form";

import { SectionHeader } from "../shared/SectionHeader";

export function ScreenshotCard() {

  const [profilePreview, setProfilePreview] =
    useState<string | null>(null);

  const [troopPreview, setTroopPreview] =
    useState<string | null>(null);
const profileInputRef =
  useRef<HTMLInputElement>(null);

const troopInputRef =
  useRef<HTMLInputElement>(null);



 const {
  setValue,
  resetField,
  trigger,
  formState: {
    errors: clientErrors,
  },
} = useFormContext<PlayerRegistrationFormValues>();




  useEffect(() => {

    return () => {

      if (profilePreview) {
        URL.revokeObjectURL(profilePreview);
      }

      if (troopPreview) {
        URL.revokeObjectURL(troopPreview);
      }

    };

  }, [profilePreview, troopPreview]);

  const handleFileChange = async (
    field: "profileScreenshot" | "troopScreenshot",
    event: ChangeEvent<HTMLInputElement>,
  ) => {

    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const previewUrl =
      URL.createObjectURL(file);

    if (field === "profileScreenshot") {
      setProfilePreview(previewUrl);
    } else {
      setTroopPreview(previewUrl);
    }

    setValue(field, file, {
      shouldDirty: true,
      shouldTouch: true,
    });

    await trigger(field);

  };

  const removeProfileImage = async () => {

  if (profilePreview) {
    URL.revokeObjectURL(profilePreview);
  }

  setProfilePreview(null);

  resetField("profileScreenshot");

  if (profileInputRef.current) {
    profileInputRef.current.value = "";
  }

  await trigger("profileScreenshot");

};

const removeTroopImage = async () => {

  if (troopPreview) {
    URL.revokeObjectURL(troopPreview);
  }

  setTroopPreview(null);

  resetField("troopScreenshot");

  if (troopInputRef.current) {
    troopInputRef.current.value = "";
  }

  await trigger("troopScreenshot");

};

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

          {/* Governor Profile */}

          <div className="space-y-2">

            <Label htmlFor="profileScreenshot">
              Governor Profile Screenshot
            </Label>

            <Input
              ref={profileInputRef}
              id="profileScreenshot"
              name="profileScreenshot"
              type="file"
              accept=".jpg,.jpeg,.png,.webp"
              aria-invalid={
                !!clientErrors.profileScreenshot
              }
              onChange={(event) =>
                handleFileChange(
                  "profileScreenshot",
                  event
                )
              }
            />

            {profilePreview && (

  <div className="mt-4 space-y-3">

    <Image
      src={profilePreview}
      alt="Governor Profile Preview"
      width={320}
      height={180}
      className="rounded-lg border object-cover"
      unoptimized
    />

    <button
  type="button"
  onClick={removeProfileImage}
  className="rounded-md border border-red-500 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-500 hover:text-white"
>
  Remove Image
</button>

  </div>

)}

            {clientErrors.profileScreenshot && (

              <p className="text-sm text-red-500">

                {clientErrors.profileScreenshot.message}

              </p>

            )}

          </div>

          {/* Strongest Troop */}

          <div className="space-y-2">

            <Label htmlFor="troopScreenshot">
              Strongest Troop Screenshot
            </Label>

            <Input
              ref={troopInputRef}
              id="troopScreenshot"
              name="troopScreenshot"
              type="file"
              accept=".jpg,.jpeg,.png,.webp"
              aria-invalid={
                !!clientErrors.troopScreenshot
              }
              onChange={(event) =>
                handleFileChange(
                  "troopScreenshot",
                  event
                )
              }
            />
{troopPreview && (

  <div className="mt-4 space-y-3">

    <Image
      src={troopPreview}
      alt="Strongest Troop Preview"
      width={320}
      height={180}
      className="rounded-lg border object-cover"
      unoptimized
    />

   <button
  type="button"
  onClick={removeTroopImage}
  className="rounded-md border border-red-500 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-500 hover:text-white"
>
  Remove Image
</button>

  </div>

)}

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