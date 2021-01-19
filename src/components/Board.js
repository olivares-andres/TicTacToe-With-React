import React from "react";
import Square from "./Square";

//capturar valor de board si es X o O con un map
const Board = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((square, i) => ( 
      
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;