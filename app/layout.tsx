import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { AppProvider } from "@/context/AppContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuestPulse - O2O Quest Platform",
  description: "พิชิตภารกิจ รับแต้ม แลกของรางวัลสุดพรีเมียม",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className="dark">
      <body className={`${inter.className} bg-[#0b0f19] text-slate-100 min-h-screen pb-20 md:pb-8 antialiased selection:bg-indigo-500 selection:text-white`}>
        <AppProvider>
          {/* Ambient Lighting FX */}
          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[350px] bg-gradient-to-b from-indigo-600/15 via-purple-600/5 to-transparent blur-3xl pointer-events-none -z-10" />

          {/* Desktop & Mobile Header */}
          <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#0b0f19]/80 border-b border-slate-800/60">
            <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2.5 group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition">
                  <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-bold text-base">
                    ⚡
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
                    QuestPulse
                  </span>
                  <span className="text-[9px] font-medium text-indigo-400 -mt-1 tracking-wider uppercase">Beta v2.0</span>
                </div>
              </Link>

              {/* Quick Actions (Desktop Navigation) */}
              <nav className="hidden md:flex items-center gap-2">
                <Link href="/" className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 transition">
                  🎯 ภารกิจ
                </Link>
                <Link href="/store" className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 transition">
                  🎁 ร้านค้า
                </Link>
                <Link
                  href="/missions/create"
                  className="ml-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20 hover:opacity-90 active:scale-95 transition"
                >
                  + สร้างภารกิจ
                </Link>
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main className="max-w-5xl mx-auto px-4 pt-6">{children}</main>

          {/* Mobile Bottom Navigation Bar (แท็บล่างสุดสำหรับมือถือ) */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0b0f19]/90 border-t border-slate-800/80 px-6 py-2">
            <div className="flex justify-around items-center">
              <Link href="/" className="flex flex-col items-center gap-1 text-indigo-400 font-medium text-[11px]">
                <span className="text-lg">🎯</span>
                <span>ภารกิจ</span>
              </Link>
              <Link href="/store" className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-200 font-medium text-[11px]">
                <span className="text-lg">🎁</span>
                <span>ร้านค้า</span>
              </Link>
              <Link href="/missions/create" className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-200 font-medium text-[11px]">
                <div className="w-10 h-10 -mt-5 rounded-full bg-indigo-600 border-4 border-[#0b0f19] flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-indigo-600/40">
                  +
                </div>
                <span>สร้าง</span>
              </Link>
              <div className="flex flex-col items-center gap-1 text-slate-400 font-medium text-[11px] cursor-not-allowed opacity-60">
                <span className="text-lg">🔥</span>
                <span>อันดับ</span>
              </div>
            </div>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}