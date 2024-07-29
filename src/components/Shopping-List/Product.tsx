export default function Product() {
  return (
    <li className="list-group-item bg-secondary">
      <input
        style={{ width: '1rem', height: '1rem' }}
        type="checkbox"
        name=""
        id=""
      />
      <span className="ms-3 fw-bold fs-5">Bread</span>
      <button className="ms-3">❌</button>
    </li>
  );
}
