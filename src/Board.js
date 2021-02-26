import { useState } from "react";
import Square from "./Square";
import "./App.css";


export default function Board(props){


    let board = [[2,2,1],[3,3,null],[5,6,1]];             

    let [stateBoard, setStateBoard] = useState(board);

    const stateIncBoard = () =>{
        setStateCounter.map((el)=>{el = 1})
    }

    const showState = () =>{
        console.log(stateBoard)
    }

    const resetGame = () =>{
        stateBoard = [[null,null,null],[null,null,null],[null,null,null]];
    }

    const setBoardValues = () =>{
        stateBoard = [[2,1,1],
                      [2,2,1],
                      [1,2,2]];
    }

    const converter = (arr) => {
        let rez = [];
        for(let i = 0; i <3; i++){
        rez.push(arr.splice(0,3));
        }
        return rez;
        }


    const doRandomMove = (arr) =>{
        arr = stateBoard.flat(Infinity);
        let ind = arr.indexOf(null);
        arr[ind] = 1;
        stateBoard = converter(arr);
        }

    const getConsoleBoardValues = () => {
        console.log(stateBoard)
    }

    const isEnd = (el) => {
        
        //for (let i = 0; i <= 2; i++){
        //    if (!((stateBoard[i] == el) || (stateBoard[i+3] == el) || (stateBoard[i+6] == el)))
        //        return false
        //}
        //for (let i = 0; i <= 8; i+3){
        //    if (!((stateBoard[i] == el) || (stateBoard[i+3] == el) || (stateBoard[i+6] == el)))
        //        return false
        //}

        return true
            
    }


    /*const stateIncCounter = () =>{
        setStateCounter(stateCounter + 1)
    }*/

    //<button onClick={stateIncCounter}/>

    return(
        <div >
            {stateBoard}
            <button onClick={() => {console.log(isEnd(null))}}>is Win?</button>
            <button onClick={() => {resetGame()}}>Новая игра</button>
            <button onClick={() => {setBoardValues()}}>автозаполнение клеток</button>
            <button onClick={() => {getConsoleBoardValues()}}>получение значения поля в консоль</button>
            <button onClick={() => {doRandomMove()}}>ход компьютера</button>

            <div>
                <div className="row">
                    <Square value={stateBoard[0][0]}/>
                    <Square value={stateBoard[0][1]}/>
                    <Square value={stateBoard[0][2]}/>
                </div>
                <div className="row">
                    <Square value={stateBoard[1][0]}/>
                    <Square value={stateBoard[1][1]}/>
                    <Square value={stateBoard[1][2]}/>
                </div>
                <div className="row">
                    <Square value={stateBoard[2][0]}/>
                    <Square value={stateBoard[2][1]}/>
                    <Square value={stateBoard[2][2]}/>
                </div>
            </div>
        </div>
    )
}