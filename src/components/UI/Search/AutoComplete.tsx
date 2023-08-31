import React, { useState } from "react";

interface CounterProps {
  children: React.ReactNode;
  count: number;
}

const Counter = ({ children, count: initialCount }: CounterProps) => {
  const [count, setCount] = useState(initialCount);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
      <div className="counter-message">{children}</div>
    </>
  );
};

export default Counter;
