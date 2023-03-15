import { useState, useEffect } from "react";
import React from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [youWin, setYouWin] = useState(false);
  const [squares, setSquares] = useState([1, 2, 3, 8, null, 4, 7, 6, 5]);
  const [Clicked, setClicked] = useState(false);
 
  const [moves, setMoves] = useState([]);
  const goalSquares = [1, 2, 3, 8, null, 4, 7, 6, 5];

  useEffect(() => {
    if (Clicked) {
      let allSame =
        goalSquares.length === squares.length &&
        goalSquares.every((element, index) => element === squares[index]);
      if (allSame) {
        setYouWin(true);
        console.log("Arrays are the same");
      } else {
        console.log("Arrays are different");
        setYouWin(false);
      }
    }
  }, [squares, goalSquares]);

  function Game(moves, index2, index1, newSquares) {
    setMoves([
      ...moves,
      { from: index2, to: index1, value: newSquares[index1] },
    ]);
  }

  function scrabble()
  {
    const newSquares = [...squares];
    for (let c = 0; c < 36; c++) {
      var empty = null;
      for (let j = 0; j < newSquares.length; j++) {
        if (newSquares[j] == null) {
          empty = j;
          break;
        }
      }
      //see if it can swap
      let index1 = empty;
      let index2 = Math.floor(Math.random() * 9);
      if (
        Math.abs(index1 - index2) === 1 &&
        Math.floor(index1 / 3) === Math.floor(index2 / 3)
      ) {
        console.log("Swap");
        var temp = newSquares[index2];
        newSquares[index2] = null;
        newSquares[index1] = temp;
      }
      else if (Math.abs(index1 - index2) === 3 && index1 % 3 === index2 % 3) {
        var temp = newSquares[index2];
        newSquares[index2] = null;
        newSquares[index1] = temp;
        console.log("Swap");
      }
      else {
        console.log("Nothing");
      }
    }
    setSquares(newSquares);
  }

  function handleClick(i) {
    setClicked(true);
    const newSquares = [...squares];
    var empty = null;
    for (let j = 0; j < newSquares.length; j++) {
      if (newSquares[j] == null) {
        empty = j;
        break;
      }
    }
    //see if it can swap
    let index1 = empty;
    let index2 = i;
    if (
      Math.abs(index1 - index2) === 1 &&
      Math.floor(index1 / 3) === Math.floor(index2 / 3)
    ) {
      console.log("Swap");
      var temp = newSquares[index2];
      newSquares[index2] = null;
      newSquares[index1] = temp;
      Game(moves, index2, index1, newSquares);
    }
    else if (Math.abs(index1 - index2) === 3 && index1 % 3 === index2 % 3) {
      var temp = newSquares[index2];
      newSquares[index2] = null;
      newSquares[index1] = temp;
      console.log("Swap");
      Game(moves, index2, index1, newSquares);
    }
    else {
      console.log("Nothing");
    }
    setSquares(newSquares);
  }

  return (
    <div>
      <h1> 8 PUZZLE GAME </h1>
      {youWin ? <h2 className="win">YOU WIN!</h2> : ""}
      <div className="wrapper">
        <div className="table">
          <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
          <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
        </div>
        <ul className="list-table">
          {moves.map((move, index) => (
            <li key={index}>
              Move #{index + 1}: Swapped number {move.value} from position (
              {Math.floor(move.from / 3)}, {move.from % 3}) to position (
              {Math.floor(move.to / 3)}, {move.to % 3})
            </li>
          ))}
        </ul>
      </div>
      <button className="button" onClick={scrabble}>
        SCRABBLE PUZZLE
      </button>
    </div>
  );
}