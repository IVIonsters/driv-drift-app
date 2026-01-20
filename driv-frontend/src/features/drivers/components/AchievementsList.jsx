function AchievementsList() {
  return (
    <div className="rounded-xl border p-4 space-y-3">
      <h3 className="text-sm font-semibold uppercase tracking-wide">
        Achievements
      </h3>
      <Achievement text="2023 Long Beach Drift Series Champion" />
      <Achievement text="2022 Formula Drift Overall" />
    </div>
  );
}

function Achievement({ text }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span>{text}</span>
    </div>
  );
}

export default AchievementsList;
