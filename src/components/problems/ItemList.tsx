import React, { useState } from "react";

// Create a React component that displays a list of items. 
// Initially, the list is empty. There should be an input field and a button. 
// When the user enters an item in the input field and clicks the button, 
// the item should be added to the list. Each item in the list should have a button 
// next to it that, when clicked, removes the item from the list.


const ItemList: React.FC = () => {
  const [item, setItem] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    if (item.trim() !== "") {
      setItems([...items, item]);
      setItem("");
    }
  };

  const removeItem = (index: number) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        name="item"
        style={{ margin: "10px" }}
      />
      <br />
      <button onClick={addItem} style={{ margin: "10px" }}>
        Submit
      </button>
      <h1>List of Items</h1>
      {items.map((item, index) => (
        <li key={index} style={{ margin: "10px" }}>
          {item}
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => {
              removeItem(index);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default ItemList;
