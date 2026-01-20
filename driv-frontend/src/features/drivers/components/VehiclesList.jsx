import car from "@/assets/car.jpg";
import car2 from "@/assets/car2.jpg";

function VehiclesList() {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
        Vehicles
      </h3>

      <Vehicle
        name="Darlene"
        spec="c6 Corvette"
        image={car}
      />

      <Vehicle
        name="Many Regrets"
        spec="Issa Supra"
        image={car2}
      />
    </div>
  );
}

function Vehicle({ name, spec, image }) {
  return (
    <div className="flex gap-3 items-center p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
      <img
        src={image}
        alt={name}
        className="h-14 w-14 rounded-lg object-cover shadow-sm"
      />

      <div className="flex-1">
        <p className="font-semibold text-slate-900">{name}</p>
        <p className="text-sm text-slate-600">{spec}</p>
      </div>
      <span className="text-slate-400">›</span>
    </div>
  );
}

export default VehiclesList;
