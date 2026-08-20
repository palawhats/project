export interface Mission {
  id: string;
  title: string;
  category: "QR Code" | "Photo" | "GPS";
  points: number;
  location: string;
  participants: number;
  image: string;
  description: string;
  createdAt: string;
}

export interface Reward {
  id: string;
  title: string;
  category: "Drink" | "Gadget" | "Voucher";
  cost: number;
  image: string;
  stock: number;
}

export interface UserProfile {
  points: number;
  completedMissions: string[];
  redeemedRewards: string[];
}

export const db = {
  user: {
    points: 1250,
    completedMissions: [],
    redeemedRewards: [],
  } as UserProfile,

  missions: [
    {
      id: "1",
      title: "สแกน QR เช็คอินสวนสาธารณะ",
      category: "QR Code",
      points: 150,
      location: "สวนลุมพินี กรุงเทพฯ",
      participants: 42,
      image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&q=80",
      description: "เดินทางไปยังจุดบริการนักท่องเที่ยว แล้วสแกน QR Code เพื่อเช็คอิน",
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      title: "ถ่ายรูปแยกขยะพลาสติกรีไซเคิล",
      category: "Photo",
      points: 300,
      location: "จุดทิ้งขยะกทม. / ออนไลน์",
      participants: 128,
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80",
      description: "ถ่ายรูปการแยกขยะพลาสติกลงถังขยะรีไซเคิลอย่างถูกต้อง",
      createdAt: new Date().toISOString(),
    },
    {
      id: "3",
      title: "ปั่นจักรยานลดคาร์บอน 5 กิโลเมตร",
      category: "GPS",
      points: 250,
      location: "สวนเบญจกิติ",
      participants: 89,
      image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80",
      description: "เปิดระบบติดตามพิกัด GPS และปั่นจักรยานสะสมระยะทางให้ครบ 5 กม.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "4",
      title: "ใช้แก้ว Reusable ซื้อเครื่องดื่ม",
      category: "Photo",
      points: 100,
      location: "ร้านคาเฟ่ชั้นนำทั่วไป",
      participants: 210,
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80",
      description: "ถ่ายรูปแก้วน้ำส่วนตัวคู่กับเครื่องดื่มเพื่อช่วยลดขยะพลาสติกครั้งเดียวทิ้ง",
      createdAt: new Date().toISOString(),
    },
    {
      id: "5",
      title: "สแกน QR เข้าร่วมงาน Green Tech 2026",
      category: "QR Code",
      points: 200,
      location: "BITEC Bangna",
      participants: 65,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
      description: "สแกน QR Code บริเวณหน้าทางเข้างานเพื่อยืนยันการเข้าร่วมกิจกรรม",
      createdAt: new Date().toISOString(),
    },
    {
      id: "6",
      title: "เช็คอินคาเฟ่สาย Clean Energy",
      category: "GPS",
      points: 180,
      location: "อารีย์ กรุงเทพฯ",
      participants: 74,
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
      description: "เดินทางไปยังจุดเช็คอินร้านพาร์ทเนอร์และกดยืนยันพิกัด GPS",
      createdAt: new Date().toISOString(),
    },
  ] as Mission[],

  rewards: [
    {
      id: "r1",
      title: "E-Voucher กาแฟอเมริกาโน่ฟรี 1 แก้ว",
      category: "Drink",
      cost: 350,
      image: "☕",
      stock: 15,
    },
    {
      id: "r2",
      title: "กระเป๋าผ้ารักษ์โลก QuestPulse",
      category: "Gadget",
      cost: 600,
      image: "🛍️",
      stock: 8,
    },
    {
      id: "r3",
      title: "บัตรชมภาพยนตร์ SF Cinema 1 ใบ",
      category: "Voucher",
      cost: 1000,
      image: "🎬",
      stock: 5,
    },
    {
      id: "r4",
      title: "คูปองส่วนลด GrabFood 100 บาท",
      category: "Voucher",
      cost: 850,
      image: "🛵",
      stock: 20,
    },
    {
      id: "r5",
      title: "กระบอกน้ำ Stainless เก็บความเย็น",
      category: "Gadget",
      cost: 1200,
      image: "🥤",
      stock: 3,
    },
    {
      id: "r6",
      title: "บัตรของขวัญ Starbucks 200 บาท",
      category: "Drink",
      cost: 1500,
      image: "💳",
      stock: 10,
    },
  ] as Reward[],
};