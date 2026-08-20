"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

export interface Mission {
  id: string;
  title: string;
  category: string;
  location: string;
  points: number;
  description?: string;
  image: string;
}

interface AppContextType {
  points: number;
  completedMissions: string[];
  redeemedRewards: string[];
  missions: Mission[];
  isLoading: boolean;
  completeMission: (id: string, points: number) => Promise<void>;
  redeemReward: (id: string, cost: number) => Promise<{ success: boolean; message: string }>;
  createMission: (missionData: Omit<Mission, "id">) => void; // เพิ่มนิยามประเภทฟังก์ชัน
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [points, setPoints] = useState<number>(1250);
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);
  const [redeemedRewards, setRedeemedRewards] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [missions, setMissions] = useState<Mission[]>([
    {
      id: "m1",
      title: "เช็คอินคาเฟ่พรีเมียม รับส่วนลดทันที",
      category: "Photo",
      location: "สยามสแควร์ ซอย 7",
      points: 150,
      description: "ถ่ายภาพเครื่องดื่มคู่กับบรรยากาศร้าน แล้วอัปโหลดเพื่อยืนยันสิทธิ์",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800",
    },
    {
      id: "m2",
      title: "สแกน QR Code หน้าเคาน์เตอร์บริการ",
      category: "QR Code",
      location: "เซ็นทรัลเวิลด์ ชั้น 3",
      points: 100,
      description: "สแกน QR Code ที่ตั้งอยู่บริเวณเคาน์เตอร์เพื่อสะสมแต้มพิเศษ",
      image: "https://images.unsplash.com/photo-1595079672139-cee4c06cdc92?q=80&w=800",
    },
    {
      id: "m3",
      title: "เช็คอิน GPS ร่วมกิจกรรมความสะอาดชุมชน",
      category: "GPS",
      location: "สวนลุมพินี กรุงเทพฯ",
      points: 300,
      description: "เดินทางไปยังจุดทำกิจกรรมและเปิดระบบ GPS เพื่อยืนยันพิกัด",
      image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=800",
    },
  ]);

  const completeMission = async (id: string, earnedPoints: number) => {
    if (!completedMissions.includes(id)) {
      setCompletedMissions((prev) => [...prev, id]);
      setPoints((prev) => prev + earnedPoints);
    }
  };

  const redeemReward = async (id: string, cost: number) => {
    if (points < cost) {
      return { success: false, message: "คะแนนสะสมของคุณไม่เพียงพอ" };
    }
    if (redeemedRewards.includes(id)) {
      return { success: false, message: "คุณเคยแลกรับของรางวัลนี้ไปแล้ว" };
    }
    setPoints((prev) => prev - cost);
    setRedeemedRewards((prev) => [...prev, id]);
    return { success: true, message: "แลกของรางวัลสำเร็จ!" };
  };

  // เพิ่มฟังก์ชันสำหรับสร้างภารกิจใหม่
  const createMission = (missionData: Omit<Mission, "id">) => {
    const newMission: Mission = {
      ...missionData,
      id: `m_${Date.now()}`,
    };
    setMissions((prev) => [newMission, ...prev]);
  };

  return (
    <AppContext.Provider
      value={{
        points,
        completedMissions,
        redeemedRewards,
        missions,
        isLoading,
        completeMission,
        redeemReward,
        createMission,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}