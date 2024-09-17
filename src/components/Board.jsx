import Square from "./Square";

export default function Board({xIsNext, squareVal, onPlay}) {

  const handleClick = (i) => {
    if(squareVal[i] || calculateWinner(squareVal)){
      return;
    }
    const nextSquares = squareVal.slice();
    xIsNext ? nextSquares[i] = "X" : nextSquares[i] = "O";
    onPlay(nextSquares);
  }

  const calculateWinner = (square) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squareVal);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
  <>
  <div className="status">{status}</div>
  <div className="board-row">
    <Square squareVal={squareVal[0]} onSquareClick={() => handleClick(0)} />
    <Square squareVal={squareVal[1]} onSquareClick={() => handleClick(1)} />
    <Square squareVal={squareVal[2]} onSquareClick={() => handleClick(2)} />
  </div>
  <div className="board-row">
    <Square squareVal={squareVal[3]} onSquareClick={() => handleClick(3)} />
    <Square squareVal={squareVal[4]} onSquareClick={() => handleClick(4)} />
    <Square squareVal={squareVal[5]} onSquareClick={() => handleClick(5)} />
  </div>
  <div className="board-row">
    <Square squareVal={squareVal[6]} onSquareClick={() => handleClick(6)} />
    <Square squareVal={squareVal[7]} onSquareClick={() => handleClick(7)} />
    <Square squareVal={squareVal[8]} onSquareClick={() => handleClick(8)} />
  </div>
  </>)
}