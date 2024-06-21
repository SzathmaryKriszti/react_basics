import FruitCard from "./FruitCard";

export default function FruitShop () {
    return (
        <section className={"container-md"}>
            <h3>Fruit Shop</h3>
            <FruitCard name={"orange"} amount={"3"} image={"https://images.unsplash.com/photo-1582979512210-99b6a53386f9?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
            <FruitCard  name={"banana"} amount={"5"} image={"https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=2791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
            <FruitCard  name={"pear"} amount={"8"} image={"https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=3789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        </section>
    );
}