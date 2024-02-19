"use client";

import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <main className="bg-slate-900">
      <NewItem onAddItem={handleAddItem} />
      <h1 className="text-3xl font-bold p-2">Shopping List</h1>
      <ItemList items={items} />
    </main>
  );
}
