import StockStatus from "./StockStatus";

export default function FruitCard({name, amount, image}: { name: string; amount: number; image: string }) {

    // if(amount === 0) {
    //     // return <h1 className={"text-danger"}> Sold out!</h1>
    //     return null;
    // }

    return (
        <div>
            <div className={"card text-center"} style={{width: '18rem', height: '28rem'}}>
                <img src={image} alt={name}/>
                <div className={"card-body"}>
                    <h5 className={"card-title"}> {name} </h5>
                    <p className={"card-text"}>Amount: {amount}</p>
                    {/*{amount > 0 && (*/}
                    {/*    <>*/}
                    {/*        <h6 className={"card-subtitle mb-1"}> Discount!</h6>*/}
                    {/*        <button className={"btn btn-success"}> Shop</button>*/}
                    {/*    </>*/}
                    {/*)}*/}
                    {/*{amount > 0 ? (*/}
                    {/*    <>*/}
                    {/*        <h6 className={"card-subtitle mb-1"}> Discount!</h6>*/}
                    {/*        <button className={"btn btn-success"}> Shop</button>*/}
                    {/*    </>*/}
                    {/*) : (*/}
                    {/*    <>*/}
                    {/*        <h6 className={"card-subtitle mb-1"}> Unavailable!</h6>*/}
                    {/*        <button disabled className={"btn btn-danger"}> Out of stock</button>*/}
                    {/*    </>*/}
                    {/*)}*/}

                    {amount > 0 ?
                        <StockStatus
                            actionStatus={"Discount!"}
                            isDisabled={false}
                            btnLabel={"Shop"}
                            btnClass={"btn-success"}
                            amount={amount} />
                        :
                        <StockStatus
                            actionStatus={"Unavailable!"}
                            isDisabled={true}
                            btnLabel={"Out of stock"}
                            btnClass={"btn-danger"}
                            amount={amount}/>}

                </div>
            </div>
        </div>
    );
}