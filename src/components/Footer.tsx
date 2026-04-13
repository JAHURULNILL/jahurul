import { person } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="bg-[rgba(10,14,24,0.98)] px-4 pb-8 pt-2 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/8 px-1 pt-8 text-sm text-white/58 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {person.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a href={person.github} target="_blank" rel="noreferrer" className="transition hover:text-white">
            GitHub
          </a>
          <a href={person.facebook} target="_blank" rel="noreferrer" className="transition hover:text-white">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
