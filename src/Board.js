import { useState } from "react";
import Square from './Square'
import "./App.css";
import React from 'react'


class Board extends React.Component {
    

    constructor(props) {
        super(props);

        this.state = {
        squares: [[null,null,null],[null,null,null],[null,null,null]],
        nextPlayer: true,
        };
    }

    render() {

        const setFuncStateBoard = (a,b) =>{
            console.log('setFuncStateBoard')
        }
    
    
        const resetGame = () =>{
            this.state.squares = [[null,null,null],[null,null,null],[null,null,null]];
        }
    
        const setBoardValues = () =>{
            stateBoard = [[2,1,1],[2,2,1],[1,2,2]];
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
    
        const handleClick = () => {
        } 
    
        //передаем stateBoard
        const isEnd = (squares) => {
            squares = squares.flat(Infinity);
            
            const lines = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6],];
    
            for (let i = 0; i < lines.length; i++) {
                const [a, b, c] = lines[i];
                if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                    return squares[a];
                }
            }
                return null;
        }

        let whoWin = () =>{
            if (isEnd(this.state.squares)) 
                return 'win 0'
            else
                return 'win x'    

        }


        let handleSquare = (i, j) => {
            console.log('click')
            const squares = this.state.squares.slice();
            squares[i][j] = this.state.nextPlayer ? 'X' : 'O';
            this.setState({
                squares: squares,
                nextPlayer: !this.state.nextPlayer,
            });

            if(isEnd(this.state.squares))
                {alert(whoWin())}
        }

        




        return(
        <div >
            <button onClick={() => {console.log(isEnd(this.state.squares))}}>is Win?</button>
            <button onClick={() => {resetGame()}}>Новая игра</button>
            <button onClick={() => {setBoardValues()}}>автозаполнение клеток</button>
            <button onClick={() => {getConsoleBoardValues()}}>получение значения поля в консоль</button>
            <button onClick={() => {doRandomMove()}}>ход компьютера</button>

            <div>
                <div className="row">
                    <Square value={this.state.squares[0][0]} onClick={() => handleSquare(0, 0)}/>
                    <Square value={this.state.squares[0][1]} onClick={() => handleSquare(0, 1)}/>
                    <Square value={this.state.squares[0][2]} onClick={() => handleSquare(0, 2)}/>
                </div>
                <div className="row">
                    <Square value={this.state.squares[1][0]} onClick={() => handleSquare(1, 0)}/>
                    <Square value={this.state.squares[1][1]} onClick={() => handleSquare(1, 1)}/>
                    <Square value={this.state.squares[1][2]} onClick={() => handleSquare(1, 2)}/>
                </div>
                <div className="row">
                    <Square value={this.state.squares[2][0]} onClick={() => handleSquare(2, 0)}/>
                    <Square value={this.state.squares[2][1]} onClick={() => handleSquare(2, 1)}/>
                    <Square value={this.state.squares[2][2]} onClick={() => handleSquare(2, 2)}/>
                </div>
            </div>
        </div>
    )
    }
}

export default Board;
