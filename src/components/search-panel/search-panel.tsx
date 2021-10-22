import React from "react";
import { SearchPanelProps } from "../../types/types";

const SearchPanel = ({ searchInput, setSearchInput }: SearchPanelProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <button>Find</button>
    </div>
  );
};

export default SearchPanel;
