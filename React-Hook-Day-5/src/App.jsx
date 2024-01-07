import { Routes, Route } from 'react-router-dom'
import './App.css'
import Counter from './Components/ClassWorkout-Day-5-6/CountEffect'
import Home from "./Pages-Router-Day5/Home/Home"
import Login from './Pages-Router-Day5/Login/Login'

function App() {
  

  return (
    <div>
    <Counter/>
      <Routes>
        <Route Component={Home} path="/Home/:id"/>
        <Route Component={Login} path="/Login"/>
      </Routes>
    </div>
  )
}

export default App
