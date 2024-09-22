import React, { memo } from "react";

const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <div className="w-full">
      <input
        value={searchValue}
        onChange={setSearchValue}
        placeholder="Search..."
        className="px-4 py-3 rounded focus:outline-blue-950 w-full border-blue-950 border-[1px] "
      />
    </div>
  );
};

export default memo(SearchBar);
