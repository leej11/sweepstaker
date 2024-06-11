import React, { useContext } from "react";
import { DrawContext } from "../context/drawContext";

function Entrant() {
  const { entrants } = useContext(DrawContext);
  return (
    <div className="entrant">
      <h2>Entrant</h2>
      <ul>
        {Object.keys(entrants).map((person) => (
          <li key={person}>{person}</li>
        ))}
      </ul>
    </div>
  );
}

export default Entrant;
