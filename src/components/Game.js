
import React, { useState } from "react";
import { calculateWinner } from "./Arrays";
import Board from "./Board";


const Game = () => { //funcion del juego y sus usestate
  let [Display, setDisplay] = useState(true);
  const [count, setCount] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [whoNext, setwhoNext] = useState(true);
  const winner = calculateWinner(count[stepNumber]);
  const whoPLay = whoNext ? "X" : "O";


  const handleClick = (i) => {
    const counts = count.slice(0, stepNumber + 1);
    const current = counts[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = whoPLay;
    setCount([...counts, squares]);
    setStepNumber(counts.length);
    setwhoNext(!whoNext);
  };

  const reload = () => {
    window.location.reload();

  }

  return (
    <>
   {/* juego a mostrar part1 */}
    <div className="container d-block text-center">
          <h1>Tic tac toe in React.js</h1>
        </div>
        {/* seleccion de jugadores */}
      <div className={"container1 text-center mt-5" + (Display === true ? "" : " d-none")}>
        <h3 className="pt-5">Choose your weapon</h3>
        <form className="mt-4">
          <div className="row">
            <div className="col ml-3">
              <input type="text" className="form-control" placeholder="First Player" />
            </div>
            <div className="col mr-3">
              <input type="text" className="form-control" placeholder="Second Player" />
            </div>
          </div>
        </form>
        {/* botones */}
        <div className="d-flex justify-content-center mt-5">
          <div className="anchors mr-5 d-flex justify-content-center align-content-center" onClick={(e) => { setDisplay(Display = false) }}>
            <button className="buttons1" type="button">X</button>
          </div>
          <div className="anchors d-flex justify-content-center align-content-center">
            <button className="buttons2" type="button">O</button>
          </div>
        </div>
      </div>
    {/* mostrar ganador */}
      <div className={"" + (Display === true ? "d-none" : "")}>
        <div className="container d-block text-center">
          {/* indicar quien gana */}
          <h3>{winner ? "Winner: " + winner : "Next Player: " + whoPLay}</h3>
        </div>
        {/* reset web */}
        <button className="ButtonCenter" onClick={reload}>Start over</button>
        {/* insertar seleccion */}
        <Board squares={count[stepNumber]} onClick={handleClick} />
      </div>
    </>
  );
};

export default Game;