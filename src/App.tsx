import React, { useState } from "react";
import Calculator from "./components/Calculator";

const App: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleValueChange = (value: number) => {
    setValue(value);
  };

  return (
    <div>
      <Calculator value={value} onChange={handleValueChange} />
      <div>{value}</div>
    </div>
  );
};

export default App;
