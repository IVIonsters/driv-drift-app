// src/features/appLayout/SidebarNav.jsx
import { Separator } from "@/components/ui/separator";

export function SidebarNav() {
  const navItems = [
    { name: "Schedules", icon: "📅" },
    { name: "Bookmarks", icon: "🔖", active: true },
    { name: "Drafts", icon: "✏️" },
    { name: "Inspirations", icon: "💡" },
    { name: "Folders", icon: "📁", badge: "New!" },
    { name: "Extensions", icon: "🧩" },
  ];

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-sm">
      {/* User */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white font-semibold text-sm">
          A
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold text-slate-900">Alex Smith</div>
        </div>
        <button className="text-slate-400 hover:text-slate-600">⚙️</button>
      </div>

      <Separator className="mb-3" />

      {/* Nav */}
      <nav className="flex flex-col gap-0.5 text-sm">
        {navItems.map((item) => (
          <button
            key={item.name}
            className={`group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
              item.active
                ? "bg-slate-100 text-slate-900 font-medium"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <span className="text-base">{item.icon}</span>
            <span className="flex-1">{item.name}</span>
            {item.badge && (
              <span className="rounded bg-orange-100 px-1.5 py-0.5 text-xs font-medium text-orange-600">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="mt-auto">
        <button className="w-full rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-200 transition-colors">
          Add new links
        </button>
      </div>
    </div>
  );
}
