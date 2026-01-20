import { AppLayout } from "@/features/applayout/AppLayout";
import { SidebarNav } from "@/features/applayout/SidebarNav";
import { CenterColumn } from "@/features/applayout/CenterColumn";
import { RightPreviewPanel } from "@/features/applayout/RightPreviewPanel";

function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Tokyo Drift Championship",
      date: "Jan 25, 2026",
      location: "Tokyo, Japan",
      status: "Registration Open",
      bgColor: "from-red-400 to-pink-400",
      icon: "🗾",
      participants: 45,
      prize: "$10,000",
    },
    {
      id: 2,
      title: "LA Street Drift Finals",
      date: "Feb 1, 2026",
      location: "Los Angeles, USA",
      status: "Coming Soon",
      bgColor: "from-blue-400 to-purple-400",
      icon: "🌴",
      participants: 32,
      prize: "$8,000",
    },
    {
      id: 3,
      title: "European Drift Tour",
      date: "Feb 15, 2026",
      location: "Berlin, Germany",
      status: "Registration Open",
      bgColor: "from-green-400 to-teal-400",
      icon: "🇪🇺",
      participants: 28,
      prize: "$12,000",
    },
    {
      id: 4,
      title: "Night Drift Spectacular",
      date: "Mar 5, 2026",
      location: "Dubai, UAE",
      status: "Early Bird",
      bgColor: "from-yellow-400 to-orange-400",
      icon: "🌙",
      participants: 18,
      prize: "$15,000",
    },
  ];

  return (
    <AppLayout
      sidebar={<SidebarNav />}
      center={
        <CenterColumn title="Events">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all border border-slate-200 cursor-pointer"
            >
              <div
                className={`relative h-44 bg-gradient-to-br ${event.bgColor} flex items-center justify-center overflow-hidden`}
              >
                <div className="text-8xl transform group-hover:scale-125 transition-transform duration-500">
                  {event.icon}
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-slate-900">
                    {event.status}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {event.title}
                </h3>
                <div className="space-y-2 text-sm text-slate-600 mb-4">
                  <div className="flex items-center gap-2">
                    <span>📅</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="flex gap-4 text-xs text-slate-500">
                    <span>👥 {event.participants} drivers</span>
                    <span>💰 {event.prize}</span>
                  </div>
                  <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </CenterColumn>
      }
      right={
        <RightPreviewPanel>
          <div className="h-full w-full flex flex-col items-center justify-center gap-3 text-center">
            <div className="text-5xl">🏁</div>
            <h3 className="text-white text-lg font-bold">Upcoming Events</h3>
            <p className="text-white/80 text-sm px-2">
              Don't miss the most exciting drift competitions worldwide
            </p>
            <div className="mt-4 space-y-2 w-full px-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-white text-base font-bold">Next Event</div>
                <div className="text-white/70 text-sm mt-1">
                  Tokyo Drift Championship
                </div>
                <div className="text-white/60 text-xs mt-1">In 6 days</div>
              </div>
              <button className="w-full bg-white text-teal-600 rounded-lg py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors">
                Register Now
              </button>
            </div>
          </div>
        </RightPreviewPanel>
      }
    />
  );
}

export default EventsPage;
