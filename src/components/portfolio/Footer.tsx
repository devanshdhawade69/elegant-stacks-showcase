export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10 2xl:py-14 flex flex-wrap items-center justify-between gap-4 text-sm 2xl:text-base text-foreground/65">
        <p>© {new Date().getFullYear()} DEVANSH DHAWADE. Built with care.</p>
        <ul className="flex flex-wrap gap-4 sm:gap-6 2xl:gap-8">

          <li><a href="#" className="hover:text-foreground transition-colors">GitHub</a></li>
          <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
          <li><a href="#" className="hover:text-foreground transition-colors">Email</a></li>
        </ul>
      </div>
    </footer>
  );
}
