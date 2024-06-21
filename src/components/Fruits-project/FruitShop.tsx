import FruitCard from "./FruitCard";

interface Fruit {
    name: string;
    amount: number;
    image: string;
}

const fruits: Fruit[] = [
    {
        name: 'orange',
        amount: 3,
        image: 'https://media.istockphoto.com/id/477836156/photo/orange-fruit-isolated-on-white.jpg?s=612x612&w=0&k=20&c=NQYciPqF0kRqnDMx7Vy96Qhtx2c37OiKPXtjMR3Oy-Y='
    },
    {
        name: 'banana',
        amount: 5,
        image: 'https://i5.walmartimages.com/seo/Fresh-Banana-Fruit-Each_5939a6fa-a0d6-431c-88c6-b4f21608e4be.f7cd0cc487761d74c69b7731493c1581.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF'
    },
    {
        name: 'pear',
        amount: 8,
        image: 'https://www.fourwindsgrowers.com/cdn/shop/products/shutterstock_1693201075_1024x1024.png?v=1621966032'
    },
    {
        name: 'apple',
        amount: 0,
        image: 'https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w='
    }
];

export default function FruitShop() {
    return (
        <section className={"container-md"}>
            <h3>Fruit Shop</h3>
            <div className={"row"}>
            {fruits.map((fruit,index) => (
                <div className={"col-3"} key={index}>
                    <FruitCard name={fruit.name} amount={fruit.amount} image={fruit.image}/>
                </div>
            ))}
            </div>
            {/*<FruitCard name={"orange"} amount={3} image={"https://images.unsplash.com/photo-1582979512210-99b6a53386f9?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>*/}
            {/*<FruitCard  name={"banana"} amount={5} image={"https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=2791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>*/}
            {/*<FruitCard  name={"pear"} amount={8} image={"https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=3789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>*/}
        </section>
    );
}