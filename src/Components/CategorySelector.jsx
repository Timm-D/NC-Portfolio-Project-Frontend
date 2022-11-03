import React, { useEffect } from "react";
import { useState } from "react";
import AsyncSelect from "react-select/async";
import ReviewList from "./ReviewList";
import Dropdown from "../utils/DropdownRequest";



const CategorySelector = () => {
  const [inputValue, setCategory] = useState("");
  const [selectedValue, setSelectedCategory] = useState(null);

  const handleInputChange = (value) => {
    setCategory(value);
  };

  const handleChange = (value) => {
    setSelectedCategory(value);
  };
  
  
  const fetchData = () => {
    return Dropdown.get(`/categories`).then((result) => {
      const res = result.data.categories;
      console.log(res)
      return res;
    });
  };

  return (
    <div>
      <AsyncSelect
        className="categoryDropDown"
        placeholder={"Choose a Category"}
        defaultOptions
        value={selectedValue}
        getOptionLabel={cat => cat.slug}
        getOptionValue={cat => cat.slug}
        loadOptions={fetchData}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />
    </div>
  );
};

export default CategorySelector;
