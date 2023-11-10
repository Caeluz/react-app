import React, { useState, useEffect } from "react";
import ExpendableList from "./ExpendableList";

interface Item2 {
  name: string;
  done: boolean;
}

interface Item {
  name: string;
  items: Item2[];
}

interface Category {
  title: string;
  items: Item[];
}

const MainContent: React.FC<{ category: Category | null }> = ({ category }) => {
  if (!category) {
    return <div>Select a category</div>;
  }

  console.log(category);

  return (
    <div style={styles.mainContent}>
      {/* <ul>
        {category.items.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong>
            <ul>
              {item.items.map((subItem, subIndex) => (
                <li key={subIndex}>{subItem.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul> */}
      <ExpendableList children={category.items} />
    </div>
  );
};

const styles = {
  mainContent: {
    flex: 1,
    marginLeft: "30%",
    padding: "20px",
  },
};

export default MainContent;
