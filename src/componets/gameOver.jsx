import "./gameOver.css";

export default function GameOver({ reMatch, winner, gameStatus }) {
  if (gameStatus) {
    return (
      <div id="game-over">
        <h2>Game Over</h2>
        {winner && <p>{winner} Wins!</p>}
        {!winner && <p>It's tie.</p>}
        <button onClick={reMatch}>Rematch</button>
      </div>
    );
  }
}
