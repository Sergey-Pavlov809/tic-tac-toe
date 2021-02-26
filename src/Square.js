import "./App.css";
import { useState } from "react";
import React from 'react';


class Square extends React.Component {

    render() {
      return (
        <button className="square" onClick={this.props.setFuncStateBoard}>
          {this.props.value}
        </button>
      );
    }
}

export default Square;