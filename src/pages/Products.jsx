import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../components/List";
import useFetch from "../hooks/useFetch";

const Products = () => {
  const { slug } = useParams(); // Use slug directly
  const [maxPrice, setMaxPrice] = useState(10000000000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  // Fetch subcategories based on the slug
  const {
    data: subCategories,
    loading: loadingSubCats,
    error: errorSubCats,
  } = useFetch(`/sub-categories?[filters][categories][slug][$eq]=${slug}`);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-2">
      <div className="flex-1 md:sticky mr-4 top-12">
        <div className="mb-8 p-4">
          <h2 className="text-lg font-tertiary font-bold mb-4 whitespace-nowrap">
            Sous-catégories
          </h2>

          {subCategories?.map((item) => (
            <div className="flex items-center mb-2" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor={item.id} className="ml-2">
                {item.attributes.title}
              </label>
            </div>
          ))}
        </div>

        <div className="mb-8 pl-4">
          <h2 className="text-lg font-tertiary font-bold mb-4">Trier par</h2>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={() => setSort("asc")}
              className="mr-2"
            />
            <label htmlFor="asc" className="ml-2 font-tertiary">
              Prix croissant
            </label>
          </div>
          <div className="flex items-center mb-2 font-tertiary">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={() => setSort("desc")}
              className="mr-2"
            />
            <label htmlFor="desc" className="ml-2">
              Prix décroissant
            </label>
          </div>
        </div>
      </div>

      <div className="flex-3 sm:pt-8 md:pt-12">
        <List
          slug={slug}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;
