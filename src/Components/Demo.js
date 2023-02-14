import React, { useState } from "react"
import ReactDOM from "react-dom/client";

function Demo() {
  const [color, setColor] = useState("y");

  return <h1>My favorite color is {color}!</h1>
}

export default Demo