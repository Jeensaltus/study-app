import { Link, NavLink } from "react-router-dom";
import { BarChart3, Bot, BookOpen, Home, Settings } from "lucide-react";
import NavbarFullscreenButton from "./NavbarFullscreenButton";

const links = [
  { to: "/", label: "หน้าแรก", icon: Home },
  { to: "/subjects", label: "วิชา", icon: BookOpen },
  { to: "/ai-tutor", label: "AI Tutor", icon: Bot },
  { to: "/dashboard", label: "Dashboard", icon: BarChart3 },
  { to: "/settings", label: "Settings", icon: Settings },
];

function NavLinkItem({ to, label, icon: Icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group relative inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
          isActive
            ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300"
            : "text-slate-600 hover:bg-slate-100 hover:text-ink dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-white"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon size={18} className="transition-transform duration-200 group-hover:scale-110" />
          <span>{label}</span>
          {isActive && (
            <span className="absolute -bottom-[3px] left-1/2 h-[3px] w-3/4 -translate-x-1/2 rounded-full bg-primary dark:bg-blue-400 animate-scale-in" />
          )}
        </>
      )}
    </NavLink>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 glass">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="group flex min-w-max items-center gap-2.5 text-lg font-bold text-ink dark:text-white">
          <img
            src="/logo.png"
            alt="Freshman Study"
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="gradient-text">Freshman Study</span>
        </Link>
        <div className="ml-auto flex items-center gap-1">
          <nav className="navbar-links hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <NavLinkItem key={link.to} {...link} />
            ))}
          </nav>
          <NavbarFullscreenButton />
        </div>
      </div>
      <nav className="navbar-links flex gap-1 overflow-x-auto border-t border-slate-100 px-3 py-2 md:hidden dark:border-slate-800">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `inline-flex min-w-max items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                isActive ? "bg-primary text-white shadow-sm" : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              }`
            }
          >
            <Icon size={17} />
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
