import { useState, useRef } from "react" ;


export default function Player() {
  const playerName = useRef();

  const [pName, setPName] = useState(null);

  function handleClick() {
    setPName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {pName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section> 
  );
}
