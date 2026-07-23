/**
 * ==========================================================
 * AEGIS Migration System
 * File : dashboard.service.ts
 * Layer : Service
 * Description : Dashboard Service
 * ==========================================================
 */

import { DashboardRepository }
  from "@/lib/repositories/dashboard.repository";

import type {
  DashboardStatistics,
  RecentRegistration,
} from "@/lib/types/dashboard";

export class DashboardService {

  static async getStatistics(): Promise<DashboardStatistics> {

    return DashboardRepository.getStatistics();

  }
static async getRecentRegistrations(): Promise<RecentRegistration[]> {

  return DashboardRepository.getRecentRegistrations();

}
}