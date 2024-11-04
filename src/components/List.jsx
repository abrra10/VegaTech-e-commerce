import React from "react";
import Card from "./Card";
import useFetch from "../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  // Construct the URL for fetching products
  const url =
    `/products?populate=*&[filters][categories][id]=${catId}` +
    (subCats.length
      ? `${subCats
          .map((item) => `&[filters][sub_categories][id][$eq]=${item}`)
          .join("")}`
      : "") +
    `&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`;

  console.log("Fetching URL:", url); // Debugging line

  const { data, loading, error } = useFetch(url);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
      {loading
        ? "Loading..."
        : error
        ? "Error loading products."
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
