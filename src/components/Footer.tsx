import { person } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg,rgba(12,18,31,1),rgba(10,15,26,1))] px-4 pb-12 pt-5 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/8 px-1 pt-8 text-sm text-white/52 sm:flex-row sm:items-center sm:justify-between">
        <p className="tracking-[0.01em]">&copy; {new Date().getFullYear()} {person.name}. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-5">
          <a href={person.github} target="_blank" rel="noreferrer" className="transition duration-300 hover:text-white/84">
            GitHub
          </a>
          <a href={person.facebook} target="_blank" rel="noreferrer" className="transition duration-300 hover:text-white/84">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
