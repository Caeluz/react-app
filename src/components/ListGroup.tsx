import { useState } from "react";

interface Props {
  items: string[];
  heading: string;

  onSelectItem: (items: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  // States are independent from each other
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event handler

  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>There are no items!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
