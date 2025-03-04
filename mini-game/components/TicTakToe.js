import { useState } from "react";
import styles from "../styles/TicTacToe.module.css"; // Import styles from styles/

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  function handleClick(index) {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <div className={styles.container}>
      <h1>Tic-Tac-Toe</h1>
      <div className={styles.board}>
        {board.map((cell, index) => (
          <button key={index} className={styles.cell} onClick={() => handleClick(index)}>
            {cell}
          </button>
        ))}
      </div>
      {winner ? <h2 className={styles.winner}>Winner: {winner}</h2> : <h2>Next Player: {isXNext ? "X" : "O"}</h2>}
      <button className={styles.reset} onClick={resetGame}>Restart Game</button>
    </div>
  );
};

function calculateWinner(board) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
  ];
  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default TicTacToe;