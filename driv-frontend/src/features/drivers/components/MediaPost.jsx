function MediaPost() {
  return (
    <div className="rounded-xl border p-4 space-y-3">
      <video
        className="w-full rounded-lg"
        controls
      >
        <source src="/clip.mp4" />
      </video>

      <div className="flex gap-6 text-xs text-muted-foreground">
        ❤️ 2,065 💬 889 🔁 70
      </div>
    </div>
  );
}

export default MediaPost;
