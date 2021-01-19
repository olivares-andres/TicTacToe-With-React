import React from "react";

const Square = ({ value, onClick }) => {
  //if de una linea para indicar valor
  const style = value ? `squares ${value}` : `squares`;

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;