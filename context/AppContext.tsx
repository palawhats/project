"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

export interface Mission {
  id: string;
  title: string;
  category: "QR Code" | "Photo" | "GPS";
  points: number;
  location: string;
  participants: number;
  image: string;
  description: string;
}

interface AppContextType {
  points: number;
  completedMissions: string[];
  redeemedRewards: string[];
  missions: Mission[];
  isLoading: boolean;
  completeMission: (id: string, pts: number) => Promise<boolean>;
  addMission: (newMission: Omit<Mission, "id" | "participants">) => Promise<boolean>;
  redeemReward: (rewardId: string, cost: number) => Promise<{ success: boolean; message: string }>; // เพิ่ม Type
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [points, setPoints] = useState<number>(0);
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);
  const [redeemedRewards, setRedeemedRewards] = useState<string[]>([]);
  const [missions, setMissions] = useState<Mission[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/missions");
      if (res.ok) {
        const data = await res.json();
        setMissions(data.missions);
        setPoints(data.user.points);
        setCompletedMissions(data.user.completedMissions);
        setRedeemedRewards(data.user.redeemedRewards);
      }
    } catch (err) {
      console.error("Failed to load initial data", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addMission = async (newMissionData: Omit<Mission, "id" | "participants">): Promise<boolean> => {
    try {
      const res = await fetch("/api/missions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMissionData),
      });

      if (res.ok) {
        await fetchData();
        return true;
      }
      return false;
    } catch (err) {
      console.error("Failed to add mission", err);
      return false;
    }
  };

  const completeMission = async (id: string, pts: number): Promise<boolean> => {
    try {
      const res = await fetch(`/api/missions/${id}/complete`, { method: "POST" });
      if (res.ok) {
        const data = await res.json();
        setPoints(data.points);
        setCompletedMissions(data.completedMissions);
        return true;
      }
      return false;
    } catch (err) {
      console.error("Failed to complete mission", err);
      return false;
    }
  };

  // เพิ่มฟังก์ชัน redeemReward
  const redeemReward = async (rewardId: string, cost: number) => {
    try {
      const res = await fetch("/api/rewards/redeem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rewardId, cost }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setPoints(data.points);
        setRedeemedRewards(data.redeemedRewards);
        return { success: true, message: data.message };
      }
      return { success: false, message: data.message || "เกิดข้อผิดพลาด" };
    } catch (err) {
      return { success: false, message: "ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้" };
    }
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
        addMission,
        redeemReward, // ส่งลง Value
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
}