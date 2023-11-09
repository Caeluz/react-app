import React, { useState } from "react";

// interface FoodType {
//   title: string;
//   items: string[];
// }

// interface Props {
//   title: string;
//   items: FoodType[]; // The list of items to search through
// }

interface Props {
  data: [
    {
      name: string;
      items: [
        {
          name: string;
          items: [
            {
              name: string;
              done: boolean;
            },
          ];
        },
      ];
    },
  ];
}

// type Daum = {
//   name: string;
//   items: Item[];
// };

// interface Item {
//   name: string;
//   items: Item2[];
// }

// interface Item2 {
//   name: string;
//   done: boolean;
// }

const SideBar: React.FC<Props> = ({ data }) => {
  console.log(data);

  const [searchResult, setSearchResult] = useState<string>("");
  const [filteredTitles, setFilteredTitles] = useState<string[]>(
    data.map((item) => item.name)
  );
  // data.map((item) => item.name)
  const [clickedTitle, setClickedTitle] = useState<string | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchResult(searchTerm);

    // Filter the items based on the search term
    const filtered = items
      .map((category) => category.title)
      .filter((title) =>
        title.toLowerCase().includes(searchTerm.toLowerCase())
      );

    setFilteredTitles(filtered);
  };

  const handleTitleClick = (title: string) => {
    setClickedTitle(title);
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
          {filteredTitles.map((categoryTitle, index) => (
            <li
              key={index}
              style={{
                ...styles.item,
                backgroundColor:
                  clickedTitle === categoryTitle ? "#ffffff" : "#36474f",
                color: clickedTitle === categoryTitle ? "#36474f" : "#ffffff",
              }}
              onClick={() => handleTitleClick(categoryTitle)}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{categoryTitle}</span>
                <span>{items[index].items.length}</span>
                <span></span>
              </div>
            </li>
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
    width: "30%",
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
