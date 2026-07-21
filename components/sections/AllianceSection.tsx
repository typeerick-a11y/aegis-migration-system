import SectionTitle from "@/components/shared/SectionTitle";
import AllianceCard from "@/components/shared/AllianceCard1";
import alliances from "@/components/data/alliances";

export default function AllianceSection() {
  return (
    <div className="mt-24">

      <SectionTitle
        title="United Under Three Active Alliances"
        subtitle="Three alliances working together for one kingdom."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">

        {alliances.map((alliance) => (
          <AllianceCard
            key={alliance.tag}
            tag={alliance.tag}
            name={alliance.name}
            logo={alliance.logo}
          />
        ))}

      </div>

    </div>
  );
}