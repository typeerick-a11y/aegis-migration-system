type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-20 text-center">

      {/* Decorative Line */}
      <div className="mb-6 flex items-center justify-center gap-4">

        <div className="h-px w-20 bg-gradient-to-r from-transparent to-yellow-400" />

        <div className="h-2 w-2 rotate-45 border border-yellow-400" />

        <div className="h-px w-20 bg-gradient-to-l from-transparent to-yellow-400" />

      </div>

      {/* Title */}

      <h2 className="text-4xl font-black uppercase tracking-[0.15em] text-white md:text-5xl">
        {title}
      </h2>

      {/* Subtitle */}

      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          {subtitle}
        </p>
      )}

    </div>
  );
}