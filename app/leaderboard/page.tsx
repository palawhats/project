export default function LeaderboardPage() {
  const leaders = [
    { rank: 1, name: "Somchai_K", points: 8450, badge: "🥇" },
    { rank: 2, name: "Anna_S", points: 7200, badge: "🥈" },
    { rank: 3, name: "Dev_Prai", points: 6100, badge: "🥉" },
    { rank: 4, name: "You (คุณ)", points: 1250, badge: "✨" },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-slate-900">กระดานผู้นำ (Leaderboard)</h1>
        <p className="text-slate-500 text-sm">อันดับผู้ทำภารกิจสะสมคะแนนสูงสุดประจำสัปดาห์</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl divide-y divide-slate-100 shadow-sm overflow-hidden">
        {leaders.map((user) => (
          <div key={user.rank} className={`flex items-center justify-between p-4 ${user.rank === 4 ? "bg-indigo-50 font-bold" : ""}`}>
            <div className="flex items-center space-x-4">
              <span className="text-xl font-bold w-6 text-slate-400">{user.badge}</span>
              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">
                {user.name[0]}
              </div>
              <span className="text-slate-800 text-sm">{user.name}</span>
            </div>
            <span className="font-bold text-indigo-600 text-sm">{user.points.toLocaleString()} Pts</span>
          </div>
        ))}
      </div>
    </div>
  );
}