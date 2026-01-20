import { AppLayout } from "@/features/applayout/AppLayout";
import { SidebarNav } from "@/features/applayout/SidebarNav";
import { CenterColumn } from "@/features/applayout/CenterColumn";
import { RightPreviewPanel } from "@/features/applayout/RightPreviewPanel";

function BracketPage() {
  const tournaments = [
    {
      id: 1,
      name: "Winter Championship 2026",
      stage: "Finals",
      participants: 16,
      bgColor: "from-indigo-400 to-blue-400",
      icon: "🏆",
      status: "Live",
    },
    {
      id: 2,
      name: "Spring Qualifier Series",
      stage: "Semi-Finals",
      participants: 8,
      bgColor: "from-green-400 to-emerald-400",
      icon: "🌸",
      status: "In Progress",
    },
    {
      id: 3,
      name: "Regional Showdown",
      stage: "Quarter-Finals",
      participants: 32,
      bgColor: "from-orange-400 to-red-400",
      icon: "⚔️",
      status: "Scheduled",
    },
    {
      id: 4,
      name: "Rookie Tournament",
      stage: "Round 1",
      participants: 64,
      bgColor: "from-purple-400 to-pink-400",
      icon: "🌟",
      status: "Open",
    },
  ];

  return (
    <AppLayout
      sidebar={<SidebarNav />}
      center={
        <CenterColumn title="Tournament Brackets">
          {tournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all border border-slate-200 cursor-pointer"
            >
              <div
                className={`relative h-44 bg-gradient-to-br ${tournament.bgColor} flex items-center justify-center`}
              >
                <div className="text-7xl transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                  {tournament.icon}
                </div>
                {tournament.status === "Live" && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-500 text-white rounded-full px-3 py-1 text-xs font-bold animate-pulse flex items-center gap-1">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      LIVE
                    </span>
                  </div>
                )}
                <div className="absolute bottom-3 right-3">
                  <span className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-slate-900">
                    {tournament.stage}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {tournament.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-slate-600">
                      <span className="font-semibold text-slate-900">
                        {tournament.participants}
                      </span>{" "}
                      drivers
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        tournament.status === "Live"
                          ? "bg-red-100 text-red-700"
                          : tournament.status === "In Progress"
                          ? "bg-blue-100 text-blue-700"
                          : tournament.status === "Scheduled"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {tournament.status}
                    </span>
                  </div>
                  <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                    View Bracket →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </CenterColumn>
      }
      right={
        <RightPreviewPanel>
          <div className="h-full w-full flex flex-col items-center justify-center gap-4">
            <div className="text-5xl">🏁</div>
            <h3 className="text-white text-lg font-bold text-center">
              Tournament Brackets
            </h3>
            <p className="text-white/80 text-sm text-center px-2">
              Track competitions, view matchups, and follow your favorite
              drivers
            </p>
            <div className="w-full space-y-2 mt-2 px-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-sm font-semibold">
                    Next Match
                  </span>
                  <span className="text-white/60 text-xs">In 2 hours</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-white text-sm">
                    <div className="w-5 h-5 rounded-full bg-blue-400"></div>
                    <span className="text-xs">Driver A</span>
                    <span className="ml-auto text-xs">vs</span>
                  </div>
                  <div className="flex items-center gap-2 text-white text-sm">
                    <div className="w-5 h-5 rounded-full bg-purple-400"></div>
                    <span className="text-xs">Driver B</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RightPreviewPanel>
      }
    />
  );
}

export default BracketPage;
