export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-foreground/65">
        <p>© {new Date().getFullYear()} Alex Moreau. Built with care.</p>
        <ul className="flex gap-6">
          <li><a href="#" className="hover:text-foreground transition-colors">GitHub</a></li>
          <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
          <li><a href="#" className="hover:text-foreground transition-colors">Email</a></li>
        </ul>
      </div>
    </footer>
  );
}
