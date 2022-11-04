import React, { useEffect } from "react";
import { useState } from "react";
import AsyncSelect from "react-select/async";
import Dropdown from "../utils/DropdownRequest";
import { useNavigate } from "react-router-dom";
import CategoryHeader from "./CategoryHeader";

const CategorySelector = (props) => {
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

 
  const handleChange = (value) => {
    setCategory(value.slug)
    navigate(`/all_reviews/${value.slug}`)
  };

  const fetchData = () => {
    return Dropdown.get(`/categories`).then((result) => {
      const res = result.data.categories;
      return res;
    });
  };



  return (
    <div>
      <CategoryHeader category={category}/>
      <AsyncSelect
        cacheOptions
        className="categoryDropDown"
        placeholder={"Choose a Category"}
        defaultOptions
        value={category}
        getOptionLabel={(cat) => cat.slug}
        getOptionValue={(cat) => cat.slug}
        loadOptions={fetchData}
        onChange={handleChange}
      />
    </div>
  );
};

export default CategorySelector;
