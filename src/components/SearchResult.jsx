const SearchResult = ({ result, onSelect }) => {
  return (
    <div
      className="cursor-pointer p-2 pl-5 pr-5 rounded-lg hover:bg-gray-200 transition duration-200 ease-in-out"
      onClick={() => onSelect(result)} // Call onSelect when clicked
      role="button" // Improves accessibility
      tabIndex={0} // Makes the div focusable
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          onSelect(result); // Call onSelect with the result
        }
      }}
    >
      {result.title} {/* Change to display product title */}
    </div>
  );
};

export default SearchResult;
