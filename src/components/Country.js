import React, { useContext, useEffect } from "react";
import { DrawContext } from "../context/drawContext";

function Country() {
  const { countries } = useContext(DrawContext);

  return (
    <div className="country">
      <h2>Countries List</h2>
      <ul>
        {Object.entries(countries).map(([country, details]) => (
          <li key={country}>
            {country}
            {/* /* - {details.seed} - Group {details.group} */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Country;
