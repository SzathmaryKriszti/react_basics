import {ProductInterface} from "./Product";

export default function Stats({products} : {products: ProductInterface[]}) {

    const numProducts = products.length;
    const numPurchased = products.filter((product) => product.purchased).length;
    const percentage = Math.round((numPurchased / numProducts) * 100)

    if (!numProducts){
        return (
            <div className="text-center">
                <h5>
                    Start adding some products!
                </h5>
            </div>
        )
    }

  return (
    <div className="text-center">
      <h5>
          {percentage === 100 ? 'Congrats! You bought everything!'
              :
             ` Items on list: ${numProducts} ---- You already bought ${numPurchased} (${percentage}%)`
          }
      </h5>
    </div>
  );
}
