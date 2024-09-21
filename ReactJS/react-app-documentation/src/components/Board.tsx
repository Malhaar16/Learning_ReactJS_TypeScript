import { useState } from "react";
import Square from "./Square";

const Board = () => {

    const [xIsNext, setXIsNext] = useState(true);
    const [square, setSquares] = useState(Array(9).fill(null));


    const handleClick = (i: number) =>{
        if (square[i]) {
            return;
        }
        const nexrSquares = square.slice();
        if(xIsNext){
            nexrSquares[i] = "X"
        }else{
            nexrSquares[i] = "O"
        }
        setSquares(nexrSquares);
        setXIsNext(!xIsNext);
    }

  return (
    <>
      <div>
        <Square value={square[0]} onSquareClick = {() => handleClick(0)} />
        <Square value={square[1]} onSquareClick = {() => handleClick(1)} />
        <Square value={square[2]} onSquareClick = {() => handleClick(2)} />
      </div>
      <div>
        <Square value={square[3]} onSquareClick = {() => handleClick(3)} />
        <Square value={square[4]} onSquareClick = {() => handleClick(4)} />
        <Square value={square[5]} onSquareClick = {() => handleClick(5)} />
      </div>
      <div>
        <Square value={square[6]} onSquareClick = {() => handleClick(6)} />
        <Square value={square[7]} onSquareClick = {() => handleClick(7)} />
        <Square value={square[8]} onSquareClick = {() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
