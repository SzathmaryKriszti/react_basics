import Form from './Form';
import ProductList from './ProductList';
import Stats from './Stats';

export default function ShoppingList() {
  return (
    <div>
      <div className="card" style={{ width: '39rem' }}>
        <img
          src="https://unionspringssupermarket.com/wp-content/uploads/Grocery-bag-with-items-spilling-out-vert-2.png"
          className="card-img-top"
          alt="JS-logo"
        />
        <div className="card-body">
          <h3 className="card-title text-center text-success">Shopping List</h3>
          <div className="container">
            <div className="row">
              <div className="card col-6 bg-primary-subtle">
                <Form />
              </div>
              <div className="card col-6 bg-secondary-subtle">
                <ProductList />
              </div>
              <div className="card col-12 bg-success-subtle">
                <Stats />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
