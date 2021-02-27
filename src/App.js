import Board from "./Board";
import React from "react";

class App extends React.Component{
  render(){
        return (
            <div className="App">
                <Board text = 'сравнение работы каунтеров'></Board>
            </div>
        );
    }
}

export default App
