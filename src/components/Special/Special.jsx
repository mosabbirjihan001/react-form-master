import { useContext } from "react";
import { AssetContext, MoneyContext } from "../GrandPa/GrandPa";


const Special = ({asset}) => {

    const gift = useContext(AssetContext)
    const money = useContext(MoneyContext)

    return (
        <div>
            <h2>Special...</h2>
            <p>Has : {asset}</p>
            <p>Also has : {gift}</p>
            <p>Also has : {money}</p>
        </div>
    );
};

export default Special;