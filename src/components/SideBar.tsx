import React, { useState } from "react";

interface FoodType {
  title: string;
  items: string[];
}

interface Props {
  title: string;
  items: FoodType[]; // The list of items to search through
}

const SideBar: React.FC<Props> = ({ title, items }) => {
  const [searchResult, setSearchResult] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<string[]>([]);
  const [clickedItem, setClickedItem] = useState<number | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchResult(searchTerm);

    // Filter the items based on the search term
    const filtered: FoodType[] = items
      .map((category) => ({
        title: category.title,
        items: category.items.filter((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      }))
      .filter((category) => category.items.length > 0);

    setFilteredItems(filtered);
  };

  const handleItemClick = (index: number) => {
    setClickedItem(index);
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.searchContainer}>
        <input
          type="text"
          onChange={handleSearch}
          value={searchResult}
          style={styles.input}
          placeholder="Search..."
        />
      </div>
      <div>
        <h1 style={styles.title}>{title}</h1>
        <ul style={styles.itemList}>
          {filteredItems.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2>{category.title}</h2>
              {category.items.map((item, index) => (
                <li
                  key={index}
                  style={{
                    ...styles.item,
                    backgroundColor:
                      clickedItem === index ? "#ffffff" : "#36474f",
                    color: clickedItem === index ? "#36474f" : "#ffffff",
                  }}
                  onClick={() => handleItemClick(index)}
                >
                  {item}
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "50%",
    height: "100%",
    backgroundColor: "#36474f",
    // flex: 1,
    // padding: "10px",
    border: "1px solid #ddd",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: "10px",
    marginTop: "10px",
    marginRight: "10px",
    marginLeft: "5px",
    border: "none",
    borderRadius: "20px",
    outline: "none",
  },

  title: {
    fontSize: "20px",
    margin: "10px 0 10px 10px",
    color: "#ffffff",
  },
  itemList: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    marginBottom: "5px",
    padding: "10px",
  },
};

export default SideBar;
