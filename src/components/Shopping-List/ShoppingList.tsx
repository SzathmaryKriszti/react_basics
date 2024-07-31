import Form from './Form';
import ProductList from './ProductList';
import Stats from './Stats';
import {useState} from "react";
import {ProductInterface} from "./Product";

export default function ShoppingList() {
    const [products, setProducts] = useState<ProductInterface[]>([]);

    function handleAddProduct(product: ProductInterface) {
        setProducts((prevProducts) => [...prevProducts, product])
    }

    function handleDeleteProduct(id: number) {
        setProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== id)
        )
    }

    function handleTogglePurchased(id: number) {
        setProducts((prevProducts) =>
            prevProducts.map((product) => {
                if (product.id === id) {
                    return {...product, purchased: !product.purchased};
                }
                return product;
            })
        )
    }
     function handleClearProducts(){
        setProducts([]);
     }

    return (
        <div>
            <div className="card" style={{width: '39rem'}}>
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
                                <Form onAddProduct={handleAddProduct}/>
                            </div>
                            <div className="card col-6 bg-secondary-subtle">
                                <ProductList products={products}
                                             onDeleteProduct={handleDeleteProduct}
                                             onTogglePurchased={handleTogglePurchased}
                                             onClearProducts={handleClearProducts}
                                />
                            </div>
                            <div className="card col-12 bg-success-subtle">
                                <Stats products={products} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
