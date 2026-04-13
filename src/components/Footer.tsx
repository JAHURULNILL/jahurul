import { person } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="px-4 pb-8 pt-2 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[1.8rem] border border-white/8 bg-[rgba(7,11,18,0.7)] px-5 py-5 text-sm text-white/58 shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
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
          <a href={person.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
