import { useState } from "react";
import Square from './Square'
import "./App.css";
import React from 'react'


class Board extends React.Component {
    

    constructor(props) {
        super(props);

        this.state = {
        squares: [null,null,null,null,null,null,null,null,null],
        nextPlayer: true,
        canChanges: true
        };
    }

    render() {
    
    
        const resetGame = () =>{
            const squares = [null,null,null,null,null,null,null,null,null];
            this.setState({
                squares: squares,
                nextPlayer: true,
                canChanges: true
            });
        }
    
        const converter = (arr) => {
            let rez = [];
            for(let i = 0; i <3; i++){
                rez.push(arr.splice(0,3));
            }
            return rez;
            }
    
    
        const doRandomMove = () =>{
            let arr = this.state.squares;
            let ind = arr.indexOf(null);
            arr[ind] = this.state.nextPlayer ? 'X' : 'O';
            this.setState({
                squares: arr,
                nextPlayer: !this.state.nextPlayer,
                canChanges: false
            });
            }
    
    
        //передаем stateBoard
        const isEnd = () => {
            let squares = this.state.squares.flat(Infinity);
            
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
            if (isEnd()) {
                if(this.state.nextPlayer)
                    return 'win x'
                else
                    return 'win o'
            }}    

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
                canChanges: this.state.canChanges
            });
        }


        let handleSquare = (i) => {
            const squares = this.state.squares.slice();
            if(squares[i] == null){
                squares[i] = this.state.nextPlayer ? 'X' : 'O';
                this.setState({
                    squares: squares,
                    nextPlayer: !this.state.nextPlayer,
                    canChanges: false
                });
            }

            if(isEnd(this.state.squares))
                {
                    alert(whoWin());
                    setTimeout(resetGame(),5000)
                }
        }

        let createSquare = (i) => {
            return(
                <div>
                    <Square value={this.state.squares[i]} onClick={() => handleSquare(i)}/>
                </div>
            )
        }

        
        //создание квадратов вынеси в отдельные методы и мб циклы
        return(
        <div >
            <button onClick={() => {resetGame()}}>Новая игра</button>
            <button onClick={() => {doRandomMove()}}>ход компьютера</button>
            <button disabled={!this.state.canChanges} onClick={() => {changeTurn()}}>смена игрока</button>
            <div>Сейчас ход {whoTurn()}</div>
            <div>
                <div className="row">
                    <Square value={this.state.squares[0]} onClick={() => handleSquare(0)}/>
                    <Square value={this.state.squares[1]} onClick={() => handleSquare(1)}/>
                    <Square value={this.state.squares[2]} onClick={() => handleSquare(2)}/>
                </div>
                <div className="row">
                    <Square value={this.state.squares[3]} onClick={() => handleSquare(3)}/>
                    <Square value={this.state.squares[4]} onClick={() => handleSquare(4)}/>
                    <Square value={this.state.squares[5]} onClick={() => handleSquare(5)}/>
                </div>
                <div className="row">
                    <Square value={this.state.squares[6]} onClick={() => handleSquare(6)}/>
                    <Square value={this.state.squares[7]} onClick={() => handleSquare(7)}/>
                    <Square value={this.state.squares[8]} onClick={() => handleSquare(8)}/>
                </div>
            </div>
        </div>
    )
    }
}

export default Board;
