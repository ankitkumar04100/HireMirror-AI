export default function Leaderboard() {
  const users = [
    { name: 'Jane Doe', score: 95 },
    { name: 'John Smith', score: 90 },
    { name: 'Alice Brown', score: 85 }
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold mb-2">Leaderboard</h3>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>{idx+1}. {user.name} - {user.score}%</li>
        ))}
      </ul>
    </div>
  )
}
