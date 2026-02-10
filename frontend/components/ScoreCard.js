export default function ScoreCard({ title, score }) {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-3xl font-bold mt-2">{score}%</p>
    </div>
  )
}
