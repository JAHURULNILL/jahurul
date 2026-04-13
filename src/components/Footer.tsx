import { person } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg,rgba(12,17,29,1),rgba(11,16,27,1))] px-4 pb-10 pt-3 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/8 px-1 pt-8 text-sm text-white/54 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {person.name}. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-5">
          <a href={person.github} target="_blank" rel="noreferrer" className="transition hover:text-white/84">
            GitHub
          </a>
          <a href={person.facebook} target="_blank" rel="noreferrer" className="transition hover:text-white/84">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
