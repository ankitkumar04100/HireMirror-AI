export default function Badge({ title, description }) {
  return (
    <div className="bg-yellow-200 p-4 rounded shadow">
      <h3 className="font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  )
}
