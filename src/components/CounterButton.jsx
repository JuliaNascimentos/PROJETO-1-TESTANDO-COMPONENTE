import React, { useState } from "react";

const CounterButton = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={() => setCount(count+1)}>Incrementar</button>
    </div>
  );
};

export default CounterButton;
