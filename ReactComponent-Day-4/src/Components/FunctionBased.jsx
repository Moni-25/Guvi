import { useState } from "react";
import ClassBasedComponent from "./ClassBased";

export default function FunctionBasedComponent() {
    let [count, setCount] = useState(0);
    const [visibility, setVisibility] = useState(true)
    function handleCountChange(type = ""){
        if(type == "increment"){
            setCount(count + 1);
        }
        else{
            setCount(count-1)
        }
        console.log(count)
    }
    return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
    <div>
        <button onClick={() => setVisibility(!visibility)}>
            Show / Hide Count
        </button>
    </div>
    <div className="row" style={{display: "flex", gap: "10px", marginTop: "20px", paddingLeft: "20px"}}>
      <div className="col">
        <button onClick={() => handleCountChange("decrement")}>-</button>
      </div>
      <div className="col">{visibility && <ClassBasedComponent count={count}/>}</div>
      <div className="col">
        <button onClick={() => handleCountChange("increment")}>+</button>
      </div>
    </div>
  </div>
  );
}