"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function CreateMissionPage() {
  const router = useRouter();
  const { createMission } = useApp();

  const [formData, setFormData] = useState({
    title: "",
    category: "Photo",
    location: "",
    points: 100,
    description: "",
    image: "",
  });

  const categoryOptions = [
    { id: "Photo", label: "ถ่ายภาพ", icon: "📷", desc: "ยืนยันด้วยรูปถ่าย" },
    { id: "QR Code", label: "สแกน QR", icon: "📱", desc: "สแกนรหัสสถานที่" },
    { id: "GPS", label: "เช็คอิน GPS", icon: "📍", desc: "เช็คอินตามพิกัด" },
  ];

  const quickPoints = [50, 100, 250, 500];

  const defaultImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.location) {
      alert("กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน");
      return;
    }

    createMission({
      ...formData,
      image: formData.image || defaultImage,
    });

    alert("สร้างภารกิจใหม่สำเร็จ!");
    router.push("/");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Top Header & Breadcrumb */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-500 hover:text-slate-900 shadow-sm transition"
          >
            ←
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">สร้างภารกิจใหม่ (New Quest)</h1>
            <p className="text-xs text-slate-400 mt-0.5">กำหนดเงื่อนไข และสร้างการ์ดภารกิจ O2O สำหรับผู้ใช้งาน</p>
          </div>
        </div>

        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold border border-orange-100">
          ⚡ Quest Creator Suite
        </span>
      </div>

      {/* 2-Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left Column: Input Form (Span 2) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* 1. Category Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                1. เลือกประเภทภารกิจ <span className="text-orange-500">*</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {categoryOptions.map((cat) => {
                  const isSelected = formData.category === cat.id;
                  return (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() => setFormData({ ...formData, category: cat.id })}
                      className={`p-3.5 rounded-xl border text-left transition flex flex-col justify-between h-24 ${
                        isSelected
                          ? "bg-orange-50/60 border-orange-500 text-slate-900 shadow-sm ring-1 ring-orange-500/20"
                          : "bg-slate-50/50 border-slate-200/80 text-slate-600 hover:bg-slate-100/70"
                      }`}
                    >
                      <div className="flex justify-between items-center w-full">
                        <span className="text-xl">{cat.icon}</span>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-orange-500" />}
                      </div>
                      <div>
                        <p className={`text-xs font-bold ${isSelected ? "text-orange-600" : "text-slate-800"}`}>
                          {cat.label}
                        </p>
                        <p className="text-[10px] text-slate-400 font-medium">{cat.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Mission Title */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                2. ชื่อภารกิจ <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="ต.อ. ถ่ายภาพเช็คอินเครื่องดื่มเมนูใหม่ประจำเดือน"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:bg-white transition"
              />
            </div>

            {/* 3. Location */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                3. สถานที่ / พิกัดภารกิจ <span className="text-orange-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 text-xs">📍</span>
                <input
                  type="text"
                  required
                  placeholder="ต.อ. ร้าน Quest Cafe สาขา สยามสแควร์ ซอย 7"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:bg-white transition"
                />
              </div>
            </div>

            {/* 4. Points Reward & Quick Select */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  4. จำนวนรางวัลที่จะได้รับ (PTS) <span className="text-orange-500">*</span>
                </label>
                <div className="flex gap-1.5">
                  {quickPoints.map((pts) => (
                    <button
                      type="button"
                      key={pts}
                      onClick={() => setFormData({ ...formData, points: pts })}
                      className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold border transition ${
                        formData.points === pts
                          ? "bg-orange-500 text-white border-orange-500"
                          : "bg-slate-100 text-slate-500 border-slate-200 hover:bg-slate-200"
                      }`}
                    >
                      +{pts}
                    </button>
                  ))}
                </div>
              </div>
              <input
                type="number"
                min="10"
                step="10"
                value={formData.points}
                onChange={(e) => setFormData({ ...formData, points: Number(e.target.value) })}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-800 font-bold focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:bg-white transition"
              />
            </div>

            {/* 5. Image URL */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                5. ลิงก์รูปภาพปก (Image Cover URL)
              </label>
              <input
                type="url"
                placeholder="https://images.unsplash.com/photo-..."
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:bg-white transition"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                ระบบจะใช้รูปภาพเริ่มต้นให้อัตโนมัติ หากปล่อยว่างไว้
              </p>
            </div>

            {/* 6. Description */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                6. คำอธิบายและขั้นตอนการทำภารกิจ
              </label>
              <textarea
                rows={3}
                placeholder="อธิบายรายละเอียดสิ่งที่ต้องแสดงในรูป หรือขั้นตอนสำหรับผู้เข้าร่วม..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:bg-white transition resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <Link
                href="/"
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100 transition"
              >
                ยกเลิก
              </Link>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl text-xs font-bold bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/20 active:scale-95 transition"
              >
                ยื่นคำขอสร้างภารกิจ 🚀
              </button>
            </div>

          </form>
        </div>

        {/* Right Column: Live Card Preview (Span 1) */}
        <div className="sticky top-20 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <span>👁️</span> Live Card Preview
            </span>
            <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md font-semibold">
              แสดงผลจริง
            </span>
          </div>

          {/* Render Preview Card */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-md space-y-3">
            <div className="relative h-40 w-full rounded-xl overflow-hidden bg-slate-100">
              <img
                src={formData.image || defaultImage}
                alt="Card Preview"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = defaultImage;
                }}
              />
              <span className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm">
                {formData.category}
              </span>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 text-sm line-clamp-2">
                {formData.title || "ระบุชื่อภารกิจของคุณ..."}
              </h4>
              <p className="text-slate-400 text-xs mt-1 line-clamp-1">
                📍 {formData.location || "ระบุสถานที่..."}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 block font-semibold">รางวัลที่จะได้รับ</span>
                <span className="text-base font-black text-orange-500">+{formData.points || 0} PTS</span>
              </div>
              <div className="px-3 py-1.5 bg-orange-500 text-white text-xs font-bold rounded-xl shadow-sm opacity-90">
                เริ่มภารกิจ
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-100 text-xs text-orange-700 space-y-1">
            <p className="font-bold">💡 คำแนะนำสำหรับการสร้างภารกิจ:</p>
            <p className="text-[11px] text-orange-600/90 leading-relaxed">
              ภาพถ่ายควรชัดเจนและสะท้อนถึงสถานที่จริง เพื่อความสะดวกในการตรวจสอบหลักฐานของผู้ใช้งาน
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}