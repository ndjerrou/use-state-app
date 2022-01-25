import { useState } from "react";

const Counter = () => {
  // state : data that can change over the time
  let [counter, setCounter] = useState(100); //use state sends me back an array

  const handleAdd = (e) => {
    console.log("Add + 1");
    // counter = counter + 1; !!!! NEVER UPDATE THE STATE DIRECTLY
    counter = counter + 1;
    // setCounter(counter + 1);
    console.log("counter = ", counter);
  };
  const handleMinus = (e) => {
    console.log("Add - 1");

    setCounter(counter - 1);
    console.log("counter = ", counter);
  };

  return (
    <>
      <h3>{counter}</h3>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleMinus}>-</button>
    </>
  );
};

export default Counter;
