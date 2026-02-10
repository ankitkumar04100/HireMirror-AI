import { useState } from 'react';

export default function VideoRecorder() {
  const [recording, setRecording] = useState(false);

  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <p>{recording ? 'Recording...' : 'Click to start recording'}</p>
      <button
        onClick={() => setRecording(!recording)}
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
      >
        {recording ? 'Stop' : 'Start'}
      </button>
    </div>
  )
}
