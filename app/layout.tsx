import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { AppProvider } from "@/context/AppContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuestPulse - Gamified Dashboard",
  description: "ระบบบริหารจัดการภารกิจและแลกของรางวัล O2O",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className={`${inter.className} bg-[#F4F5F9] text-slate-800 min-h-screen antialiased`}>
        <AppProvider>
          <div className="flex min-h-screen">
            
            {/* Sidebar ด้านซ้าย (ตัดส่วน SYSTEM ออกแล้ว) */}
            <aside className="hidden lg:flex w-64 bg-white border-r border-slate-200/80 flex-col justify-between p-5 fixed h-full z-30">
              <div className="space-y-6">
                
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 px-2 py-1">
                  <div className="w-9 h-9 rounded-xl bg-orange-500 flex items-center justify-center text-white font-black text-lg shadow-md shadow-orange-500/30">
                    ❖
                  </div>
                  <span className="text-xl font-bold text-slate-900 tracking-tight">
                    Quest<span className="text-orange-500">Pulse</span>
                  </span>
                </Link>

                {/* Sidebar Navigation */}
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">PAGES</p>
                  <nav className="space-y-1">
                    <Link
                      href="/"
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-semibold text-sm bg-orange-500 text-white shadow-md shadow-orange-500/25 transition"
                    >
                      <div className="flex items-center gap-3">
                        <span>🎯</span>
                        <span>ภารกิจทั้งหมด</span>
                      </div>
                      <span className="text-xs bg-orange-600 px-2 py-0.5 rounded-md">6</span>
                    </Link>

                    <Link
                      href="/store"
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition"
                    >
                      <div className="flex items-center gap-3">
                        <span>🎁</span>
                        <span>ร้านค้าของรางวัล</span>
                      </div>
                    </Link>

                    <Link
                      href="/missions/create"
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition"
                    >
                      <div className="flex items-center gap-3">
                        <span>➕</span>
                        <span>สร้างภารกิจใหม่</span>
                      </div>
                    </Link>
                  </nav>
                </div>

              </div>

              {/* User Quick Info */}
              <div className="border-t border-slate-100 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 font-bold flex items-center justify-center text-sm">
                  AR
                </div>
                <div className="text-xs">
                  <p className="font-bold text-slate-800">Austin Robertson</p>
                  <p className="text-slate-400">Challenger Pro</p>
                </div>
              </div>
            </aside>

            {/* Main Area */}
            <div className="flex-1 lg:ml-64 flex flex-col min-w-0">
              
              {/* Header ด้านบน */}
              <header className="h-16 bg-white border-b border-slate-200/80 px-6 flex items-center justify-between sticky top-0 z-20">
                {/* Search Bar */}
                <div className="relative w-full max-w-sm">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 text-sm">🔍</span>
                  <input
                    type="text"
                    placeholder="ค้นหาภารกิจ, รางวัล..."
                    className="w-full pl-9 pr-4 py-1.5 bg-slate-100/70 border-none rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                  />
                </div>

                {/* Right Profile & Notifications */}
                <div className="flex items-center gap-4">
                  <button className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 text-sm">
                    🔔
                  </button>
                  <button className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 text-sm">
                    ✉️
                  </button>
                  <div className="h-6 w-[1px] bg-slate-200" />
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-700">🇹🇭 TH</span>
                  </div>
                </div>
              </header>

              {/* Content Body */}
              <main className="p-6 md:p-8 flex-1 max-w-7xl w-full mx-auto">
                {children}
              </main>

            </div>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}