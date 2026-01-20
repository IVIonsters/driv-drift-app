import { AppLayout } from "@/features/applayout/AppLayout";
import { SidebarNav } from "@/features/applayout/SidebarNav";
import { RightPreviewPanel } from "@/features/applayout/RightPreviewPanel";
import { ProfileHeader } from "../components/ProfileHeader";
import DriverStats from "../components/DriverStats";
import VehiclesList from "../components/VehiclesList";
import AchievementsList from "../components/AchievementsList";
import DriverFeed from "../components/DriverFeed";

function DriverProfile() {
  return (
    <AppLayout
      sidebar={<SidebarNav />}
      center={
        <div className="space-y-6 pb-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <span className="hover:text-slate-900 cursor-pointer">Home</span>
            <span>›</span>
            <span className="hover:text-slate-900 cursor-pointer">Drivers</span>
            <span>›</span>
            <span className="font-medium text-slate-900">Clayton Thomas</span>
          </div>

          {/* Profile Header Card */}
          <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-200">
            <div className="relative h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="relative px-6 pb-6">
              <div className="flex items-end justify-between -mt-12">
                <div className="flex items-end gap-4">
                  <img
                    src="/src/assets/driver-avatar.png"
                    alt="Driver avatar"
                    className="h-24 w-24 rounded-2xl border-4 border-white object-cover shadow-lg"
                  />
                  <div className="pb-2">
                    <h1 className="text-2xl font-bold text-slate-900">
                      Clayton Thomas
                    </h1>
                    <p className="text-slate-600">@ClaySlides</p>
                    <p className="text-sm text-slate-500 mt-1">
                      📍 Phoenix, AZ • 🏎️ Thomas Drift • 👥 Team Crash
                    </p>
                  </div>
                </div>
                <button className="rounded-lg bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors mb-2">
                  Follow
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-3 gap-6">
            {/* Left Column - Stats & Info */}
            <div className="space-y-6">
              <DriverStats />
              <VehiclesList />
              <AchievementsList />
            </div>

            {/* Right Column - Feed */}
            <div className="col-span-2">
              <DriverFeed />
            </div>
          </div>
        </div>
      }
      right={
        <RightPreviewPanel>
          <div className="h-full w-full flex flex-col items-center justify-center gap-4 p-6 text-center">
            <div className="text-7xl">🏆</div>
            <h3 className="text-white text-xl font-bold">Quick Stats</h3>
            <p className="text-white/80 text-sm">Driver performance overview</p>
            <div className="mt-4 space-y-3 w-full">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-white mb-1">#42</div>
                <div className="text-xs text-white/70">Global Rank</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-xl font-bold text-white">15</div>
                  <div className="text-xs text-white/70">Events</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-xl font-bold text-white">8</div>
                  <div className="text-xs text-white/70">Wins</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-xl font-bold text-white">1.2K</div>
                  <div className="text-xs text-white/70">Points</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-xl font-bold text-white">53%</div>
                  <div className="text-xs text-white/70">Win Rate</div>
                </div>
              </div>
            </div>
          </div>
        </RightPreviewPanel>
      }
    />
  );
}

export default DriverProfile;
