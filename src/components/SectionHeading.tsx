type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.34em] text-[var(--accent-soft)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`${eyebrow ? "mt-4" : ""} text-balance text-3xl font-bold tracking-[-0.045em] text-white sm:text-4xl lg:text-[3rem]`}>
        {title}
      </h2>
      <p className="text-balance mt-4 max-w-2xl text-[0.98rem] leading-8 text-[var(--muted)] sm:text-[1.03rem]">
        {description}
      </p>
    </div>
  );
}
