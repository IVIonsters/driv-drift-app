import Navbar from "@/components/NavBar";
import { ProfileHeader } from "../components/ProfileHeader";
import DriverStats from "../components/DriverStats";
import VehiclesList from "../components/VehiclesList";
import AchievementsList from "../components/AchievementsList";
import DriverFeed from "../components/DriverFeed";

function DriverProfile() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <ProfileHeader />
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-4 py-6">
          <aside className="col-span-4 space-y-6">
            <DriverStats />
            <VehiclesList />
            <AchievementsList />
          </aside>
          <main className="col-span-8 space-y-6">
            <DriverFeed />
          </main>
        </div>
      </div>
    </>
  );
}

export default DriverProfile;
