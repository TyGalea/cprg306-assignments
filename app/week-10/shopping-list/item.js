export default function Item({ name, quantity, category, onSelect, onDelete }) {
  return (
    <div className="flex justify-between" onClick={() => onSelect(name)}>
      <ul>
        <li>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm">
            Buy {quantity} in {category}
          </p>
        </li>
      </ul>
      <button
        onClick={() => onDelete(name)}
        className="bg-red-500 p-1 m-2"
        type="button"
      >
        Remove
      </button>
    </div>
  );
}
