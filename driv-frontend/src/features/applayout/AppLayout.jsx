// src/features/appLayout/AppLayout.jsx
export function AppLayout({ sidebar, center, right }) {
  return (
    <div className="h-screen w-full bg-slate-50 text-foreground">
      <div className="mx-auto flex h-full max-w-[1800px] gap-4 px-8 py-6">
        {/* Left Sidebar */}
        <aside className="w-[220px] shrink-0">
          <div className="sticky top-6 h-[calc(100vh-3rem)]">{sidebar}</div>
        </aside>

        {/* Center Scroll Area */}
        <main className="flex-1 overflow-y-auto">{center}</main>

        {/* Right Preview Panel */}
        <aside className="w-[360px] shrink-0">
          <div className="sticky top-6 h-[calc(100vh-3rem)]">{right}</div>
        </aside>
      </div>
    </div>
  );
}
