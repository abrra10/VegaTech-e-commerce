import React from "react";
import Card from "./Card";
import useFetch from "../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  // Build URL step-by-step
  let url = `/products?populate=*`;

  if (catId) {
    url += `&[filters][categories][id]=${catId}`;
  }

  if (subCats.length > 0) {
    subCats.forEach((item) => {
      url += `&[filters][sub_categories][id][$eq]=${item}`;
    });
  }

  if (maxPrice) {
    url += `&[filters][price][$lte]=${maxPrice}`;
  }

  if (sort) {
    url += `&sort=price:${sort}`;
  }

  console.log("Fetching products with URL:", url); // Log the URL for debugging

  const { data, loading, error } = useFetch(url);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
      {loading ? (
        "Loading..."
      ) : error ? (
        <p>Error loading products.</p>
      ) : (
        data?.map((item) => <Card item={item} key={item.id} />)
      )}
    </div>
  );
};

export default List;
