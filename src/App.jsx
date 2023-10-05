import { useState } from "react";

function Sum({ num1, num2 }) {
  const result = num1 + num2;
  return <p>Sum: {result}</p>;
}

export default function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  function calculate() {
    // Read the input values directly
    const inputNum1 = parseFloat(
      document.querySelector('input[name="num1"]').value
    );
    const inputNum2 = parseFloat(
      document.querySelector('input[name="num2"]').value
    );

    // Update the state with the input values
    setNum1(inputNum1);
    setNum2(inputNum2);
  }

  return (
    <>
      <input type="number" name="num1" />
      <input type="number" name="num2" />
      <br />
      <br />
      <button onClick={calculate}>Calculate</button>
      <Sum num1={num1} num2={num2} />
    </>
  );
}
