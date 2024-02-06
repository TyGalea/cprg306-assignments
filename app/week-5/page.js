import ItemList from "./item-list.js";

export default function Page() {
  return (
    <main className="bg-slate-900">
      <h1 className="text-3xl font-bold p-2">Shopping List</h1>
      <ItemList />
    </main>
  );
}
