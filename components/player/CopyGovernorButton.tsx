"use client";

/**
 * ==========================================================
 * AEGIS Migration System
 * File : CopyGovernorButton.tsx
 * Layer : Client Component
 * Description : Copy Governor ID Button
 * ==========================================================
 */

import { Copy } from "lucide-react";

type CopyGovernorButtonProps = {
  governorId: string;
};

export default function CopyGovernorButton({
  governorId,
}: CopyGovernorButtonProps) {

  async function handleCopy() {

    try {

      await navigator.clipboard.writeText(
        governorId
      );

      alert("Governor ID copied!");

    } catch {

      alert("Failed to copy Governor ID.");

    }

  }

  return (

    <button
      type="button"
      onClick={handleCopy}
      className="text-muted-foreground hover:text-foreground transition-colors"
      title="Copy Governor ID"
    >
      <Copy className="h-4 w-4" />
    </button>

  );

}