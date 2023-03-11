import { useState } from 'react';
import React from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }

  return (
    <div>
      <div className="board-row">
        <Square value="1" onSquareClick={() => handleClick(0)} />
        <Square value="2" onSquareClick={() => handleClick(1)} />
        <Square value="3" onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value="8" onSquareClick={() => handleClick(3)} />
        <Square value=" " onSquareClick={() => handleClick(4)} />
        <Square value="4" onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value="7" onSquareClick={() => handleClick(6)} />
        <Square value="6" onSquareClick={() => handleClick(7)} />
        <Square value="5" onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}