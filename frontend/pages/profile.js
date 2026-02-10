export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>
      <p className="mb-6">Track your progress, badges, and achievements.</p>
      <div className="bg-white p-6 rounded shadow">
        <p>Name: Jane Doe</p>
        <p>Email: jane@example.com</p>
        <p>Current Job Readiness: 78/100</p>
        <p>Badges Earned: 3</p>
        <p>Streak: 5 days</p>
      </div>
    </div>
  )
}
