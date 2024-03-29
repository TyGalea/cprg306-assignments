"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    let id = "";
    const characters = "HJKhjk123";
    for (let i = 0; i < 16; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    const item = { id, name, quantity, category };
    console.log(item);
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full"
      onSubmit={handleSubmit}
    >
      <div className="m-2">
        <h2 className="text-2xl font-bold text-white p-2">Add New Item</h2>
        <input
          className="w-full text-black py-2 px-4 rounded"
          type="text"
          value={name}
          placeholder="Item name"
          required
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="flex justify-between m-2">
        <input
          className="text-black py-2 px-2 w-20 rounded"
          type="number"
          value={quantity}
          min="1"
          max="99"
          required
          onChange={(event) => setQuantity(event.target.value)}
        />
        <select
          className="text-black py-2 px-4 w-40 rounded"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="m-2">
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          +
        </button>
      </div>
    </form>
  );
}
