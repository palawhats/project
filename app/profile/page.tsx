export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* ข้อมูลโปรไฟล์หลัก */}
      <div className="bg-white border border-slate-200 p-6 rounded-2xl flex items-center space-x-4 shadow-sm">
        <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
          U
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-900">User_Student</h1>
          <p className="text-xs text-indigo-600 font-semibold bg-indigo-50 px-2 py-0.5 rounded-full inline-block mt-1">
            Challenger Level 3
          </p>
        </div>
      </div>

      {/* สถิติการใช้งาน */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-white border border-slate-200 p-4 rounded-xl">
          <p className="text-xs text-slate-400">ภารกิจที่สำเร็จ</p>
          <p className="text-xl font-bold text-slate-800 mt-1">12</p>
        </div>
        <div className="bg-white border border-slate-200 p-4 rounded-xl">
          <p className="text-xs text-slate-400">คะแนนสะสม</p>
          <p className="text-xl font-bold text-indigo-600 mt-1">1,250</p>
        </div>
        <div className="bg-white border border-slate-200 p-4 rounded-xl">
          <p className="text-xs text-slate-400">ตราสัญลักษณ์</p>
          <p className="text-xl font-bold text-slate-800 mt-1">4</p>
        </div>
      </div>

      {/* ประวัติกิจกรรม */}
      <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-3">
        <h2 className="font-bold text-slate-800 text-sm">ประวัติภารกิจล่าสุด</h2>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between py-2 border-b border-slate-100">
            <span className="text-slate-700">สแกน QR เช็คอินสวนสาธารณะ</span>
            <span className="text-green-600 font-bold">+150 Pts</span>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-100">
            <span className="text-slate-700">ถ่ายรูปแยกขยะพลาสติก</span>
            <span className="text-green-600 font-bold">+300 Pts</span>
          </div>
        </div>
      </div>
    </div>
  );
}