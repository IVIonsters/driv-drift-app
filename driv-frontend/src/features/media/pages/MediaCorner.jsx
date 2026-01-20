import { AppLayout } from "@/features/applayout/AppLayout";
import { SidebarNav } from "@/features/applayout/SidebarNav";
import { CenterColumn } from "@/features/applayout/CenterColumn";
import { RightPreviewPanel } from "@/features/applayout/RightPreviewPanel";

function MediaCorner() {
  const mediaCards = [
    {
      id: 1,
      user: "Liam",
      username: "@liamdesign",
      time: "7h",
      title: "Design Notes is a show about...",
      bgColor: "from-orange-200 to-orange-100",
      icon: "🚗",
      tags: ["Motion", "iOS", "Apps"],
      tagColors: [
        "bg-yellow-100 text-yellow-700",
        "bg-green-100 text-green-700",
        "bg-slate-200 text-slate-700",
      ],
    },
    {
      id: 2,
      user: "Sofia",
      username: "@Sofia",
      time: "8h",
      title: "How seven design problems s...",
      bgColor: "from-teal-300 to-teal-200",
      icon: "🚐",
      tags: ["Icons", "Web", "UI Design"],
      tagColors: [
        "bg-red-100 text-red-700",
        "bg-slate-200 text-slate-700",
        "bg-purple-100 text-purple-700",
      ],
    },
  ];

  return (
    <AppLayout
      sidebar={<SidebarNav />}
      center={
        <CenterColumn title="Bookmarks">
          {mediaCards.map((card) => (
            <div
              key={card.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow border border-slate-200"
            >
              {/* Card Image Area */}
              <div
                className={`relative h-36 bg-gradient-to-br ${card.bgColor} flex items-center justify-center`}
              >
                <div className="text-5xl transform group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                {/* Checkmark */}
                <div className="absolute top-2.5 left-2.5">
                  <div className="h-4 w-4 rounded bg-blue-500 flex items-center justify-center text-white text-xs">
                    ✓
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-3.5">
                <div className="flex items-start justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-slate-300"></div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-semibold text-slate-900">
                          {card.user}
                        </span>
                        <span className="text-blue-500 text-xs">✓</span>
                      </div>
                      <div className="text-xs text-slate-500">
                        {card.username} · {card.time}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-700 mb-2.5">{card.title}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {card.tags.map((tag, idx) => (
                    <span
                      key={tag}
                      className={`rounded px-2 py-0.5 text-xs font-medium ${card.tagColors[idx]}`}
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
          <div className="h-full w-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl mb-4">🏠</div>
              <div className="text-white/80 text-sm">
                Preview your media here
              </div>
            </div>
          </div>
        </RightPreviewPanel>
      }
    />
  );
}

export default MediaCorner;
