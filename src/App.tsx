import React, {ChangeEvent, useEffect, useState} from 'react';
import logo from './pizza.png';
import './App.css';

export default function App() {

    const [diameter, setDiameter] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);

    const [area, setArea] = useState<number>(0);
    const [pricePerArea, setPricePerArea] = useState<number>(0);

    useEffect(() => {

        const radius = diameter / 2
        const area = radius * radius * 3.14
        setArea(Math.round(area))

        if (area > 0) {
            const pricePerSqcm = (price * 100) / area
            setPricePerArea(Math.round(pricePerSqcm * 100) / 100)
        }
    }, [diameter, price]);


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h3>
                    Calculate your pizza price
                </h3>

                <div className={"pizza-data"}>

                    <label>Diameter:</label>
                    <div className={"diameter"}>
                        <input type="number"
                               placeholder={"cm"}
                               min={0}
                               value={diameter}
                               onChange={ (e: ChangeEvent<HTMLInputElement>) =>
                                   setDiameter(parseInt(e.currentTarget.value)) }/>
                    </div>

                    <label>
                        Price: </label>
                    <div className={"price"} >
                        <input type="number"
                               placeholder={"€"}
                               min={0}
                               value={price}
                               onChange={(e) =>
                                   setPrice(parseInt(e.currentTarget.value))}/>
                    </div>

                    <span> Area: </span> <span>  {area} cm²</span>
                    <span> Price / Area: </span> <span>{pricePerArea} cents/cm²</span>
                </div>
            </header>
        </div>
    );
}