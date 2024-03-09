export default function Item({ name, quantity, category, onSelect }) {
  return (
    <ul>
      <li onClick={() => onSelect(name)}>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm">
          Buy {quantity} in {category}
        </p>
      </li>
    </ul>
  );
}
