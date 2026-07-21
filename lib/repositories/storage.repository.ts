/**
 * ==========================================================
 * AEGIS Migration System
 * File : storage.repository.ts
 * Layer : Repository
 * Description : Storage Database Access
 * ==========================================================
 */

import { supabaseAdmin } from "@/lib/supabase/admin";
import { STORAGE } from "@/lib/constants/storage";

export class StorageRepository {
  private static readonly BUCKET = STORAGE.BUCKET;

  /**
   * Upload file ke Supabase Storage
   * Return:
   *   "123456789/governor-info.webp"
   */
  static async upload(
    path: string,
    file: File
  ): Promise<string> {

    const { data, error } =
      await supabaseAdmin.storage
        .from(this.BUCKET)
        .upload(path, file, {
          cacheControl: "3600",
          upsert: true,
        });

    if (error) {
      throw error;
    }

    return data.path;
  }

  /**
   * Hapus file dari Storage
   */
  static async remove(
    path: string
  ): Promise<void> {

    const { error } =
      await supabaseAdmin.storage
        .from(this.BUCKET)
        .remove([path]);

    if (error) {
      throw error;
    }

  }
}