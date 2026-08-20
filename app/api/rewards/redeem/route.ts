import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { rewardId, cost } = await request.json();

    if (db.user.points < cost) {
      return NextResponse.json(
        { success: false, message: "คะแนนสะสมไม่เพียงพอ" },
        { status: 400 }
      );
    }

    db.user.points -= cost;
    db.user.redeemedRewards.push(rewardId);

    return NextResponse.json({
      success: true,
      message: "แลกของรางวัลสำเร็จ!",
      points: db.user.points,
      redeemedRewards: db.user.redeemedRewards,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "เกิดข้อผิดพลาดจากเซิร์ฟเวอร์" },
      { status: 500 }
    );
  }
}