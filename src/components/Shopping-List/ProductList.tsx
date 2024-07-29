import Product from './Product';

const products = [
  { id: 1, name: 'Apple', quantity: 5, purchased: false },
  { id: 2, name: 'Rice', quantity: 2, purchased: true },
  { id: 3, name: 'Milk', quantity: 3, purchased: false },
  { id: 4, name: 'Bread', quantity: 1, purchased: true },
  { id: 5, name: 'Banana', quantity: 4, purchased: false },
];

export default function List() {
  return (
    <div>
      <div className="row bg-warning-subtle">
        <div className="col-8">
          <select className="form-select" aria-label="Default select example">
            <option value="default">Default</option>
            <option value="name">Name</option>
            <option value="quantity">Quantity</option>
            <option value="purchased">Purchased</option>
          </select>
        </div>
        <div className="col-2">
          <button className="btn btn-danger">Clear</button>
        </div>
      </div>
      <ul className="list-group">
        <Product />
        <Product />
        <Product />
      </ul>
    </div>
  );
}
