import { Link } from "react-router-dom";
import { AppLayout } from "@/features/applayout/AppLayout";
import { SidebarNav } from "@/features/applayout/SidebarNav";
import { CenterColumn } from "@/features/applayout/CenterColumn";
import { RightPreviewPanel } from "@/features/applayout/RightPreviewPanel";

function HomePage() {
  const featuredPosts = [
    {
      id: 1,
      title: "Epic Drift Battle 2026",
      description: "Watch the most intense drift competition of the year",
      bgColor: "from-purple-400 to-pink-400",
      icon: "🏁",
      tags: ["Live", "Featured"],
      tagColors: [
        "bg-red-500 text-white animate-pulse",
        "bg-yellow-100 text-yellow-700",
      ],
    },
    {
      id: 2,
      title: "New Driver Profiles",
      description: "Check out the latest drivers joining the scene",
      bgColor: "from-blue-400 to-cyan-400",
      icon: "👤",
      tags: ["New", "Drivers"],
      tagColors: ["bg-green-100 text-green-700", "bg-blue-100 text-blue-700"],
    },
    {
      id: 3,
      title: "Tournament Brackets",
      description: "Season finals bracket is now live!",
      bgColor: "from-orange-400 to-red-400",
      icon: "🏆",
      tags: ["Tournament", "Finals"],
      tagColors: ["bg-orange-100 text-orange-700", "bg-red-100 text-red-700"],
    },
    {
      id: 4,
      title: "Media Gallery",
      description: "Browse stunning drift photography and videos",
      bgColor: "from-emerald-400 to-teal-400",
      icon: "📸",
      tags: ["Media", "Gallery"],
      tagColors: [
        "bg-teal-100 text-teal-700",
        "bg-emerald-100 text-emerald-700",
      ],
    },
  ];

  return (
    <AppLayout
      sidebar={<SidebarNav />}
      center={
        <CenterColumn title="Home">
          {/* Welcome Banner */}
          <div className="col-span-2 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-8 text-white shadow-lg">
            <h1 className="text-3xl font-bold mb-2">Welcome to DRIV 🏎️</h1>
            <p className="text-slate-300 text-lg mb-6">
              Your ultimate drift racing community hub
            </p>
            <div className="flex gap-3">
              <Link
                to="/events"
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
              >
                Browse Events
              </Link>
              <Link
                to="/media"
                className="rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Explore Media
              </Link>
            </div>
          </div>

          {/* Featured Cards */}
          {featuredPosts.map((post) => (
            <div
              key={post.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-all border border-slate-200 cursor-pointer"
            >
              <div
                className={`relative h-44 bg-gradient-to-br ${post.bgColor} flex items-center justify-center`}
              >
                <div className="text-7xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {post.icon}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={tag}
                      className={`rounded px-2.5 py-1 text-xs font-medium ${post.tagColors[idx]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </CenterColumn>
      }
      right={
        <RightPreviewPanel>
          <div className="h-full w-full flex flex-col items-center justify-center gap-3">
            <div className="text-6xl">🏁</div>
            <h3 className="text-white text-lg font-bold text-center">
              Start Your Drift Journey
            </h3>
            <p className="text-white/80 text-sm text-center px-4">
              Join tournaments, connect with drivers, and share your best
              moments
            </p>
          </div>
        </RightPreviewPanel>
      }
    />
  );
}

export default HomePage;
