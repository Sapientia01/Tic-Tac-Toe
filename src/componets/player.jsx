import { useState } from "react";
import "./player.css";
export default function player({
  name,
  playerSymboll,
  curPlayer,
  onNameChange,
}) {
  const [PlayerName, setPlayerName] = useState(name);
  const [isEditing, setIsediting] = useState(false);

  let btnName = "Edit";
  let CurPlayerName = <p className="player-name">{PlayerName} </p>;

  function handleEditing() {
    setIsediting((editing) => !editing);
    if (isEditing) {
      onNameChange(playerSymboll, PlayerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  btnName = isEditing ? "Save" : "Edit";

  if (isEditing) {
    CurPlayerName = (
      <input
        type="text"
        required
        value={PlayerName}
        onChange={() => handleChange(event)}
      />
    );
  }

  return (
    <li className={curPlayer === playerSymboll ? "active player" : "player"}>
      {CurPlayerName} <span className="player-symbol">{playerSymboll}</span>
      <button onClick={handleEditing}>{btnName}</button>{" "}
    </li>
  );
}
