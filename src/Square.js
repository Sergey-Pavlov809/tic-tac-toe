import "./App.css";
import { useState } from "react";

export default function Square(props){

    let [stateSquare, setStateSquare] = useState(props.value);

    const f = function(){
        console.log(stateSquare)
        setStateSquare(props.value);
    }


    return <div onClick={() => f()} className="square" >{stateSquare}</div>;
}
