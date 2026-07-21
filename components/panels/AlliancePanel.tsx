import LegacyPanel from "@/components/shared/LegacyPanel";
import AllianceCard from "@/components/shared/AllianceCard1";
import alliances from "@/components/data/alliances";

export default function AlliancePanel() {
  return (
    <LegacyPanel>

      <div
        className="
          grid
          gap-4

          md:grid-cols-3
          md:gap-6
        "
      >

        {alliances.map((alliance) => (

          <AllianceCard
            key={alliance.tag}
            tag={alliance.tag}
            name={alliance.name}
            logo={alliance.logo}
          />

        ))}

      </div>

    </LegacyPanel>
  );
}