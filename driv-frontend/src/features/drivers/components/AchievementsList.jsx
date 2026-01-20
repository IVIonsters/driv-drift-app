function AchievementsList() {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-3">
      <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
        Achievements
      </h3>
      <Achievement
        text="2023 Long Beach Drift Series Champion"
        icon="🏆"
        color="text-yellow-600"
        bgColor="bg-yellow-50"
      />
      <Achievement
        text="2022 Formula Drift Overall"
        icon="🥇"
        color="text-orange-600"
        bgColor="bg-orange-50"
      />
    </div>
  );
}

function Achievement({ text, icon, color, bgColor }) {
  return (
    <div className={`flex items-start gap-3 p-3 rounded-xl ${bgColor}`}>
      <span className="text-xl">{icon}</span>
      <span className="text-sm text-slate-700 leading-relaxed">{text}</span>
    </div>
  );
}

export default AchievementsList;
