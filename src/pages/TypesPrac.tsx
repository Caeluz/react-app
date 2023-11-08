import React, { ChangeEvent, useState } from "react";

const TypesPrac: React.FC = () => {
  const [name, setName] = useState<string>("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>Types Checker</h1>
      <input
        type="text"
        style={{ margin: 10 }}
        value={name}
        onChange={handleNameChange}
      />
      <p>{name}</p>

      <Autocomplete />
    </div>
  );
};

function Autocomplete() {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Your data source (e.g., an array of countries)
  const countries: string[] = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Spain",
    "Italy",
  ];

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
    setInputValue(value);

    // Filter suggestions based on the input value
    const filteredSuggestions: string[] = countries.filter((country: string) =>
      country.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search for a country"
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
}

export default TypesPrac;
