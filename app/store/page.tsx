"use client";
import { useState } from "react";
import { useApp } from "@/context/AppContext";

export default function StorePage() {
  const { points, redeemedRewards, redeemReward } = useApp();
  const [filter, setFilter] = useState<string>("All");

  const rewards = [
    { id: "r1", title: "E-Voucher กาแฟอเมริกาโน่ฟรี 1 แก้ว", category: "Drink", cost: 350, image: "☕", stock: 15 },
    { id: "r2", title: "กระเป๋าผ้ารักษ์โลก QuestPulse", category: "Gadget", cost: 600, image: "🛍️", stock: 8 },
    { id: "r3", title: "บัตรชมภาพยนตร์ SF Cinema 1 ใบ", category: "Voucher", cost: 1000, image: "🎬", stock: 5 },
    { id: "r4", title: "คูปองส่วนลด GrabFood 100 บาท", category: "Voucher", cost: 850, image: "🛵", stock: 20 },
    { id: "r5", title: "กระบอกน้ำ Stainless เก็บความเย็น", category: "Gadget", cost: 1200, image: "🥤", stock: 3 },
    { id: "r6", title: "บัตรของขวัญ Starbucks 200 บาท", category: "Drink", cost: 1500, image: "💳", stock: 10 },
  ];

  const filteredRewards = filter === "All"
    ? rewards
    : rewards.filter((r) => r.category === filter);

  const handleRedeem = async (id: string, cost: number) => {
    const res = await redeemReward(id, cost);
    alert(res.message);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0b140e] via-[#08110b] to-[#040805] border border-emerald-900/40 p-6 md:p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              🎁 Reward Center
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white mt-2">
              แลกของรางวัลสุดพรีเมียม
            </h1>
            <p className="text-zinc-400 text-xs mt-1">นำ Green PTS ที่สะสมไว้มาแลกของรางวัลได้ฟรี</p>
          </div>

          <div className="bg-[#030604]/90 border border-emerald-900/60 p-4 rounded-2xl flex items-center gap-4">
            <div>
              <p className="text-emerald-500/80 text-[10px] font-bold uppercase">แต้มคงเหลือ</p>
              <p className="text-2xl font-black text-emerald-400">{points.toLocaleString()} PTS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {["All", "Drink", "Gadget", "Voucher"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              filter === cat
                ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 scale-105"
                : "bg-[#0b140e] border border-emerald-950 text-zinc-400 hover:text-emerald-300"
            }`}
          >
            {cat === "All" ? "✨ ทั้งหมด" : cat === "Drink" ? "☕ เครื่องดื่ม" : cat === "Gadget" ? "🎒 สินค้าพรีเมียม" : "🎟️ คูปอง & ส่วนลด"}
          </button>
        ))}
      </div>

      {/* Rewards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {filteredRewards.map((item) => {
          const isRedeemed = redeemedRewards.includes(item.id);
          const canAfford = points >= item.cost;

          return (
            <div
              key={item.id}
              className="bg-[#09100b]/60 hover:bg-[#0c160f] border border-emerald-950 hover:border-emerald-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 shadow-lg"
            >
              <div className="space-y-4">
                <div className="h-28 rounded-xl bg-[#030604] flex items-center justify-center text-5xl shadow-inner border border-emerald-950">
                  {item.image}
                </div>

                <div>
                  <div className="flex justify-between items-center text-[10px] font-semibold text-zinc-400 mb-1">
                    <span className="text-emerald-400 font-bold">{item.category}</span>
                    <span>เหลือ {item.stock} ชิ้น</span>
                  </div>
                  <h3 className="font-bold text-zinc-100 text-sm line-clamp-2">{item.title}</h3>
                </div>
              </div>

              <div className="mt-5 space-y-3 pt-3 border-t border-emerald-950/60">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-zinc-400 font-medium">ราคาแลก</span>
                  <span className="text-lg font-black text-emerald-400">{item.cost} PTS</span>
                </div>

                <button
                  onClick={() => handleRedeem(item.id, item.cost)}
                  disabled={isRedeemed || !canAfford}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold transition active:scale-95 ${
                    isRedeemed
                      ? "bg-zinc-900 text-zinc-600 border border-zinc-800 cursor-not-allowed"
                      : canAfford
                      ? "bg-gradient-to-r from-emerald-500 to-green-500 hover:brightness-110 text-black shadow-lg shadow-emerald-500/20"
                      : "bg-zinc-900 text-zinc-600 border border-zinc-800 cursor-not-allowed"
                  }`}
                >
                  {isRedeemed ? "✓ แลกแล้ว" : canAfford ? "แลกของรางวัล 🎁" : "แต้มไม่พอ"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}