import React, {ChangeEvent, useState} from 'react';
import logo from './pizza.png';
import './App.css';
import Calculator from "./Calculator";

export default function App() {

    const [diameter, setDiameter] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);

    const onDiameterChange = (e: ChangeEvent<HTMLInputElement>) => {
        const diameterAsInt = parseInt(e.currentTarget.value)
        setDiameter(diameterAsInt)
    }

    const onPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        const priceAsFloat = parseFloat(e.currentTarget.value)
        setPrice(priceAsFloat)
    }

    return (
        <div className="App">
            <header className="App-header">

                <img src={logo} className="App-logo" alt="logo"/>
                <h3>Calculate your pizza price</h3>

                <Calculator diameter={diameter} price={price} onDiameterChange={onDiameterChange} onPriceChange={onPriceChange} />

            </header>
        </div>
    );
}