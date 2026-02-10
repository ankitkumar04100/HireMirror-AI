export default function Feedback() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Feedback & Improvement Plan</h1>
      <p className="mb-6">Your multi-layered evaluation results:</p>
      <div className="bg-white p-6 rounded shadow">
        <ul className="list-disc list-inside">
          <li>Job Readiness Score: 78/100</li>
          <li>Communication Skills: 85/100</li>
          <li>Portfolio Review: 92/100</li>
          <li>Suggested Improvement: Practice behavioral questions, improve portfolio presentation</li>
        </ul>
      </div>
    </div>
  )
}
