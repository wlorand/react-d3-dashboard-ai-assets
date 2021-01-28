import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

function CatalogGlobalFilter({ filterValue, setFilter }) {
  // define a piece of state for the form field value
  const [value, setValue] = useState(filterValue);

  const handleChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 500);

  return (
    <div className="table-search">
      <span className="table-search-title">Asset Search: </span>
      <input
        type="text"
        size="40"
        value={value || ""}
        className="table-search-input"
        onChange={(e) => {
          setValue(e.target.value);
          handleChange(e.target.value);
        }}
      />
    </div>
  );
}

export default CatalogGlobalFilter;
