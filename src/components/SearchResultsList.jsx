import SearchResult from "./SearchResult";

const SearchResultsList = ({ results, onSelect }) => {
  return (
    <div
      className="w-full bg-white z-50 flex flex-col font-tertiary text-[18px] shadow-md rounded-lg mt-6 max-h-[300px] overflow-y-auto absolute"
      style={{ top: "100%" }} // Ensure the list is positioned properly relative to the input
    >
      {results.length > 0 ? (
        results.map((result) => (
          <SearchResult result={result} key={result.id} onSelect={onSelect} />
        ))
      ) : (
        <div className="p-4 text-gray-500">No results found.</div>
      )}
    </div>
  );
};

export default SearchResultsList;
