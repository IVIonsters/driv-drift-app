import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import driverAvatar from "@/assets/driver-avatar.png";

export function ProfileHeader() {
  return (
    <div className="relative">
      {/* Hero image container */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Cover"
          className="h-full w-full object-cover"
        />

        {/* Gradient overlay ONLY on image */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative -mt-16">
        <div className="mx-auto max-w-7xl px-4 flex items-end justify-between">
          <div className="flex items-end gap-4">
            <img
              src={driverAvatar}
              alt="Driver avatar"
              className="h-24 w-24 rounded-full border-4 border-background object-cover"
            />

            <div className="pb-2">
              <h1 className="text-2xl font-bold">Clayton Thomas</h1>
              <p className="text-muted-foreground">@ClaySlides</p>
              <p className="text-sm text-muted-foreground">
                Phoenix, AZ • Thomas Drift • Team Crash
              </p>
            </div>
          </div>

          <Button className="rounded-full mb-2">Follow</Button>
        </div>
      </div>
    </div>
  );
}
