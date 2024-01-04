//import { useState } from 'react'
import './App.css'
import FunctionBasedComponent from './Components/FunctionBased';
import ClassBasedComponent from './Components/ClassBased';

function App() {
  // used for ClassBased.jsx
  //const count = [0,1,2,3,4];
  //let count = 0;

  return (
    <>
      {/* <ClassBasedComponent count={count}/> */}
      <FunctionBasedComponent/>
    </>
  )
}

export default App
