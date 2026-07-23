/**
 * ==========================================================
 * AEGIS Migration System
 * File : hero.service.ts
 * Layer : Business Service
 * Description : Hero Business Logic
 * ==========================================================
 */

import type { Hero } from "@/lib/types/hero";

import { HeroRepository }
  from "@/lib/repositories/hero.repository";

export class HeroService {

  /**
   * Get All Heroes
   */
  /**
 * Get All Heroes
 */
static async getAllHeroes(): Promise<Hero[]> {

  const heroes =
    await HeroRepository.findAll();

  console.log("================================");
  console.log("HERO LIST");
  console.log("COUNT :", heroes.length);
  console.log(
    heroes.map((hero) => hero.name)
  );
  console.log("================================");

  return heroes.map((hero) => ({

    id: hero.id,

    name: hero.name,

  }));

}}