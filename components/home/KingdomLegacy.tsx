"use client";

import { useState } from "react";

import SectionTitle from "@/components/shared/SectionTitle";
import LegacyTabs from "@/components/shared/LegacyTabs";

import HallPanel from "@/components/panels/HallPanel";
import RecordPanel from "@/components/panels/RecordPanel";
import BattlePanel from "@/components/panels/BattlePanel";
import AlliancePanel from "@/components/panels/AlliancePanel";
import HeadToHeadPanel from "@/components/panels/HeadToHeadPanel";

import { AnimatePresence, motion } from "framer-motion";

import FadeInSection from "@/components/animations/FadeInSection";
import AchievementSection from "@/components/sections/AchievementSection";
import ClosingSection from "@/components/sections/ClosingSection";

export default function KingdomLegacy() {

  const [activeTab, setActiveTab] = useState("hall");
 return (
  <section
    id="legacy"
    className="relative overflow-hidden"
  >
    <section
      className="
        bg-gradient-to-b
        from-zinc-950
        via-black
        to-zinc-950

        py-14
        md:py-24
        text-white
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl

          px-4
          sm:px-6
        "
      >
        <SectionTitle
          title="Kingdom Legacy"
          subtitle="The history and achievements of Kingdom E300"
        />

        <div className="mt-8 md:mt-12">
          <FadeInSection>
            <AchievementSection />
          </FadeInSection>
        </div>

        <div className="mt-8 md:mt-12">
          <LegacyTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        <div className="mt-6 md:mt-10">
          <FadeInSection>

            <AnimatePresence mode="wait">

              <motion.div
                key={activeTab}
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -40,
                }}
                transition={{
                  duration: 0.35,
                }}
              >

                {activeTab === "hall" && <HallPanel />}

                {activeTab === "record" && <RecordPanel />}

                {activeTab === "battle" && <BattlePanel />}

                {activeTab === "head" && <HeadToHeadPanel />}

                {activeTab === "alliance" && <AlliancePanel />}

              </motion.div>

            </AnimatePresence>

          </FadeInSection>
        </div>

        <div className="mt-10 md:mt-16">
          <FadeInSection>
            <ClosingSection />
          </FadeInSection>
        </div>

      </div>
    </section>
  </section>
);
}