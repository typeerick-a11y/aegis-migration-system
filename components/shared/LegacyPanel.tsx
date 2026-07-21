type LegacyPanelProps = {
  children: React.ReactNode;
};

export default function LegacyPanel({
  children,
}: LegacyPanelProps) {
  return (
    <div
      className="
        mt-10
        rounded-3xl
        border
        border-yellow-500/20
        bg-zinc-900/50
        backdrop-blur-xl
        p-8
        min-h-[420px]
        shadow-[0_0_40px_rgba(250,204,21,0.08)]
      "
    >
      {children}
    </div>
  );
}