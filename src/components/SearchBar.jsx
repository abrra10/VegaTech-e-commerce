import { useState, useRef } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import axios from "axios";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const timeoutIdRef = useRef(null);

  const debounce = (func, delay) => {
    return (...args) => {
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const fetchProducts = async (value) => {
    if (!value) {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get("http://localhost:1337/api/products");
      const products = response.data.data.map((item) => ({
        id: item.id,
        ...item.attributes,
      }));

      const filteredResults = products.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );

      setResults(filteredResults);
    } catch (error) {
      console.error("Error fetching products:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchProducts = debounce(fetchProducts, 300);

  const handleChange = (value) => {
    setInput(value);
    debouncedFetchProducts(value);
  };

  const clearInput = () => {
    if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    setInput("");
    setResults([]);
    inputRef.current?.focus();
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="relative w-60 h-10 border-none rounded-lg p-2 shadow-md bg-white flex items-center">
      <FaSearch className="text-royalblue" />
      <input
        ref={inputRef}
        className="bg-transparent border-none h-full font-tertiary text-[16px] w-full pl-2 focus:outline-none"
        placeholder="Rechercher..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {input && (
        <FaTimes
          className="text-gray-600 cursor-pointer ml-2 text-lg hover:text-red-500"
          onClick={clearInput}
        />
      )}
      {loading && (
        <span className="ml-2 text-lg text-royalblue">Loading...</span>
      )}
    </div>
  );
};

export default SearchBar;
