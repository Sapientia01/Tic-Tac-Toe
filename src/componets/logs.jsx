import "./logs.css";
export default function Logs({ playersClicks, playersName }) {
  if (playersClicks.length > 0) {
    return (
      <ol id="log">
        {playersClicks.map((playersClick) => (
          <li
            key={` ${playersClick.clickedBtn[0]} ${playersClick.clickedBtn[1]}`}
          >
            {" "}
            { playersName[playersClick.player]} clicked ({playersClick.clickedBtn[0] + 1},
            {playersClick.clickedBtn[1] + 1}) Box{" "}
          </li>
        ))}
      </ol>
    );
  }
}
