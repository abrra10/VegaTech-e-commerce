import React, { useEffect } from "react";
import Card from "./Card";
import useFetch from "../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, slug }) => {
  // Construct the query URL using the category slug
  const query = `/products?populate=*&[filters][categories][slug][$eq]=${slug}${subCats.map(
    (item) => `&[filters][sub_categories][id][$eq]=${item}`
  )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`;

  useEffect(() => {
    console.log("Fetch URL:", query); // This logs the query URL for debugging
  }, [query]);

  const { data, loading, error } = useFetch(query);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
      {loading && "Loading..."}
      {error && <p>Error loading products: {error.message}</p>}
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
