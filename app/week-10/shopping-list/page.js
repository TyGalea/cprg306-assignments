"use client";

import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import MealIdeas from "./meal-ideas.js";
import { useState } from "react";
import { useUserAuth } from "./../_utils/auth-context";
import Link from "next/link";
import { getItems, addItem } from "./../_services/shopping-list-services";
import { useEffect } from "react";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  if (!user) {
    return (
      <main>
        <p className="text-lg">Your need to be signed in to view this page.</p>
        <p className="text-lg">
          <Link className="hover:underline cursor-pointer" href="/week-8">
            Click here to goto sign in page
          </Link>
        </p>
      </main>
    );
  }

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    const id = addItem(user.uid, item);
    item.id = id;
    setItems([...items, item]);
  };

  const handleItemSelect = (name) => {
    name = name.replace(
      /[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2580-\u27BF]|\uD83E[\uDD10-\uDDFF]|/g,
      ""
    );
    name = name.split(",")[0];
    setSelectedItemName(name);
  };

  async function loadItems() {
    const items = await getItems(user.uid);
    setItems(items);
  }

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  return (
    <main className="bg-slate-900">
      <h1 className="text-3xl font-bold p-2">Shopping List</h1>
      <div className="flex">
        <div className="flex-1md m-2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1 max-w-sm m-2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
