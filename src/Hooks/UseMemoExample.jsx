import { useMemo, useState } from "react";

function slowCalculation(num) {
  console.log("Calculating...");
  // Heavy loop to simulate expensive work
  for (let i = 0; i < 1000000000; i++) { }
  return num * 2;
}

export default function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");

  // const doubledNumber = slowCalculation(number);
  
  const doubledNumber = useMemo(() => {
    return slowCalculation(number);
  }, [number]); // Only runs when number changes

  return (
    <div style={{ padding: "20px" }}>
      <h3>useMemo Example</h3>

      <p>Double of {number} is: {doubledNumber}</p>

      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Typing here should NOT recalculate"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
