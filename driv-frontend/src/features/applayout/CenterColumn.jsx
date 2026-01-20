// src/features/appLayout/CenterColumn.jsx
export function CenterColumn({ title, children }) {
  return (
    <div className="space-y-6 pb-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-slate-600">
        <span className="hover:text-slate-900 cursor-pointer">Home</span>
        <span>›</span>
        <span className="font-medium text-slate-900">{title}</span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-3">
        <div className="flex-1 flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
          <span className="text-slate-400">🔍</span>
          <input
            placeholder="Ask or search"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
          <kbd className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
            ⌘K
          </kbd>
        </div>
        <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
          <span>📅</span>
          <span>By date</span>
          <span className="text-slate-400">▼</span>
        </button>
      </div>

      {/* Date Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-slate-900">
            Today, Jan 19
          </h2>
          <div className="flex gap-1">
            <button className="rounded-lg p-1.5 hover:bg-slate-100">‹</button>
            <button className="rounded-lg p-1.5 hover:bg-slate-100">›</button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-4">{children}</div>
      </div>

      {/* Tab Buttons */}
      <div className="flex justify-center gap-2 pt-4">
        <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50">
          List
        </button>
        <button className="rounded-lg border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-medium">
          📇 Card
        </button>
        <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50">
          Board
        </button>
        <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50">
          Gallery
        </button>
      </div>
    </div>
  );
}
