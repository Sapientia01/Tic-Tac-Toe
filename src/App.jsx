import { useState } from "react";
import Player from "./componets/player.jsx";
import GameBoard from "./componets/gameboard.jsx";
import GameOver from "./componets/gameOver.jsx";
import Logs from "./componets/logs.jsx";
import { WINNING_COMBINATIONS } from "./winning-combination.js";
import gameLogo from "./assets/game-logo.png";
const initialgamestatus = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

let curGameBoard = [...initialgamestatus.map((row) => [...row])];
let curPlayer = "X";
let winnerPlayer = undefined;
let isGameOver = false;

function driveWinner(GameBoard, playersName) {
  for (const combination of WINNING_COMBINATIONS) {
    const firstBox = GameBoard[combination[0].row][combination[0].column];
    const secondBox = GameBoard[combination[1].row][combination[1].column];
    const thirdBox = GameBoard[combination[2].row][combination[2].column];

    if (firstBox !== null && firstBox === secondBox && secondBox === thirdBox) {
      isGameOver = true;
      winnerPlayer = playersName[firstBox];
    }
  }
}

function App() {
  const [playersName, setPlayersName] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [playersClicks, setPlayersClicks] = useState([]);
  if (playersClicks.length > 0) {
    curPlayer = playersClicks[0].player === "O" ? "X" : "O";
  }

  function handleBtnClick(rowIndex, colIndex) {
    setPlayersClicks(() => [
      { player: curPlayer, clickedBtn: [rowIndex, colIndex] },
      ...playersClicks,
    ]);
  }

  function handleNameChange(playerSymboll, newName) {
    setPlayersName((prevPlayerName) => {
      return {
        ...prevPlayerName,
        [playerSymboll]: newName,
      };
    });
  }

  function resetTheMatCh() {
    setPlayersClicks([]);
    curGameBoard = [...initialgamestatus.map((row) => [...row])];
    isGameOver = false;
    winnerPlayer = undefined;
  }

  for (const playerClick of playersClicks) {
    curGameBoard[playerClick.clickedBtn[0]][playerClick.clickedBtn[1]] =
      playerClick.player;
  }
  if (playersClicks.length === 9) {
    isGameOver = true;
  }
  driveWinner(curGameBoard, playersName);

  return (
    <>
      <header>
        <img src={gameLogo} alt="tic-tac-toe" />
        <h1>Tic-Tac-Toe</h1>
      </header>

      <section id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            playerSymboll="X"
            curPlayer={curPlayer}
            onNameChange={handleNameChange}
          />
          <Player
            name="Player 2"
            playerSymboll="O"
            curPlayer={curPlayer}
            onNameChange={handleNameChange}
          />
        </ol>
        <GameBoard onSelect={handleBtnClick} curGameBoard={curGameBoard} />
        <GameOver
          gameStatus={isGameOver}
          winner={winnerPlayer}
          reMatch={resetTheMatCh}
        />
      </section>
      <Logs playersClicks={playersClicks} playersName={playersName} />
    </>
  );
}

export default App;
