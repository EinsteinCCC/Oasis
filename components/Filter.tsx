"use client";
import React from "react";
import useUrl from "@/hooks/useUrl";

interface FilterProps {
  options: {
    value: string;
    label: string;
    id?: string;
  }[];
  filterField: string;
}

const Filter: React.FC<FilterProps> = ({ options, filterField }) => {
  const {addQueryToUrl, getValue} = useUrl();
  const currentFilter = getValue(filterField) || options[0].value;

  const handleClick = (value: string) => {
    addQueryToUrl(filterField, value);
  };

  return (
    <div className="border border-gray-100 bg-white shadow-sm rounded-md p-1 flex gap-1">
      {options.map((option) => (
        <button
          type="button"
          className={` border-none rounded-md font-medium text-[13px] py-[4px] px-2 transition-all duration-300 ${
            option.value === currentFilter
              ? "bg-indigo-600 text-indigo-50"
              : "bg-white"
          }`}
          key={option.value}
          onClick={() => handleClick(option.value)}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;