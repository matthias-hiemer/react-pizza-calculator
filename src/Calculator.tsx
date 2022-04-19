import React, {ChangeEventHandler, useEffect, useState} from "react";


type CalculatorProps = {
    diameter : number
    price : number
    onPriceChange : ChangeEventHandler<HTMLInputElement>
    onDiameterChange : ChangeEventHandler<HTMLInputElement>
}

export default function Calculator({diameter, price, onPriceChange, onDiameterChange } : CalculatorProps){

    const [area, setArea] = useState<number>(0);
    const [pricePerArea, setPricePerArea] = useState<number>(0);

    function calculateArea(diameter: number) {
        const radius = diameter / 2
        const area = radius * radius * 3.14

        return Math.round(area);
    }

    function calculateCentsPerSqCm(price: number, area: number) {
        let roundedCentsPerSqCm = 0;

        if(area > 0) {
            const centsPerSqCm = (price * 100) / area
            roundedCentsPerSqCm = Math.round(centsPerSqCm * 100) / 100  // a way to round to 2 decimals
        }

        return roundedCentsPerSqCm;
    }

    useEffect(() => {

        setArea( calculateArea(diameter) )
        setPricePerArea( calculateCentsPerSqCm(price, area) )

    }, [diameter, price, area]);

    return (
        <div className={"pizza-data"}>

            <label> Diameter (cm): </label>
            <div className={"diameter"}>
                <input type="number"
                       placeholder={"cm"}
                       value={diameter}
                       onChange={onDiameterChange} />
            </div>

            <label> Price (€): </label>
            <div className={"price"} >
                <input type="number"
                       placeholder={"€"}
                       value={price}
                       onChange={onPriceChange} />
            </div>

            <span> Area: </span> <span> {area} cm²</span>
            <span> Price / Area: </span> <span>{pricePerArea} cents/cm²</span>
        </div>
    )
}
