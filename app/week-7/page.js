"use client";

import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas.js";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("bread");

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleItemSelect = (name) => {
    setSelectedItemName(name);
  };

  return (
    <main className="bg-slate-900">
      <h1 className="text-3xl font-bold p-2">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} onItemSelect={handleItemSelect} />
      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
}
