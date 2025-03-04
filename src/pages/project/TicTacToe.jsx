import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status = '';
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status"> {status} </div>
      <div className='board'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    if (nextMove === 0) setHistory([Array(9).fill(null)]);
  }

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const moves = history.map((squares, move) => {
    let description = '';
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Game Start / Reset';
    }

    return (
      <li key={move}>
        <button className='pastel-button' onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 bg-gradient-to-b from-white to-light-blue dark:from-gray-900 dark:to-gray-800 max-sm:pb-28">
      <div className="max-w-4xl mx-auto">
        <p className='fixedPrev'><a href="/project" className='backWard'>← Back to Project</a></p>
        <div className='game'>
          <h1 className='textCenter text-3xl font-bold dark:text-white'>Tic Tac Toe APP</h1>
          <div className='game-board dark:bg-zinc-300'>
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          </div>
          <h2 className="history dark:text-white">History</h2>
          <div className="game-info">
            <ol>{moves}</ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}