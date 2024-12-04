import { useState } from "react";

function Card({ image, id }) {
  const [{ degree, xPos, yPos }] = useState({
    degree: Math.random() * 90 - 45,
    xPos: Math.random() * 40 - 20,
    yPos: Math.random() * 40 - 20,
  });

  const transform = `translate(${xPos}px, ${yPos}px) rotate(${degree}deg)`;

  return <img src={image} className="Card" alt={id} style={{ transform }} />;
}

export default Card;
