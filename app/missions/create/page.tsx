"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext"; // ปรับ path ตามโครงสร้างโฟลเดอร์ของคุณ

export default function CreateMissionPage() {
  const { addMission } = useApp();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<"QR Code" | "Photo" | "GPS">("Photo");
  const [points, setPoints] = useState<number>(150);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const defaultImage = "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=500&q=80";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    // เพิ่มภารกิจใหม่เข้าสู่ Context และ LocalStorage
    addMission({
      title: title.trim(),
      category,
      points: Number(points) || 100,
      location: location.trim() || "ออนไลน์",
      description: description.trim(),
      image: image.trim() || defaultImage,
    });

    // นำผู้ใช้กลับไปยังหน้าแรกทันที
    router.push("/");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">สร้างภารกิจใหม่</h1>
        <p className="text-slate-500 text-sm mt-1">กรอกข้อมูลและเผยแพร่ภารกิจไปยังหน้าแรก</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-slate-200 p-6 rounded-2xl space-y-5 shadow-sm">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">ชื่อภารกิจ *</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="เช่น เช็คอินคาเฟ่รักษ์โลก"
            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">ประเภทภารกิจ</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as "QR Code" | "Photo" | "GPS")}
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            >
              <option value="Photo">📷 Photo Verification</option>
              <option value="QR Code">📱 QR Code Check-in</option>
              <option value="GPS">📍 GPS Location</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">คะแนน (Points) *</label>
            <input
              type="number"
              required
              min={10}
              value={points}
              onChange={(e) => setPoints(Number(e.target.value))}
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">สถานที่</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="เช่น สยามสแควร์ หรือ ออนไลน์"
            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">URL รูปภาพ</label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="https://images.unsplash.com/..."
            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">รายละเอียด *</label>
          <textarea
            required
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="อธิบายเงื่อนไขภารกิจ..."
            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition shadow-md"
        >
          🚀 เผยแพร่ภารกิจไปยังหน้าแรก
        </button>
      </form>
    </div>
  );
}