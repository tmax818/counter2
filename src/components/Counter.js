import React from "react";

const Counter = ({ counter }) => {
  console.log(counter);
  return (
    <div>
      <h1>Counter: {counter}</h1>
    </div>
  );
};

export default Counter;
