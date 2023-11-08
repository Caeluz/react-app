import React from "react";
import ExpendableList from "../components/ExpendableList";
import SideBar from "../components/SideBar";

type FoodType = {
  title: string;
  items: string[];
};

const C367: React.FC = () => {
  const foods: FoodType = {
    title: "foods",
    items: ["apple", "banana", "orange"],
  };
  const drinks: FoodType = {
    title: "drinks",
    items: ["coke", "sprite", "fanta"],
  };
  return (
    <>
      <div style={{ flex: 1 }}>
        <SideBar title="SideBar" items={[foods, drinks]} />
      </div>
    </>
  );
};

export default C367;
