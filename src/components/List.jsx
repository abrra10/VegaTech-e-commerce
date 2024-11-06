import React from "react";
import Card from "./Card";
import useFetch from "../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  // Construct the filter for sub-categories
  const subCategoryFilter = subCats.length
    ? subCats
        .map((item) => `&[filters][sub_categories][id][$eq]=${item}`)
        .join("")
    : "";

  // Construct the URL
  const url = `/products?populate=*&[filters][categories][id]=${catId}${subCategoryFilter}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`;

  // Fetch data
  const { data, loading, error } = useFetch(url);

  // Log URL for debugging
  console.log("Fetching URL:", url);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
      {loading
        ? "Loading..."
        : error
        ? "Error loading data"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
