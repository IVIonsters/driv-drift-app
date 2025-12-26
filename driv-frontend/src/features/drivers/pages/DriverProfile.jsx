import Navbar from "@/components/NavBar";
import { ProfileHeader } from "../components/ProfileHeader";

function DriverProfile() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background text-foreground">
        <ProfileHeader />
        <p>PlaceHolder</p>
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-4 py-6">
          <aside className="col-span-4 space-y-6">
            <p>Placeholder</p>
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
