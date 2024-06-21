export default function FruitCard({name, amount, image}: { name: string; amount: string; image: string }) {

    return (
        <div>
            <img src={image} alt={name} width={200} />
            <h4> {name} </h4>
            <p>Amount: {amount}</p>
        </div>
    );
}