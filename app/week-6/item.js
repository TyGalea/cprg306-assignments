export default function Item({ name, quantity, category }) {
  return (
    <ul>
      <li>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm">
          Buy {quantity} in {category}
        </p>
      </li>
    </ul>
  );
}
