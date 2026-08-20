"use client";
import { useState, use } from "react";
import { useApp, Mission } from "@/context/AppContext"; // 1. ลบ MISSIONS_DATA ออก นำเข้าเฉพาะ useApp และ Mission

export default function MissionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { points, completedMissions, completeMission, missions } = useApp(); // 2. ดึง missions จาก useApp()
  const [verifying, setVerifying] = useState(false);

  // 3. เปลี่ยนมาค้นหาจาก missions และระบุ Type (m: Mission)
  const mission = missions.find((m: Mission) => m.id === id) || missions[0];
  const isCompleted = mission ? completedMissions.includes(mission.id) : false;

  const handleVerifyAndSubmit = () => {
    if (!mission) return;
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      completeMission(mission.id, mission.points);
    }, 1500);
  };

  if (!mission) {
    return <div className="p-6 text-center text-slate-500">ไม่พบข้อมูลภารกิจ</div>;
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="relative h-56 w-full bg-slate-200 rounded-2xl overflow-hidden">
        <img src={mission.image} alt={mission.title} className="w-full h-full object-cover" />
        <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-full font-semibold">
          {mission.category}
        </span>
      </div>

      <div>
        <div className="flex justify-between items-start">
          <h1 className="text-2xl font-bold text-slate-900">{mission.title}</h1>
          <span className="text-xl font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-xl">
            +{mission.points} Pts
          </span>
        </div>
        <p className="text-slate-500 text-sm mt-1">📍 {mission.location}</p>
      </div>

      <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-2">
        <h2 className="font-bold text-slate-800">รายละเอียดภารกิจ</h2>
        <p className="text-sm text-slate-600">{mission.description}</p>
      </div>

      <div className="bg-slate-900 text-white p-6 rounded-2xl text-center space-y-4">
        {isCompleted ? (
          <div className="py-2 space-y-2">
            <span className="text-5xl">✅</span>
            <h3 className="text-xl font-bold text-green-400">ทำภารกิจนี้สำเร็จแล้ว</h3>
            <p className="text-slate-300 text-sm">คุณได้รับ +{mission.points} Points เรียบร้อยแล้ว (แต้มรวม: {points.toLocaleString()} Pts)</p>
          </div>
        ) : verifying ? (
          <div className="py-4 space-y-2">
            <div className="inline-block w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm font-medium">กำลังตรวจสอบข้อมูล...</p>
          </div>
        ) : (
          <>
            <h3 className="font-bold text-lg">ส่งงานเพื่อรับ {mission.points} Points</h3>
            <button
              onClick={handleVerifyAndSubmit}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl transition"
            >
              📷 กดส่งงานและยืนยันภารกิจ
            </button>
          </>
        )}
      </div>
    </div>
  );
}