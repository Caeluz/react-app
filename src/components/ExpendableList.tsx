import React, { useState } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const ExpendableList: React.FC<Props> = ({ title, children }) => {
  const [isExpend, setIsExpend] = useState<boolean>(false);

  const handleExpend = () => {
    setIsExpend(!isExpend);
  };

  const listStyle = {
    padding: "10px",
    marginBottom: "2px",
    marginLeft: "5px",
    marginRight: "5px",
    backgroundColor: isExpend ? "white" : "lightgray",
  };

  return (
    <div style={listStyle}>
      <h1 onClick={handleExpend}>{title}</h1>
      {isExpend && children}
    </div>
  );
};

export default ExpendableList;
