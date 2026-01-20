function DriverPost() {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm space-y-4 mb-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold">
          CT
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Clayton Thomas</p>
          <p className="text-xs text-slate-500">2 hours ago</p>
        </div>
      </div>

      <p className="text-slate-700 leading-relaxed">
        First place podium at Long Beach 🏆 What a weekend…
      </p>

      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-orange-200 to-pink-200 h-64 flex items-center justify-center">
        <div className="text-7xl">🏆</div>
      </div>

      <div className="flex gap-6 pt-2 border-t border-slate-100">
        <button className="flex items-center gap-2 text-sm text-slate-600 hover:text-red-500 transition-colors">
          <span>❤️</span>
          <span className="font-medium">3,240</span>
        </button>
        <button className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-500 transition-colors">
          <span>💬</span>
          <span className="font-medium">418</span>
        </button>
        <button className="flex items-center gap-2 text-sm text-slate-600 hover:text-green-500 transition-colors">
          <span>🔁</span>
          <span className="font-medium">194</span>
        </button>
      </div>
    </div>
  );
}

export default DriverPost;
