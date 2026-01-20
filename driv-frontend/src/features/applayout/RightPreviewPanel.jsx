// src/features/appLayout/RightPreviewPanel.jsx
export function RightPreviewPanel({ children }) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-2">
          <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            Schedule
          </button>
          <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
            Publish
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <div className="h-8 w-8 rounded-full bg-orange-400 border-2 border-white"></div>
            <div className="h-8 w-8 rounded-full bg-blue-400 border-2 border-white"></div>
          </div>
        </div>
      </div>

      {/* Preview Content */}
      <div className="flex-1 overflow-hidden rounded-2xl bg-gradient-to-br from-teal-400 to-teal-300 p-8 shadow-inner">
        {children}
      </div>

      {/* Tabs */}
      <div className="mt-4 flex gap-6 border-b border-slate-200">
        <button className="pb-2 text-sm font-semibold text-slate-900 border-b-2 border-slate-900">
          Video 1:1
        </button>
        <button className="pb-2 text-sm font-medium text-slate-500 hover:text-slate-900">
          Redesign
        </button>
        <button className="pb-2 text-sm font-medium text-slate-500 hover:text-slate-900">
          Variations
        </button>
        <button className="pb-2 text-sm text-slate-400">⋯</button>
      </div>

      {/* Description */}
      <div className="mt-4 space-y-3">
        <p className="text-sm text-slate-600 leading-relaxed">
          Design Notes is a show about creative work and what it teaches us,
          hosted by Liam.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="rounded-lg border border-slate-200 p-2 hover:bg-slate-50">
            ➕
          </button>
          <button className="rounded-lg border border-slate-200 p-2 hover:bg-slate-50">
            🎯
          </button>
          <button className="rounded-lg border border-slate-200 p-2 hover:bg-slate-50">
            🎨
          </button>
          <button className="rounded-lg border border-slate-200 p-2 hover:bg-slate-50">
            ✨
          </button>
        </div>

        {/* Note */}
        <div className="mt-4 rounded-lg bg-slate-50 p-4">
          <p className="text-sm text-slate-600">
            Create a post that combines both selected bookmarks.
          </p>
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3">
          <span className="text-lg">➕</span>
          <input
            placeholder="Ask anything"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
          <button className="text-slate-400 hover:text-slate-600">🎤</button>
        </div>
      </div>
    </div>
  );
}
