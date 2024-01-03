import { useEffect, useState } from "react"

export default function Counter(){
    //let count = 0;
    const [count, setCount] = useState(0) // useState(0) means count = 0

    function handleCount(type= ""){
        // Changes shown only in console not reflect on so you use hook method useState()
        // if(type == "incre"){
        //     count = count + 1;
        //     console.log(count)
        // }
        // else{
        //     count = count - 1;
        //     console.log(count)
        // }

        if(type == "incre"){
            setCount(count + 1);
            console.log(count)
        }
        else{
            setCount(count - 1);
            console.log(count)
        }
    }

    // useEffect used by multiple times it achieved by passing value into dependency array

    useEffect(() =>{
        console.log("Component Updated")
    }, [count])

    return(
        <div>
            <button onClick={() => {handleCount('decre')}}>-</button>
            <p>{count}</p>
            <button onClick={() => {handleCount('incre')}}>+</button>
        </div>
    )
}