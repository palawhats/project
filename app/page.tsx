"use client";
import { useState } from "react";
import Link from "next/link";
import { useApp, Mission } from "@/context/AppContext";

export default function HomePage() {
  const { points, completedMissions, missions, isLoading } = useApp();
  const [activeTab, setActiveTab] = useState<string>("ALL");

  const categories = ["ALL", "Photo", "QR Code", "GPS"];

  const filteredMissions = activeTab === "ALL"
    ? missions
    : missions.filter((m) => m.category === activeTab);

  return (
    <div className="space-y-6">
      
      {/* Title */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dashboard Overview</h1>
          <p className="text-xs text-slate-400 mt-0.5">ยินดีต้อนรับกลับมา! ตรวจสอบภารกิจและแต้มสะสมของคุณ</p>
        </div>
        <Link
          href="/missions/create"
          className="px-4 py-2 rounded-xl text-xs font-bold bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/20 transition"
        >
          + สร้างภารกิจ
        </Link>
      </div>

      {/* Top Stat Cards (เลียนแบบแถบบนสุดในรูป reference) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Card 1: Main Balance Card */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-slate-400">💳 Total Balance</span>
            <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">PTS</span>
          </div>

          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              {points.toLocaleString()} <span className="text-sm font-bold text-slate-400">PTS</span>
            </h2>
            <p className="text-xs font-semibold text-emerald-500 mt-1">
              +14.5% <span className="text-slate-400 font-normal">จากสัปดาห์ที่แล้ว</span>
            </p>
          </div>

          {/* Multi-color Progress bar เหมือนในภาพ Extej */}
          <div className="space-y-1.5">
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex">
              <div className="w-[50%] bg-amber-400" />
              <div className="w-[30%] bg-indigo-500" />
              <div className="w-[20%] bg-emerald-400" />
            </div>
            <div className="flex justify-between text-[10px] font-bold text-slate-400">
              <span className="text-amber-500">● Photo</span>
              <span className="text-indigo-500">● QR Code</span>
              <span className="text-emerald-500">● GPS</span>
            </div>
          </div>
        </div>

        {/* Card 2: Mission Completed Stat */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-slate-400">🎯 ภารกิจที่สำเร็จ</span>
            <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-md">+5 เดือนนี้</span>
          </div>

          <div>
            <h3 className="text-3xl font-black text-slate-900">
              {completedMissions.length} <span className="text-sm font-bold text-slate-400">/ {missions.length}</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">ทำสำเร็จแล้ว {Math.round((completedMissions.length / (missions.length || 1)) * 100)}% ของทั้งหมด</p>
          </div>

          <div className="flex gap-2 pt-2">
            <Link
              href="/store"
              className="flex-1 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold text-center shadow-sm transition"
            >
              แลกของรางวัล
            </Link>
          </div>
        </div>

        {/* Card 3: Quick Action Card */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-slate-400">🔥 Daily Streak</span>
            <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-md">Active</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center text-2xl font-black">
              ⚡
            </div>
            <div>
              <p className="text-lg font-black text-slate-900">5 วันต่อเนื่อง!</p>
              <p className="text-xs text-slate-400">เข้าใช้งานวันพรุ่งนี้เพื่อรับ +50 PTS</p>
            </div>
          </div>

          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-orange-500 w-[70%]" />
          </div>
        </div>

      </div>

      {/* Main Content Section (Cards & Filters) */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-6">
        
        {/* Header & Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">รายการภารกิจ (Active Quests)</h3>
            <p className="text-xs text-slate-400">เลือกภารกิจที่คุณต้องการเข้าร่วมเพื่อรับคะแนน</p>
          </div>

          {/* Time / Filter Selector Pills (เลียนแบบ 1D 7D 1M ในรูป) */}
          <div className="flex bg-slate-100 p-1 rounded-xl gap-1 self-start sm:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeTab === cat
                    ? "bg-white text-orange-500 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mission Cards Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 rounded-2xl bg-slate-100 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {filteredMissions.map((mission: Mission) => {
              const isDone = completedMissions.includes(mission.id);

              return (
                <div
                  key={mission.id}
                  className="bg-slate-50/70 hover:bg-white border border-slate-200/80 rounded-2xl p-4 flex flex-col justify-between transition-all duration-200 hover:shadow-md group"
                >
                  <div className="space-y-3">
                    {/* Image */}
                    <div className="relative h-36 w-full rounded-xl overflow-hidden bg-slate-200">
                      <img
                        src={mission.image}
                        alt={mission.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                      <span className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm">
                        {mission.category}
                      </span>
                    </div>

                    {/* Info */}
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm line-clamp-1 group-hover:text-orange-500 transition">
                        {mission.title}
                      </h4>
                      <p className="text-slate-400 text-xs mt-0.5 line-clamp-1">
                        📍 {mission.location}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-semibold">รางวัล</span>
                      <span className="text-base font-black text-orange-500">+{mission.points} PTS</span>
                    </div>

                    <Link
                      href={`/missions/${mission.id}`}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                        isDone
                          ? "bg-slate-200 text-slate-500"
                          : "bg-orange-500 hover:bg-orange-600 text-white shadow-sm"
                      }`}
                    >
                      {isDone ? "ทำแล้ว" : "เริ่มภารกิจ"}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

    </div>
  );
}