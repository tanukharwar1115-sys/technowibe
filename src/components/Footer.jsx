import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-dim)]">
        <span>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </span>
        <span>{profile.location}</span>
      </div>
    </footer>
  );
}
