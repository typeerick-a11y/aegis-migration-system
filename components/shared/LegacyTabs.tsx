"use client";

type LegacyTabsProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const tabs = [
  {
    id: "hall",
    mobile: "🏆 HoF",
    desktop: "Hall Of Fame",
  },
  {
    id: "record",
    mobile: "📜 Records",
    desktop: "Event Records",
  },
  {
    id: "battle",
    mobile: "⚔ Honors",
    desktop: "Battle Honors",
  },
  {
    id: "head",
    mobile: "🤝 H2H",
    desktop: "Head To Head",
  },
  {
    id: "alliance",
    mobile: "🛡 Alliance",
    desktop: "Alliance History",
  },
];

export default function LegacyTabs({
  activeTab,
  setActiveTab,
}: LegacyTabsProps) {
  return (
    <div className="mt-10 md:mt-16">

      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-3
          md:gap-8

          border-b
          border-yellow-500/20

          pb-3
          md:pb-4
        "
      >
        {tabs.map((tab) => (

          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative

              pb-2
              md:pb-3

              text-sm
              md:text-lg

              font-semibold

              transition-all
              duration-300

              ${
                activeTab === tab.id
                  ? "text-yellow-400"
                  : "text-zinc-500 hover:text-white"
              }
            `}
          >

            <span className="md:hidden">
              {tab.mobile}
            </span>

            <span className="hidden md:inline">
              {tab.desktop}
            </span>

            <span
              className={`
                absolute
                bottom-0
                left-0

                h-0.5

                bg-yellow-400

                transition-all
                duration-300

                ${
                  activeTab === tab.id
                    ? "w-full"
                    : "w-0"
                }
              `}
            />

          </button>

        ))}
      </div>

    </div>
  );
}