import React from "react";

const FilterOptions = ({ onFilterChange }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-around mt-4">
      <select
        onChange={(e) => onFilterChange("genre", e.target.value)}
        className="border rounded px-4 py-2 mb-4 sm:mb-0"
      >
        <option value="All">All Genres</option>
        <option value="Fiction">Fiction</option>
        <option value="non-Fiction">Non-Fiction</option>
        {/* Add more genres */}
      </select>

      <select
        onChange={(e) => onFilterChange("price", e.target.value)}
        className="border rounded px-4 py-2 mb-4 sm:mb-0"
      >
        <option value="All">Any Price</option>
        <option value="low-to-high">Low to High</option>
        <option value="high-to-low">High to Low</option>
      </select>

      <select
        onChange={(e) => onFilterChange("date", e.target.value)}
        className="border rounded px-4 py-2 mb-4 sm:mb-0"
      >
        <option value="">Any Date</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
};

export default FilterOptions;
