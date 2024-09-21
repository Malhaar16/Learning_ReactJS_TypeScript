import { useState } from "react";

interface Props {
  value: String,
  onSquareClick : () => void;
}

const Square = ({ value,  onSquareClick}: Props) => {
  //const [value, setValue] = useState<string | null>(null);




  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  );
};

export default Square;
