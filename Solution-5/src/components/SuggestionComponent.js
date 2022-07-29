import React, { useState, useCallback } from "react";

const SuggestionComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = (value) => {
    fetch(`${process.env.REACT_APP_URL}${value}`)
      .then((result) => result.json())
      .then((result) => {
        setSuggestions(result);
      });
  };

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleSearch = useCallback(debounce(fetchSuggestions), []);

  const handleInput = (value) => {
    setInputValue(value);
    if (value.length > 0) {
      handleSearch(value);
    }
  };

  const searchResults = suggestions.map((val, i) => {
    return (
      <option value={val.word} key={`${val}-${i}`}>
        {val.word}
      </option>
    );
  });

  return (
    <>
      <input
        type="text"
        placeholder="Enter text here"
        onChange={(e) => {
          handleInput(e.target.value);
        }}
        list="suggest"
      />
      {inputValue.length > 0 && (
        <datalist id="suggest">{searchResults}</datalist>
      )}
    </>
  );
};

export default SuggestionComponent;
