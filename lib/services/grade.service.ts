/**
 * ==========================================================
 * AEGIS Migration System
 * File : grade.service.ts
 * Layer : Business Service
 * Description : Grade Business Logic
 * ==========================================================
 */

import { GradeRepository } from "@/lib/repositories/grade.repository";

export class GradeService {

  static async findGradeByPower(
    power: number
  ) {

    const grades =
      await GradeRepository.getAllActive();

    const grade =
      grades.find(rule => {

        const min =
          Number(rule.min_power);

        const max =
          rule.max_power === null
            ? Number.MAX_SAFE_INTEGER
            : Number(rule.max_power);

        return power >= min && power <= max;

      });

    return grade ?? null;

  }

}