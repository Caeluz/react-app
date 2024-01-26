import React, { useState } from "react";

interface SidebarProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const categories = ["Grocery", "Work", "Personal", "School"];

  console.log(selectedCategory)

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const getColor = (category: string) => {
    return selectedCategory === category ? "red" : "black";
  };

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="sidebar">
      <input type="text" placeholder="Search..." value={searchInput} onChange={(e) => filteredCategories(e.target.value)}/>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => handleCategoryClick(category)}
            style={{ color: getColor(category) }}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
