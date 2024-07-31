import React, {useState} from "react";
import {ProductInterface} from "./Product";

export default function Form({ onAddProduct }: { onAddProduct: (product: ProductInterface) => void; }) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);


    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!name) return alert("Please enter a name");

        const newItem = {
            id: Date.now(),
            name,
            quantity,
            purchased: false,
        };
        onAddProduct(newItem);
        setName('');
        setQuantity(1);
    }

    return (
        <form className="text-center my-2" onSubmit={handleSubmit}>
            <h5>What would you like to buy?</h5>
            <p className="text-center">How many?</p>
            <select className="form-select" value={quantity}
                    onChange={(event) => setQuantity(Number(event.target.value))}>
                {Array.from({length: 20}, (_, i) => i + 1).map(
                    (num) => (
                        <option value={num} key={num}>
                            {num}
                        </option>
                    ))}
            </select>
            <p className="text-center mt-2">What?</p>
            <input className="form-control" type="text" value={name}
                   onChange={(event) => setName(event.target.value)}
            />
            <button className="btn btn-success mt-2">Add</button>
        </form>
    );
}
