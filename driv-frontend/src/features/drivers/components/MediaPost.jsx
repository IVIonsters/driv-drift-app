function MediaPost() {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm space-y-4 mb-4">
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-teal-300 to-blue-300 aspect-video flex items-center justify-center">
        <div className="text-center text-white">
          <div className="text-6xl mb-2">🎬</div>
          <p className="text-sm font-medium">Video Content</p>
        </div>
      </div>

      <div className="flex gap-6 pt-2 border-t border-slate-100">
        <button className="flex items-center gap-2 text-sm text-slate-600 hover:text-red-500 transition-colors">
          <span>❤️</span>
          <span className="font-medium">2,065</span>
        </button>
        <button className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-500 transition-colors">
          <span>💬</span>
          <span className="font-medium">889</span>
        </button>
        <button className="flex items-center gap-2 text-sm text-slate-600 hover:text-green-500 transition-colors">
          <span>🔁</span>
          <span className="font-medium">70</span>
        </button>
      </div>
    </div>
  );
}

export default MediaPost;
