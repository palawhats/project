export default function ExplorePage() {
  const nearbyMissions = [
    { id: "1", title: "เช็คอินสวนลุมพินี", dist: "350 ม.", pts: 150, type: "QR Code" },
    { id: "2", title: "คัดแยกขยะพลาสติก", dist: "1.2 กม.", pts: 300, type: "Photo" },
    { id: "3", title: "วิ่งออกกำลังกาย 3km", dist: "2.5 กม.", pts: 500, type: "GPS" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="🔍 ค้นหาภารกิจ หรือ สถานที่..."
          className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-slate-800 transition">
          ตัวกรอง
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-220px)] min-h-[500px]">
        {/* รายการภารกิจใกล้อยู่ด้านซ้าย */}
        <div className="space-y-3 overflow-y-auto pr-2">
          <h2 className="font-bold text-slate-800">ภารกิจในรัศมี 5 กม.</h2>
          {nearbyMissions.map((item) => (
            <div key={item.id} className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:border-indigo-500 cursor-pointer transition">
              <div className="flex justify-between items-start">
                <span className="text-xs bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full font-semibold">{item.type}</span>
                <span className="text-xs font-semibold text-slate-400">📍 {item.dist}</span>
              </div>
              <h3 className="font-bold text-slate-900 mt-2">{item.title}</h3>
              <div className="mt-3 flex justify-between items-center text-sm">
                <span className="font-bold text-indigo-600">+{item.pts} Pts</span>
                <button className="text-xs bg-slate-100 hover:bg-indigo-600 hover:text-white text-slate-700 px-3 py-1.5 rounded-lg font-medium transition">
                  ดูบนแผนที่
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ส่วนจำลองแผนที่ Interactive Map */}
        <div className="lg:col-span-2 bg-slate-200 border border-slate-300 rounded-2xl relative overflow-hidden flex items-center justify-center min-h-[300px]">
          <div className="text-center space-y-2">
            <span className="text-4xl">🗺️</span>
            <p className="text-slate-600 font-medium text-sm">Interactive Map View (Mapbox / Google Maps API)</p>
            <p className="text-xs text-slate-400">แสดงหมุดภารกิจตามพิกัด GPS จริง</p>
          </div>
          {/* หมุดจำลอง */}
          <div className="absolute top-1/3 left-1/2 bg-indigo-600 text-white p-2 rounded-full shadow-lg animate-bounce text-xs font-bold">📍 150 Pts</div>
          <div className="absolute bottom-1/3 left-1/3 bg-indigo-600 text-white p-2 rounded-full shadow-lg text-xs font-bold">📍 300 Pts</div>
        </div>
      </div>
    </div>
  );
}