"use client";
import { useState } from "react";
import Link from "next/link";
import { useApp, Mission } from "@/context/AppContext";

export default function HomePage() {
  const { points, completedMissions, missions, isLoading } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Photo", "QR Code", "GPS"];

  const filteredMissions = activeCategory === "All"
    ? missions
    : missions.filter((m) => m.category === activeCategory);

  return (
    <div className="space-y-6">
      {/* User Dashboard & Gamification Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 to-slate-900/90 border border-slate-800 p-6 md:p-7 shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
          {/* User Info & Streak */}
          <div className="space-y-3 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center gap-1">
                🔥 5 วันติดกัน! (Streak)
              </span>
              <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                Level 3 Challenger
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              ทำภารกิจวันนี้ <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">รับแต้มคูณ 2x</span>
            </h1>

            {/* Level XP Bar */}
            <div className="max-w-md space-y-1.5">
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>ความคืบหน้า Level 4</span>
                <span className="text-slate-300">750 / 1,000 XP</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/50">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-[75%] transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* Points Counter Badge */}
          <div className="w-full md:w-auto bg-slate-950/80 border border-slate-800/80 p-4 rounded-2xl flex items-center justify-between md:justify-start gap-5 shadow-inner">
            <div>
              <p className="text-slate-400 text-[11px] font-semibold uppercase tracking-wider">แต้มของคุณ</p>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-3xl font-black text-amber-400 tracking-tight">
                  {points.toLocaleString()}
                </span>
                <span className="text-xs font-bold text-slate-400">PTS</span>
              </div>
            </div>
            <Link
              href="/store"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 text-xs font-extrabold transition shadow-lg shadow-amber-500/20 active:scale-95"
            >
              ร้านค้า 🛒
            </Link>
          </div>
        </div>
      </div>

      {/* Filter Category Pills */}
      <div className="flex items-center justify-between gap-4 overflow-x-auto pb-1 scrollbar-none">
        <div className="flex items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              }`}
            >
              {cat === "All" ? "✨ ทั้งหมด" : cat === "Photo" ? "📷 ถ่ายภาพ" : cat === "QR Code" ? "📱 สแกน QR" : "📍 เช็คอิน GPS"}
            </button>
          ))}
        </div>
        <span className="text-xs text-slate-500 font-medium hidden sm:inline">
          {filteredMissions.length} ภารกิจ
        </span>
      </div>

      {/* Mission Cards Feed */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-80 rounded-2xl bg-slate-900/60 animate-pulse border border-slate-800" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filteredMissions.map((mission: Mission) => {
            const isDone = completedMissions.includes(mission.id);

            return (
              <div
                key={mission.id}
                className="group bg-slate-900/40 hover:bg-slate-900 border border-slate-800/80 hover:border-indigo-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between"
              >
                <div>
                  {/* Card Banner Image */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                    <img
                      src={mission.image}
                      alt={mission.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    {/* Category Tag */}
                    <span className="absolute top-3 left-3 backdrop-blur-md bg-slate-950/70 border border-white/10 text-indigo-300 text-[10px] font-bold px-2.5 py-1 rounded-lg">
                      {mission.category}
                    </span>

                    {/* Completion Tag */}
                    {isDone && (
                      <span className="absolute top-3 right-3 backdrop-blur-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-lg">
                        ✓ สำเร็จแล้ว
                      </span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-slate-100 text-sm line-clamp-1 group-hover:text-indigo-300 transition">
                      {mission.title}
                    </h3>
                    <p className="text-slate-400 text-xs flex items-center gap-1 line-clamp-1">
                      <span className="text-slate-500">📍</span> {mission.location}
                    </p>
                  </div>
                </div>

                {/* Card Action & Reward */}
                <div className="p-4 pt-0 flex items-center justify-between border-t border-slate-800/40 mt-3 pt-3">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-semibold text-slate-400">รางวัล</span>
                    <span className="text-sm font-black text-amber-400">+{mission.points}</span>
                    <span className="text-[10px] text-slate-500 font-bold">PTS</span>
                  </div>

                  <Link
                    href={`/missions/${mission.id}`}
                    className={`text-xs px-3.5 py-2 rounded-xl font-bold transition-all active:scale-95 ${
                      isDone
                        ? "bg-slate-800 text-slate-400 hover:bg-slate-700"
                        : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30"
                    }`}
                  >
                    {isDone ? "ดูผลงาน" : "ทำภารกิจ 🚀"}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}