// src/features/appLayout/SidebarNav.jsx
import { Link, useLocation } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

export function SidebarNav() {
  const location = useLocation();

  const navItems = [
    { name: "Development", icon: "🔧", path: "/" },
    { name: "Home", icon: "🏠", path: "/homepage" },
    { name: "Events", icon: "🏁", path: "/events" },
    { name: "Brackets", icon: "🏆", path: "/bracket" },
    { name: "Driver Profile", icon: "👤", path: "/profile" },
    { name: "Media Corner", icon: "📸", path: "/media" },
  ];

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-sm">
      {/* User */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white font-semibold text-sm">
          CT
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold text-slate-900">
            Clayton Thomas
          </div>
          <div className="text-xs text-slate-500">@ClaySlides</div>
        </div>
        <button className="text-slate-400 hover:text-slate-600">⚙️</button>
      </div>

      <Separator className="mb-3" />

      {/* Nav */}
      <nav className="flex flex-col gap-0.5 text-sm">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
              location.pathname === item.path
                ? "bg-slate-100 text-slate-900 font-medium"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <span className="text-base">{item.icon}</span>
            <span className="flex-1">{item.name}</span>
          </Link>
        ))}
      </nav>

      <Separator className="my-3" />

      {/* Auth Links */}
      <div className="space-y-0.5 text-sm">
        <Link
          to="/login"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
        >
          <span className="text-base">🔐</span>
          <span>Login</span>
        </Link>
        <Link
          to="/register"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
        >
          <span className="text-base">📝</span>
          <span>Sign Up</span>
        </Link>
      </div>

      <div className="mt-auto">
        <div className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-4 text-white text-center">
          <div className="text-2xl mb-1">🏎️</div>
          <div className="text-xs font-semibold">DRIV Drift App</div>
          <div className="text-xs opacity-80 mt-1">v1.0.0</div>
        </div>
      </div>
    </div>
  );
}
