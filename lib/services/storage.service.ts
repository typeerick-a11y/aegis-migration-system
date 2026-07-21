/**
 * ==========================================================
 * AEGIS Migration System
 * File : storage.service.ts
 * Layer : Business Service
 * Description : Storage Business Logic
 * ==========================================================
 */

import { StorageRepository } from "@/lib/repositories/storage.repository";
import { STORAGE } from "@/lib/constants/storage";

export class StorageService {

  /**
   * Upload Profile Screenshot
   */
  static async uploadProfileScreenshot(
    governorId: string,
    file: File
  ) {

    const extension =
      file.name
        .split(".")
        .pop()
        ?.toLowerCase() ?? "jpg";

    const path =
      `${governorId}/${STORAGE.PROFILE_SCREENSHOT}.${extension}`;

    return StorageRepository.upload(
      path,
      file
    );

  }

  /**
   * Upload Troop Screenshot
   */
  static async uploadTroopScreenshot(
    governorId: string,
    file: File
  ) {

    const extension =
      file.name
        .split(".")
        .pop()
        ?.toLowerCase() ?? "jpg";

    const path =
    `${governorId}/${STORAGE.TROOP_SCREENSHOT}.${extension}`;

    return StorageRepository.upload(
      path,
      file
    
    
    
    );

    
  }
/**
 * Delete file from Storage
 */
static async remove(
  path: string
): Promise<void> {

  return StorageRepository.remove(path);

}
}