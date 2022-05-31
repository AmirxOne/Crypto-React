import React, {useState, useEffect} from 'react';
import {GetApi} from "../Functions/GetApi";
import Coin from "./Coin";

const Lander = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
        const fetchApi = async () => {
            setCoins(await GetApi())
        }

        fetchApi();
    }, [])

    const chendeHandler = (event) => {
        setSearch(event.target.value)
    }

    const searchFilter = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))


    return (
        <>
            <input type="text" placeholder="Search" value={search} onChange={chendeHandler}/>
            <div>
                {searchFilter.map(coin => <Coin
                    key={coin.id}
                    image={coin.image}
                    symbol={coin.symbol}
                    name={coin.name}
                    price={coin.current_price}
                    marketCap={coin.market_cap}
                    priceChenge={coin.rice_change_percentage_24h}
                />)}
            </div>
        </>
    );
};

export default Lander;
