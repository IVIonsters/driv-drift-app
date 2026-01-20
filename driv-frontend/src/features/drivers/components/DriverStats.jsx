function DriverStats() {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-900">
        Driver Stats
      </h3>

      <div className="grid grid-cols-3 gap-3">
        <Stat
          label="Wins"
          value="34"
          bgColor="bg-blue-50"
          textColor="text-blue-600"
        />
        <Stat
          label="Podiums"
          value="54"
          bgColor="bg-purple-50"
          textColor="text-purple-600"
        />
        <Stat
          label="Seasons"
          value="168"
          bgColor="bg-emerald-50"
          textColor="text-emerald-600"
        />
      </div>
    </div>
  );
}

function Stat({ label, value, bgColor, textColor }) {
  return (
    <div className={`${bgColor} rounded-xl p-3 text-center`}>
      <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
      <p className="text-xs text-slate-600 mt-1">{label}</p>
    </div>
  );
}

export default DriverStats;
