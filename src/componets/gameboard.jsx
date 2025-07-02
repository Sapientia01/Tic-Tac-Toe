import "./gameBoard.css"
export default function GameBoard({ onSelect, curGameBoard }) {
  return (
    <ol id="game-board">
      {curGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                {" "}
                <button
                  onClick={() => onSelect(rowIndex, colIndex)}
                  disabled={col !== null ? true : false}
                >
                  {col}
                </button>{" "}
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}