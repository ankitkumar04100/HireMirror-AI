import ScoreCard from '../components/ScoreCard';
import Leaderboard from '../components/Leaderboard';
import ProgressChart from '../components/ProgressChart';
import Badge from '../components/Badge';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">HireMirror AI Dashboard</h1>
        <img src="/logo.png" alt="HireMirror Logo" className="h-12"/>
      </header>
      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ScoreCard title="Job Readiness" score={78}/>
        <ScoreCard title="Communication Skills" score={85}/>
        <ScoreCard title="Portfolio Quality" score={92}/>
      </section>
      
      <section className="mt-10">
        <ProgressChart/>
      </section>

      <section className="mt-10 grid grid-cols-2 gap-6">
        <Leaderboard/>
        <Badge title="Consistency Badge" description="5 days streak"/>
      </section>
    </div>
  )
}
