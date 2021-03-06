import { useState } from "react";
import "./App.css";
import React from 'react';
import Square from './Square';



class Board extends React.Component {  
    constructor(props) {
        super(props);
        this.nullArray = [null,null,null,null,null,null,null,null,null];

        this.state = {
        squares: this.nullArray,
        nextPlayer: true,
        canChanges: true,
        isWin: false
        };
    }

    render() {
        const resetGame = () =>{
            const squares = this.nullArray;
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
            let squares = this.state.squares;
            
            const lines = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6],];
    
            for (let i = 0; i < lines.length; i++) {
                const [a, b, c] = lines[i];
                if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                    this.setState({
                        isWin: true
                    });
                }
            }
        }

        let whoWin = () =>{
                if(this.state.nextPlayer)
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
                nextPlayer: !this.state.nextPlayer
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
            isEnd()
            
            if(this.state.isWin){
                resetGame();
                alert(whoWin());
            }
            }

        const CreateSquare =(props) => {
            return <Square value={this.state.squares[props.i]} onClick={() => handleSquare(props.i)}/>
        }

        return(
        <div >
            <button onClick={() => {resetGame()}}>Новая игра</button>
            <button onClick={() => {doRandomMove()}}>ход компьютера</button>
            <button disabled={!this.state.canChanges} onClick={() => {changeTurn()}}>смена игрока</button>
            <div>Сейчас ход {whoTurn()}</div>
            <div>
                <div className="row">
                    <CreateSquare i={0}/>
                    <CreateSquare i={1}/>
                    <CreateSquare i={2}/>
                </div>
                <div className="row">
                    <CreateSquare i={3}/>   
                    <CreateSquare i={4}/>
                    <CreateSquare i={5}/>
                </div>
                <div className="row">
                    <CreateSquare i={6}/>
                    <CreateSquare i={7}/>
                    <CreateSquare i={8}/>
                </div>
            </div>
        </div>
    )
    }
}

export default Board;
