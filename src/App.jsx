import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [button, setButton] = useState(false)

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <h1 className="text-5xl font-bold mb-8">🎨 Tailwind CSS Test</h1>

        <button
          onClick={() => setButton(!button)}
          className={`px-6 py-3 font-semibold rounded-xl shadow-md transition
            ${button
              ? 'bg-green-400 text-white hover:bg-green-500'
              : 'bg-white text-purple-700 hover:bg-purple-200'}
          `}
        >
          {button ? 'true' : 'false'}
        </button>
      </div>
    </>
  )
}

export default App
