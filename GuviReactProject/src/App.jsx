/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/

import "./App.css";
import VideoCard from "./Components/VideoCard/VideoCard.jsx";

function App() {
  const data = [
    { name: "Leo", description: "Vijay's blockbuster movie" },
    { name: "PS2", description: "Historical and Fantasy movie" },
  ];
  return (
    <>
      {data.map((movie, index) => (
        <VideoCard movie={movie} key={`movie-card-${index}`} />
      ))}
    </>
  );
}

export default App
