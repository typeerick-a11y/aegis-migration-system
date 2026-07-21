/**
 * ==========================================================
 * AEGIS Migration System
 * File : form-data.ts
 * Layer : Helpers
 * Description : FormData Helper
 * ==========================================================
 */

export function formDataToObject(
  formData: FormData
): Record<string, unknown> {

  const result: Record<string, unknown> = {};

  for (const [key, value] of formData.entries()) {
    result[key] = value;
  }

  return result;

}