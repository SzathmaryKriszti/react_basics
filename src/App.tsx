import React from 'react';
import './App.css';
import Basics from "./components/Basics";
import FruitShop from "./components/Fruits-project/FruitShop";
import Card from "./components/Business-Card/Card";
import LearningProcess from "./components/Study-Frontend/LearningProcess";
import ProgressManager from "./components/Progress-Manager/ProgressManager";
import ShoppingList from "./components/Shopping-List/ShoppingList";
import TipCalculator from "./components/Tip-Calculator/TipCalculator";

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
                <div className={"col-6"}>
                    <div className={"row"}>
                        <LearningProcess/>
                    </div>
                    <div className={"row mt-3"}>
                        <ProgressManager/>
                    </div>
                </div>
            </div>
            <div className={"row"}>
                <FruitShop/>
            </div>
            <div className={"row mb-3"}>
                <div className={"col-6"}>
                    <ShoppingList />
                </div>
                <div className={'col-3'}>
                    <TipCalculator/>
                </div>
            </div>
        </section>
    );
}

export default App;
