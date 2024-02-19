"use client";

import Item from "./item.js";
import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");
  let sortItems = [];
  if (sortBy === "name") {
    sortItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category" || sortBy === "grouped category") {
    sortItems = [...items].sort((a, b) => a.category.localeCompare(b.category));
  }

  const groupedItems = sortItems.reduce((categories, item) => {
    const category = item.category;
    if (!categories[category]) categories[category] = [];
    categories[category].push(item);
    return categories;
  }, {});

  const groupedArray = Object.entries(groupedItems).map(([category, array]) => {
    return {
      [category]: array,
    };
  });

  return (
    <div>
      <label for="sort">Sort by:</label>
      <button
        onClick={() => setSortBy("name")}
        class={
          sortBy.localeCompare("name")
            ? "bg-orange-700 p-1 m-2 w-28"
            : "bg-orange-500 p-1 m-2 w-28"
        }
        type="button"
      >
        Name
      </button>
      <button
        onClick={() => setSortBy("category")}
        class={
          sortBy.localeCompare("category")
            ? "bg-orange-700 p-1 m-2 w-28"
            : "bg-orange-500 p-1 m-2 w-28"
        }
        type="button"
      >
        Category
      </button>
      <button
        onClick={() => setSortBy("grouped category")}
        class={
          sortBy.localeCompare("grouped category")
            ? "bg-orange-700 p-1 m-2 w-28"
            : "bg-orange-500 p-1 m-2 w-28"
        }
        type="button"
      >
        Grouped Category
      </button>
      {(sortBy === "name" || sortBy === "category") &&
        sortItems.map((item) => (
          <ul>
            <li
              key={item}
              className="px-4 py-2 bg-slate-800 rounded m-4 max-w-sm"
            >
              <Item
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            </li>
          </ul>
        ))}

      {sortBy === "grouped category" &&
        groupedArray.map((array) => (
          <ul>
            <h3 className="text-2xl capitalize">{Object.keys(array)}</h3>
            {array[Object.keys(array)].map((item) => (
              <li
                key={item}
                className="px-4 py-2 bg-slate-800 rounded m-4 max-w-sm"
              >
                <Item
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              </li>
            ))}
          </ul>
        ))}
    </div>
  );
}
