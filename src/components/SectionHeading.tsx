type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.36em] text-[var(--accent-soft)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`${eyebrow ? "mt-4" : ""} text-balance text-3xl font-bold leading-[1.02] tracking-[-0.052em] text-white sm:text-[2.7rem] lg:text-[3.15rem]`}>
        {title}
      </h2>
      <p className="text-balance mt-5 max-w-2xl text-[0.99rem] leading-8 text-[#a8b5ca] sm:text-[1.05rem]">
        {description}
      </p>
    </div>
  );
}
