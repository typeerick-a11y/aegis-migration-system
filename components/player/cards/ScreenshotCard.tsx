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

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { SectionHeader } from "../shared/SectionHeader";

export function ScreenshotCard() {
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
              name="profileScreenshot"
              type="file"
              accept="image/*"
            />

          </div>

          <div className="space-y-2">

            <Label htmlFor="troopScreenshot">
              Strongest Troop Screenshot
            </Label>

            <Input
              id="troopScreenshot"
              name="troopScreenshot"
              type="file"
              accept="image/*"
            />

          </div>

        </div>

      </CardContent>

    </Card>
  );
}