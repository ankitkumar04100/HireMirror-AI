import { Line } from 'react-chartjs-2';

export default function ProgressChart() {
  const data = {
    labels: ['Day 1','Day 2','Day 3','Day 4','Day 5'],
    datasets: [
      {
        label: 'Job Readiness Score',
        data: [60, 65, 70, 75, 78],
        borderColor: 'rgba(34,197,94,1)',
        backgroundColor: 'rgba(34,197,94,0.2)',
        tension: 0.4
      }
    ]
  };

  return <Line data={data} />
}
