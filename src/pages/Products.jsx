import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import List from "../components/List";
import useFetch from "../hooks/useFetch";

const Products = () => {
  const { slug } = useParams(); // Use slug from URL params
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  // Fetch category ID based on the slug
  const [catId, setCatId] = useState(null);
  const { data: categories } = useFetch("/categories"); // Fetch all categories to find the ID

  useEffect(() => {
    if (categories) {
      const category = categories.find((cat) => cat.attributes.slug === slug);
      if (category) {
        setCatId(category.id); // Set the category ID based on slug
      }
    }
  }, [categories, slug]);

  // Fetch subcategories based on the category ID
  const {
    data: subCategories,
    loading: loadingSubCats,
    error: errorSubCats,
  } = useFetch(
    catId ? `/sub-categories?[filters][categories][id][$eq]=${catId}` : null
  );

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
      {/* Left Sidebar for Subcategories */}
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

        {/* Sort Options */}
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

      {/* Right Content */}
      <div className="flex-3 sm:mt-8">
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;
