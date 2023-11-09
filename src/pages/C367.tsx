import React from "react";
import ExpendableList from "../components/ExpendableList";
import SideBar from "../components/SideBar";

import data from "../../data/C367.json";

type FoodType = {
  title: string;
  items: string[];
};

const C367: React.FC = () => {
  return (
    <>
      <div style={{ flex: 1 }}>
        <SideBar data={data} />
      </div>
    </>
  );
};

export default C367;
