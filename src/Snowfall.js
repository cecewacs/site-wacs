import React, { useState, useEffect } from 'react';
import Snowflake from './Snowflake';

const Snowfall = () => {
  const [flakes, setFlakes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlakes(prevFlakes => [
        ...prevFlakes,
        { id: prevFlakes.length },
      ]);
    }, 100); // Ajouter un nouveau flocon toutes les 100ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {flakes.map(flake => (
        <Snowflake key={flake.id} id={flake.id} />
      ))}
    </div>
  );
};

export default Snowfall;
