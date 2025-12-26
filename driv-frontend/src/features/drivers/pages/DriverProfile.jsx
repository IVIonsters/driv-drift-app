import Navbar from "@/components/NavBar";
import { ProfileHeader } from "../components/ProfileHeader";
import DriverStats from "../components/DriverStats";

function DriverProfile() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <ProfileHeader />
        <p>PlaceHolder</p>
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-4 py-6">
          <aside className="col-span-4 space-y-6">
            <DriverStats />
            <p>PlaceHolder</p>
            <p>PlaceHolder</p>
          </aside>
          <main className="col-span-8 space-y-6">
            <p>Placeholder</p>
            <p>Placeholder</p>
          </main>
        </div>
      </div>
    </>
  );
}

export default DriverProfile;
