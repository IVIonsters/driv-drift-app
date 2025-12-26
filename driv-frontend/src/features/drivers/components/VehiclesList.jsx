import car from "@/assets/car.jpg";
import car2 from "@/assets/car2.jpg";

function VehiclesList() {
  return (
    <div className="rounded-xl border p-4 space-y-4">
      <h3 className="text-sm font-semibold uppercase tracking-wide">
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
    <div className="flex gap-3 items-center">
      <img
        src={image}
        alt={name}
        className="h-12 w-12 rounded object-cover"
      />

      <div>
        <p className="font-medium">{name}</p>
        <p className="text-xs text-muted-foreground">{spec}</p>
      </div>
    </div>
  );
}

export default VehiclesList;
