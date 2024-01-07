import { useParams } from "react-router-dom";

export default function ParamAccess(){
     //useParam - help us to get url param value
     const param = useParams()
     console.log(param)
    return(
        <>
            <h1>{param && param.id ? param.id : "Hello"}</h1>
        </>
    );
}