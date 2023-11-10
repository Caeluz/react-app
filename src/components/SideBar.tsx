import React, { useState, useEffect } from "react";
import ExpendableList from "./ExpendableList";
import MainContent from "./MainContent";

// interface FoodType {
//   title: string;
//   items: string[];
// }

// interface Props {
//   title: string;
//   items: FoodType[]; // The list of items to search through
// }

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

interface Props {
  data: Category[];
  // data: any;
}

const SideBar: React.FC<Props> = ({ data }) => {
  const [searchResult, setSearchResult] = useState<string>("");
  const [clickedTitle, setClickedTitle] = useState<string | null>(null);
  const [filteredTitles, setFilteredTitles] = useState<string[]>([]);

  // Initialize filteredTitles with all category titles when the component mounts
  useEffect(() => {
    const allTitles = data.map((category) => category.title);
    setFilteredTitles(allTitles);
  }, [data]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchResult(searchTerm);

    // Filter the items based on the search term
    const filtered = data
      .map((category: Category) => category.title)
      .filter((title: string) =>
        title.toLowerCase().includes(searchTerm.toLowerCase())
      );

    setFilteredTitles(filtered);
  };

  console.log(filteredTitles);

  const handleTitleClick = (title: string) => {
    setClickedTitle(title);
  };

  return (
    <div>
      <div style={styles.sidebar}>
        <div style={styles.searchContainer}>
          <input
            type="text"
            onChange={handleSearch}
            value={searchResult}
            style={styles.input}
            placeholder="Search"
          />
          <style>
            {`
            ::placeholder {
              color: #cdd3d6;
              marginLeft: 10px;
            }
          `}
          </style>
        </div>
        <div>
          <ul style={styles.itemList}>
            {filteredTitles.map((categoryTitle, index) => {
              const category = data.find(
                (category: Category) => category.title === categoryTitle
              );
              if (category) {
                return (
                  <li
                    key={index}
                    style={{
                      ...styles.item,
                      backgroundColor:
                        clickedTitle === categoryTitle ? "#ffffff" : "#36474f",
                      color:
                        clickedTitle === categoryTitle ? "#36474f" : "#ffffff",
                    }}
                    onClick={() => handleTitleClick(categoryTitle)}
                  >
                    <div style={styles.itemContent}>
                      <span>{categoryTitle}</span>
                      <span
                        style={{
                          marginLeft: "auto", // Adjust the margin if needed
                          marginRight: "10px", // Adjust the margin if needed
                          borderRadius: "50%",
                          textAlign: "center",
                          padding: "8px", // Adjust the padding for better visual appearance
                          width: "20px",
                          height: "20px",
                          fontSize: "12px", // Adjust the font size for better visibility
                          display: "flex",
                          alignItems: "center", // Center the text vertically
                          justifyContent: "center", // Center the text horizontally
                          backgroundColor:
                            clickedTitle === categoryTitle
                              ? "#d9ddde"
                              : "#2c3e48",
                        }}
                      >
                        {category.items.length}
                      </span>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
      <MainContent
        category={
          clickedTitle ? data.find((c) => c.title === clickedTitle) : null
        }
      />
    </div>
  );
};

const styles = {
  sidebar: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "30%",
    height: "100%",
    backgroundColor: "#36474f",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    border: "1px solid #ddd",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
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
    backgroundColor: "#43545c",
    color: "#cdd3d6",
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

  itemContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  item: {
    marginBottom: "5px",
    padding: "10px",
  },
};

export default SideBar;
