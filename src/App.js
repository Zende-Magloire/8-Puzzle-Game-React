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
  const goalSquares = [1, 2, 3, 8, null, 4, 7, 6, 5];

  //check win
  useEffect(() => {
    if (Clicked) {
 
      let allSame =
        goalSquares.length === squares.length &&
        goalSquares.every((element, index) => element === squares[index]);
      if (allSame) {
        setYouWin(true)
        console.log("Arrays are the same");
      } else {
        console.log("Arrays are different");
        setYouWin(false);
      }
    }
  }, [squares, goalSquares]);

  function handleClick(i) {
    setClicked(true)
    const newSquares = [...squares];

    var empty = null;
    for (let j = 0; j < newSquares.length; j++) {
      //Check for null
      if (newSquares[j] == null) {
        empty = j;
        break;
      }
    }

    let index1 = empty;
    let index2 = i;

    // Check if elements are next to each other
    if (
      Math.abs(index1 - index2) === 1 &&
      Math.floor(index1 / 3) === Math.floor(index2 / 3)
    ) {
      // Elements are next to each other on the same row
      console.log("Swap");

      var temp = newSquares[index2];
      newSquares[index2] = null;
      newSquares[index1] = temp;
    } else if (Math.abs(index1 - index2) === 3 && index1 % 3 === index2 % 3) {
      // Elements are next to each other in the same column
      var temp = newSquares[index2];
      newSquares[index2] = null;
      newSquares[index1] = temp;
      console.log("Swap");
    } else {
      console.log("Nothing");
      // Elements are not next to each other
    }

    setSquares(newSquares);
  }
  return (
    <div>
      <h1> 8 PUZZLE GAME </h1>
      {youWin ? <h2 className="win">YOU WIN!</h2> : ""}
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
    </div>
  );
}


