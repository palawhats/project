import { NextResponse } from "next/server";
import { db, Mission } from "@/lib/db";

// GET: /api/missions
export async function GET() {
  return NextResponse.json({
    user: db.user,
    missions: db.missions,
  });
}

// POST: /api/missions (สร้างภารกิจใหม่)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, category, points, location, description, image } = body;

    if (!title || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newMission: Mission = {
      id: Date.now().toString(),
      title,
      category: category || "Photo",
      points: Number(points) || 100,
      location: location || "ออนไลน์",
      participants: 0,
      image: image || "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=500&q=80",
      description,
      createdAt: new Date().toISOString(),
    };

    db.missions.unshift(newMission); // เพิ่มไว้บนสุด
    return NextResponse.json(newMission, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create mission" }, { status: 500 });
  }
}