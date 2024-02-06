"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      class="p-2 m-4 bg-slate-900 text-black max-w-sm w-full"
      onSubmit={handleSubmit}
    >
      <div class="m-2">
        <input
          class="w-full text-black py-2 px-4 rounded"
          type="text"
          value={name}
          placeholder="Item name"
          required
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div class="flex justify-between m-2">
        <input
          class="text-black py-2 px-2 w-20 rounded"
          type="number"
          value={quantity}
          min="1"
          max="99"
          onChange={(event) => setQuantity(event.target.value)}
        />
        <select
          class="text-black py-2 px-4 w-40 rounded"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="m-2">
        <button
          class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          +
        </button>
      </div>
    </form>
  );
}
