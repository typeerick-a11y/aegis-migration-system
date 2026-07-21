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
    console.log("URL    :", process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log("Bucket :", this.BUCKET);
    console.log("Path   :", path);
    console.log("Name   :", file.name);
    console.log("Size   :", file.size);
    console.log("Type   :", file.type);

    // pastikan path bersih
    const cleanPath = path
      .replace(/^\/+/, "")
      .replace(/\/+/g, "/");

    console.log("Clean Path :", cleanPath);

   const bytes = await file.arrayBuffer();
const buffer = Buffer.from(bytes);

const { data, error } =
  await supabaseAdmin.storage
    .from(this.BUCKET)
    .upload(cleanPath, buffer, {
      cacheControl: "3600",
      upsert: true,
      contentType: file.type,
    });

    if (error) {
      console.error("========== STORAGE ERROR ==========");
      console.error(JSON.stringify(error, null, 2));
      throw error;
    }

    console.log("========== STORAGE SUCCESS ==========");
    console.log(data);

    return data.path;
  }

  static async remove(
    path: string
  ): Promise<void> {

    const cleanPath = path
      .replace(/^\/+/, "")
      .replace(/\/+/g, "/");

    const { error } =
      await supabaseAdmin.storage
        .from(this.BUCKET)
        .remove([cleanPath]);

    if (error) {
      console.error("REMOVE ERROR");
      console.error(JSON.stringify(error, null, 2));
      throw error;
    }
  }
}