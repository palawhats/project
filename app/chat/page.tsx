export default function ChatPage() {
  const chats = [
    { id: "1", name: "กลุ่มภารกิจสวนลุมพินี", lastMsg: "วันนี้มีใครไปสแกนแถวประตู 3 บ้างครับ?", time: "10:42", active: true },
    { id: "2", name: "กลุ่มอนุรักษ์สิ่งแวดล้อม", lastMsg: "อัปโหลดรูปแยกขยะเรียบร้อยแล้ว!", time: "เมื่อวาน", active: false },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-180px)]">
      {/* รายชื่อห้องแชท */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-3 overflow-y-auto">
        <h2 className="font-bold text-slate-800 text-lg">การสนทนา (Chats)</h2>
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`p-3 rounded-xl cursor-pointer transition ${
              chat.active ? "bg-indigo-50 border border-indigo-200" : "hover:bg-slate-50"
            }`}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-slate-900 text-sm">{chat.name}</h3>
              <span className="text-[10px] text-slate-400">{chat.time}</span>
            </div>
            <p className="text-xs text-slate-500 mt-1 truncate">{chat.lastMsg}</p>
          </div>
        ))}
      </div>

      {/* หน้าต่างสนทนา */}
      <div className="hidden md:flex md:col-span-2 bg-white border border-slate-200 rounded-2xl flex-col justify-between">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-800">กลุ่มภารกิจสวนลุมพินี</h3>
          <span className="text-xs text-slate-400">สมาชิก 42 คน</span>
        </div>
        
        {/* ข้อความสนทนา */}
        <div className="p-4 space-y-3 overflow-y-auto flex-1">
          <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
            <span className="text-[10px] font-bold text-indigo-600 block mb-1">User_Alex</span>
            วันนี้มีใครไปสแกนแถวประตู 3 บ้างครับ?
          </div>
          <div className="bg-indigo-600 text-white p-3 rounded-2xl rounded-tr-none max-w-[80%] ml-auto text-sm">
            เพิ่งไปสแกนมาเมื่อกี้ ป้ายตั้งอยู่ข้างจุดบริการเลยครับ
          </div>
        </div>

        {/* ช่องพิมพ์ข้อความ */}
        <div className="p-3 border-t border-slate-100 flex gap-2">
          <input
            type="text"
            placeholder="พิมพ์ข้อความ..."
            className="flex-1 border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-indigo-700 transition">
            ส่ง
          </button>
        </div>
      </div>
    </div>
  );
}