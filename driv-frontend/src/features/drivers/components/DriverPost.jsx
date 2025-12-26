function DriverPost() {
  return (
    <div className="rounded-xl border p-4 space-y-3">
      <div className="flex items-center gap-3">
        <img
          src="/avatar.jpg"
          className="h-8 w-8 rounded-full"
          alt=""
        />
        <div>
          <p className="text-sm font-medium">Vaughn Sutton</p>
          <p className="text-xs text-muted-foreground">2 hours ago</p>
        </div>
      </div>

      <p>First place podium at Long Beach 🏆 What a weekend…</p>

      <img
        src="/post.jpg"
        className="rounded-lg"
        alt=""
      />

      <div className="flex gap-6 text-xs text-muted-foreground">
        ❤️ 3,240 💬 418 🔁 194
      </div>
    </div>
  );
}

export default DriverPost;
