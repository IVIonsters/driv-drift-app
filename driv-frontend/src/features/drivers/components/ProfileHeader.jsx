import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import driverAvatar from "@/assets/driver-avatar.png";

export function ProfileHeader() {
  return (
    <div className="relative">
      {/* Cover */}
      <div className="h-64 w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Cover"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-6 flex items-end justify-between">
        <div className="flex items-center gap-4">
          <img
            src={driverAvatar}
            alt="Driver avatar"
            className="h-24 w-24 rounded-full border object-cover"
          />

          <div>
            <h1 className="text-2xl font-bold">Clatyon Thomas</h1>
            <p className="text-muted-foreground">@ClaySlides</p>
            <p className="text-sm text-muted-foreground">
              Phoenix, AZ • Thomas Drift • Team Crash
            </p>
          </div>
        </div>

        <Button className="rounded-full">Follow</Button>
      </div>
    </div>
  );
}
