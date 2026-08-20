import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const mission = db.missions.find((m) => m.id === id);

    if (!mission) {
      return NextResponse.json({ error: "Mission not found" }, { status: 404 });
    }

    if (db.user.completedMissions.includes(id)) {
      return NextResponse.json({ error: "Mission already completed" }, { status: 400 });
    }

    // อัปเดตสถานะใน Backend
    db.user.completedMissions.push(id);
    db.user.points += mission.points;
    mission.participants += 1;

    return NextResponse.json({
      success: true,
      points: db.user.points,
      completedMissions: db.user.completedMissions,
    });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}