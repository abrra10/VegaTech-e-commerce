import React from "react";
import Card from "./Card";
import useFetch from "../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  // Build query string dynamically
  const buildQuery = () => {
    const filters = [`populate=*`];

    if (catId) {
      filters.push(`[filters][categories][id]=${catId}`);
    }

    if (subCats && subCats.length > 0) {
      subCats.forEach((item) => {
        filters.push(`[filters][sub_categories][id][$eq]=${item}`);
      });
    }

    if (maxPrice) {
      filters.push(`[filters][price][$lte]=${maxPrice}`);
    }

    if (sort) {
      filters.push(`sort=price:${sort}`);
    }

    // Join all filters with '&' to form the final query string
    return `/products?${filters.join("&")}`;
  };

  const { data, loading, error } = useFetch(buildQuery());

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
      {loading
        ? "Loading..."
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
