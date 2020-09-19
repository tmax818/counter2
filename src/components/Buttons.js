import React from "react";

const Buttons = ({ onCounterInc, reset, onCounterDec }) => {
  return (
    <div>
      {" "}
      <button
        onClick={() => {
          onCounterInc();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          onCounterDec();
        }}
      >
        -
      </button>
    </div>
  );
};

export default Buttons;

// obj = { name: "Tyler", age: 39 };

// const { name, age } = obj;

// console.log(name); //"Tyler"

// const { onCounterInc, reset, onCounterDec } = props;
