function DriverStats() {
  return (
    <div className="rounded-xl border p-4">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">
        Driver Stats
      </h3>

      <div className="grid grid-cols-3 gap-4 text-center">
        <Stat
          label="Wins"
          value="34"
        />
        <Stat
          label="Podiums"
          value="54"
        />
        <Stat
          label="Seasons"
          value="168"
        />
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="text-xl font-bold">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

export default DriverStats;
