"use client";

import Item from "./item.js";
import Items from "./items.json";
import { useState } from "react";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  if (sortBy === "name") {
    Items.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    Items.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <div>
      <button
        onClick={() => setSortBy("name")}
        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        type="button"
      >
        name
      </button>
      <button
        onClick={() => setSortBy("category")}
        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        type="button"
      >
        category
      </button>
      <ul>
        {Items.map((item) => (
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
    </div>
  );
}
