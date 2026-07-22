/**
 * ==========================================================
 * AEGIS Migration System
 * File : usePlayerFormValidation.ts
 * Layer : Hook
 * Description : Player Form Client Validation
 * ==========================================================
 */

import { useState } from "react";

export function usePlayerFormValidation() {

  const [errors, setErrors] =
    useState<Record<string, string>>({});

  const setFieldError = (
    field: string,
    message?: string
  ) => {

    setErrors((previous) => {

      const next = { ...previous };

      if (!message) {

        delete next[field];

      } else {

        next[field] = message;

      }

      return next;

    });

  };

  return {

    errors,

    setFieldError,

  };

}