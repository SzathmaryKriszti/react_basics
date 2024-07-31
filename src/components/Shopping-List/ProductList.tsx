import Product, {ProductInterface} from './Product';
import {useState} from "react";

// const products: ProductInterface[] = [
//   { id: 1, name: 'Apple', quantity: 5, purchased: false },
//   { id: 2, name: 'Rice', quantity: 2, purchased: true },
//   { id: 3, name: 'Milk', quantity: 3, purchased: false },cker de
//   { id: 4, name: 'Bread', quantity: 1, purchased: true },
//   { id: 5, name: 'Banana', quantity: 4, purchased: false },
// ];

interface ProductListProps {
    products: ProductInterface[];
    onDeleteProduct: (id: number) => void;
    onTogglePurchased: (id: number) => void;
    onClearProducts: () => void;
}

export default function List( { products, onDeleteProduct, onTogglePurchased, onClearProducts }: ProductListProps) {

    const [sortBy, setSortBy] = useState('default');
    let sortedProducts: ProductInterface[] = [];

    if (sortBy === 'default') {
        sortedProducts = products;
    }

    if (sortBy === 'name'){
        sortedProducts = products.slice().sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === 'quantity'){
        sortedProducts = products.slice().sort((a, b) => Number(a.quantity) - Number(b.quantity));
    }

    if (sortBy === 'purchased'){
        sortedProducts = products.slice().sort((a, b) => Number(a.purchased) - Number(b.purchased));
    }
    //Number(true) -> 1       Number(false) -> 2

  return (
    <div>
      <div className="row bg-warning-subtle">
        <div className="col-8">
          <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="form-select" aria-label="Default select example">
            <option value="default">Default</option>
            <option value="name">Name</option>
            <option value="quantity">Quantity</option>
            <option value="purchased">Purchased</option>
          </select>
        </div>
        <div className="col-2">
          <button onClick={onClearProducts} className="btn btn-danger">Clear</button>
        </div>
      </div>
      <ul className="list-group">
        {sortedProducts.map((product) => (
            <Product
                product={product}
                key={product.id}
                onDeleteProduct={onDeleteProduct}
                onTogglePurchased={onTogglePurchased}
            />
        ))}
      </ul>
    </div>
  );
}
