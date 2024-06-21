import React from 'react';
import './App.css';
import Basics from "./components/Basics";
import FruitShop from "./components/Fruits-project/FruitShop";
import Card from "./components/Business-Card/Card";

function App() {
    return (
        <section className={'container-md mt-3'}>
            <div className={'row'}>
                <div className={'col-3'}>
                    <Basics/>
                </div>
                <div className={"col-3"}>
                    <Card/>
                </div>
            </div>
            <div className={"row"}>
                <FruitShop/>
            </div>
        </section>
    );
}

export default App;
