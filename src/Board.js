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
    
    
        const resetGame = () =>{
            const squares = [[null,null,null],[null,null,null],[null,null,null]];
            this.setState({
                squares: squares,
                nextPlayer: true,
            });
        }
    
        const converter = (arr) => {
            let rez = [];
            for(let i = 0; i <3; i++){
                rez.push(arr.splice(0,3));
            }
            return rez;
            }
    
    
        const doRandomMove = (arr) =>{
            arr = this.state.squares.flat(Infinity);
            let ind = arr.indexOf(null);
            arr[ind] = 1;
            this.state.squares = converter(arr);
            }
    

        const getConsoleBoardValues = () => {
            console.log(this.state.squares)
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
                return 'win x'
            else
                return 'win o'    

        }

        let whoTurn = () => {
            if (this.state.nextPlayer) 
                return 'ход x'
            else
                return 'ход o'
        }

        let changeTurn = () => {
            const squares = this.state.squares.slice();
            this.setState({
                squares: squares,
                nextPlayer: !this.state.nextPlayer,
            });
        }


        let handleSquare = (i, j) => {
            const squares = this.state.squares.slice();
            if(squares[i][j] == null){
                squares[i][j] = this.state.nextPlayer ? 'X' : 'O';
                this.setState({
                    squares: squares,
                    nextPlayer: !this.state.nextPlayer,
                });
            }

            if(isEnd(this.state.squares))
                {alert(whoWin())}
        }

        



        //создание квадратов вынеси в отдельные методы и мб циклы
        return(
        <div >
            <button onClick={() => {resetGame()}}>Новая игра</button>
            <button onClick={() => {getConsoleBoardValues()}}>получение значения поля в консоль</button>
            <button onClick={() => {doRandomMove()}}>ход компьютера</button>
            <button onClick={() => {changeTurn()}}>смена игрока</button>
            <div>Сейчас ход {whoTurn()}</div>
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
