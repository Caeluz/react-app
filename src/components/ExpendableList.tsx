import React, { useState } from "react";

interface Item {
  name: string;
  done: boolean;
}

interface Category {
  name: string;
  items: Item[];
}

interface Props {
  children: Item[];
  title: string;
}

const ExpendableList: React.FC<Props> = ({ children }) => {
  const [expandedItems, setExpandedItems] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleExpend = (itemName: string) => {
    setExpandedItems((prev) => {
      const newExpandedItems = { ...prev };
      newExpandedItems[itemName] = !newExpandedItems[itemName];
      return newExpandedItems;
    });

    setSelectedItem(itemName);
  };

  const handleItemClick = (itemName: string) => {
    console.log(itemName);
  };

  const listStyle = {
    padding: "10px",
    flex: 1,
    // paddingBottom: "100px",
  };

  return (
    <div style={listStyle}>
      <div>
        {children.map((item, index) => (
          <div
            key={index}
            style={{
              display: "block",
              cursor: "pointer",
              padding: "5px",
              backgroundColor: expandedItems[item.name] ? "white" : "#f0f1f3",
              marginBottom: "1px",
              textDecoration: item.done ? "line-through" : "none",
              fontWeight: "bold",
            }}
            onClick={() => handleExpend(item.name)}
          >
            {item.name}
            {expandedItems[item.name] && (
              <div>
                {item.items.map((subItem: string, subIndex: string) => (
                  <div
                    key={subIndex}
                    style={{
                      marginLeft: "15px",
                      marginTop: "10px",
                      marginBottom: "10px",
                      textDecoration: subItem.done ? "line-through" : "none",
                      color: subItem.done ? "gray" : "black",
                      fontWeight: "normal",
                    }}
                  >
                    {subItem.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpendableList;
