export interface ProductInterface {
    id: number;
    name: string;
    quantity: number;
    purchased: boolean;
}

interface ProductProps {
    product: ProductInterface;
    onDeleteProduct: (id: number) => void;
    onTogglePurchased: (id: number) => void;
}

export default function Product({product, onDeleteProduct, onTogglePurchased}: ProductProps) {
  return (
    <li className="list-group-item bg-secondary">
      <input
        style={{ width: '1rem', height: '1rem' }}
        type="checkbox"
        checked={product.purchased}
        onChange={() => {onTogglePurchased(product.id)}}
        name=""
        id=""
      />
      <span
          style={product.purchased
              ? {textDecoration: 'line-through', color: 'green'}
              : {}}
          className="ms-3 fw-bold fs-5">{product.quantity} | {product.name}</span>
      <button onClick={() => onDeleteProduct(product.id)} className="ms-3">❌</button>
    </li>
  );
}
