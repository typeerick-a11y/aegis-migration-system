/**
 * ==========================================================
 * AEGIS Migration System
 * File : merit.service.ts
 * Layer : Business Service
 * Description : Merit Calculator
 * ==========================================================
 */

export class MeritService {

  static calculate(
    power: number,
    merits: number
  ): number {

    if (power <= 0) {
      return 0;
    }

    return merits / power;

  }

}