import React, { useEffect } from "react";
import { useState } from "react";
import AsyncSelect from "react-select/async";
import ReviewList from "./ReviewList";
import Dropdown from "../utils/DropdownRequest";

const CategorySelector = (props) => {
  const [category, setCategory] = useState("");
  const { selectedCategory, setSelectedCategory } = props;
  const { setReviews } = props;

  const handleInputChange = (value) => {
    setCategory(value);
  };

  const handleChange = (value) => {
    setSelectedCategory(value.slug);
  };

  const fetchData = () => {
    return Dropdown.get(`/categories`).then((result) => {
      const res = result.data.categories;
      return res;
    });
  };

  const makeFirstCap = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div>
      <h4>{makeFirstCap(selectedCategory)}</h4>
      <AsyncSelect
        cacheOptions
        className="categoryDropDown"
        placeholder={"Choose a Category"}
        defaultOptions
        value={selectedCategory}
        getOptionLabel={(cat) => cat.slug}
        getOptionValue={(cat) => cat.slug}
        loadOptions={fetchData}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />
    </div>
  );
};

export default CategorySelector;
