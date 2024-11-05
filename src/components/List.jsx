import React from "react";
import Card from "./Card";
import useFetch from "../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  // Dynamically build the query string based on the filters
  const buildQuery = () => {
    let query = `/products?populate=*`;

    // Add category filter if catId is provided
    if (catId) query += `&[filters][categories][id]=${catId}`;

    // Add sub-category filters only if subCats has values
    if (subCats && subCats.length > 0) {
      subCats.forEach((item) => {
        query += `&[filters][sub_categories][id][$eq]=${item}`;
      });
    }

    // Add max price filter if maxPrice is specified
    if (maxPrice) query += `&[filters][price][$lte]=${maxPrice}`;

    // Add sort filter if provided
    if (sort) query += `&sort=price:${sort}`;

    return query;
  };

  // Use the dynamically built query
  const { data, loading, error } = useFetch(buildQuery());

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
      {loading ? (
        "Loading..."
      ) : error ? (
        <p>Error loading products</p>
      ) : data && data.length > 0 ? (
        data.map((item) => <Card item={item} key={item.id} />)
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default List;
