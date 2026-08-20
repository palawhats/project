"use client";
import { useState } from "react";
import { useApp } from "@/context/AppContext";

export default function StorePage() {
  const { points, redeemedRewards, redeemReward } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const rewards = [
    { id: "r1", title: "E-Voucher กาแฟอเมริกาโน่ฟรี 1 แก้ว", category: "Drink", cost: 350, image: "☕", stock: 15, tag: "Popular" },
    { id: "r2", title: "กระเป๋าผ้ารักษ์โลก QuestPulse", category: "Gadget", cost: 600, image: "🛍️", stock: 8, tag: "Limited" },
    { id: "r3", title: "บัตรชมภาพยนตร์ SF Cinema 1 ใบ", category: "Voucher", cost: 1000, image: "🎬", stock: 5, tag: "Hot" },
    { id: "r4", title: "คูปองส่วนลด GrabFood 100 บาท", category: "Voucher", cost: 850, image: "🛵", stock: 20, tag: "Discount" },
    { id: "r5", title: "กระบอกน้ำ Stainless เก็บความเย็น", category: "Gadget", cost: 1200, image: "🥤", stock: 3, tag: "Limited" },
    { id: "r6", title: "บัตรของขวัญ Starbucks 200 บาท", category: "Drink", cost: 1500, image: "💳", stock: 10, tag: "Exclusive" },
  ];

  const categories = ["ALL", "Drink", "Gadget", "Voucher"];

  const filteredRewards = activeCategory === "ALL"
    ? rewards
    : rewards.filter((r) => r.category === activeCategory);

  const handleRedeem = async (id: string, cost: number) => {
    const res = await redeemReward(id, cost);
    alert(res.message);
  };

  return (
    <div className="space-y-6">
      
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Rewards Store</h1>
          <p className="text-xs text-slate-400 mt-0.5">นำคะแนน PTS จากการทำภารกิจมาแลกรับของรางวัลและส่วนลดพิเศษ</p>
        </div>
      </div>

      {/* Top Stat Overview (Extej Style Widgets) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Widget 1: Available Balance */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-400 block">💳 แต้มคงเหลือ (Balance)</span>
            <div className="flex items-baseline gap-1.5 mt-1">
              <span className="text-3xl font-black text-slate-900 tracking-tight">{points.toLocaleString()}</span>
              <span className="text-xs font-bold text-orange-500">PTS</span>
            </div>
            <span className="text-[11px] font-medium text-emerald-500 mt-1 inline-block">พร้อมแลกของรางวัลได้ทันที</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center text-xl font-bold">
            💰
          </div>
        </div>

        {/* Widget 2: Total Redeemed */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-400 block">🎁 แลกไปแล้วทั้งหมด</span>
            <div className="flex items-baseline gap-1.5 mt-1">
              <span className="text-3xl font-black text-slate-900 tracking-tight">{redeemedRewards.length}</span>
              <span className="text-xs font-bold text-slate-400">รายการ</span>
            </div>
            <span className="text-[11px] font-medium text-slate-400 mt-1 inline-block">สิทธิ์ใช้งานครบถ้วน</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center text-xl font-bold">
            🏷️
          </div>
        </div>

        {/* Widget 3: VIP Status */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-400 block">✨ สิทธิพิเศษผู้ใช้</span>
            <div className="flex items-baseline gap-1.5 mt-1">
              <span className="text-xl font-black text-slate-900 tracking-tight">Pro Member</span>
            </div>
            <span className="text-[11px] font-medium text-orange-500 mt-1 inline-block">สิทธิ์แลกของรางวัลการันตี 100%</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center text-xl font-bold">
            👑
          </div>
        </div>

      </div>

      {/* Main Store Area */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-6">
        
        {/* Header & Category Pills */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">รายการของรางวัล (Available Rewards)</h3>
            <p className="text-xs text-slate-400">เลือกของรางวัลที่คุณต้องการแลกด้วยคะแนนสะสม</p>
          </div>

          <div className="flex bg-slate-100 p-1 rounded-xl gap-1 self-start sm:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeCategory === cat
                    ? "bg-white text-orange-500 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {cat === "ALL" ? "ทั้งหมด" : cat === "Drink" ? "☕ เครื่องดื่ม" : cat === "Gadget" ? "🎒 สินค้า" : "🎟️ คูปอง"}
              </button>
            ))}
          </div>
        </div>

        {/* Rewards Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {filteredRewards.map((item) => {
            const isRedeemed = redeemedRewards.includes(item.id);
            const canAfford = points >= item.cost;

            return (
              <div
                key={item.id}
                className="bg-slate-50/70 hover:bg-white border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-md group"
              >
                <div className="space-y-4">
                  {/* Image/Icon Box */}
                  <div className="relative h-28 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center text-5xl shadow-sm">
                    {item.image}
                    <span className="absolute top-2 left-2 bg-orange-50 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded-md border border-orange-100">
                      {item.tag}
                    </span>
                    <span className="absolute top-2 right-2 text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                      เหลือ {item.stock} ชิ้น
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-orange-500 uppercase tracking-wider">{item.category}</span>
                    <h4 className="font-bold text-slate-800 text-sm line-clamp-2 mt-0.5 group-hover:text-orange-500 transition">
                      {item.title}
                    </h4>
                  </div>
                </div>

                {/* Footer & Redeem Button */}
                <div className="mt-5 pt-3 border-t border-slate-200/60 space-y-3">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-slate-400 font-medium">ราคาแลก</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-black text-slate-900">{item.cost.toLocaleString()}</span>
                      <span className="text-xs font-bold text-orange-500">PTS</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRedeem(item.id, item.cost)}
                    disabled={isRedeemed || !canAfford}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold transition shadow-sm ${
                      isRedeemed
                        ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                        : canAfford
                        ? "bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/20 active:scale-95"
                        : "bg-slate-200 text-slate-400 cursor-not-allowed"
                    }`}
                  >
                    {isRedeemed ? "✓ แลกสิทธิ์แล้ว" : canAfford ? "แลกของรางวัล 🎁" : "แต้มไม่พอ"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}