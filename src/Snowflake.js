import React, { useEffect, useState } from 'react';
import './snowflake.css';

const Snowflake = ({ id }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const randomX = Math.random() * window.innerWidth; // Positionnement horizontal aléatoire
    const randomDelay = Math.random() * 5; // Délai pour animation
    const size = Math.random() * 10 + 5; // Taille aléatoire du flocon

    // Appliquer les styles
    setStyle({
      left: `${randomX}px`,
      fontSize: `${size}px`,
      animationDuration: `${5 + Math.random() * 5}s`, // Durée de la chute
      animationDelay: `${randomDelay}s`,
    });
  }, []);

  return <div className="snowflake" style={style} key={id}>❄️</div>;
};

export default Snowflake;
