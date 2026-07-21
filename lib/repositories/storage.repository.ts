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

  static async upload(
    path: string,
    file: File
  ): Promise<string> {

    console.log("========== STORAGE UPLOAD ==========");
    console.log("Bucket :", this.BUCKET);
    console.log("Path   :", path);
    console.log("Name   :", file.name);
    console.log("Size   :", file.size);
    console.log("Type   :", file.type);

    const { data, error } =
      await supabaseAdmin.storage
        .from(this.BUCKET)
        .upload(path, file, {
          cacheControl: "3600",
          upsert: true,
        });

    if (error) {
      console.error("STORAGE ERROR:", error);
      throw error;
    }

    console.log("UPLOAD SUCCESS:", data);

    return data.path;
  }

  static async remove(
    path: string
  ): Promise<void> {

    const { error } =
      await supabaseAdmin.storage
        .from(this.BUCKET)
        .remove([path]);

    if (error) {
      console.error("REMOVE ERROR:", error);
      throw error;
    }

  }
}