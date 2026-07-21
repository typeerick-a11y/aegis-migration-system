/**
 * ==========================================================
 * AEGIS Migration System
 * File : action.ts
 * Layer : Types
 * Description : Standard Action Result
 * ==========================================================
 */

export interface ActionResult<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}