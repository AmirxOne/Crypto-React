import React, {useState, useEffect} from 'react';
import {GetApi} from "../Functions/GetApi";
import Coin from "./Coin";
import Loading from "./Loading";
// Style
import style from "../Component-Style/Lander.module.css"

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
            {
                coins.length !== 0 ?
                    <div className={style.boxCrypto}>
                        <div className={style.boxInput}>
                            <input className={style.input} type="text" placeholder="Search ..." value={search}
                                   onChange={chendeHandler}/>
                        </div>

                        <div className={style.discrption}>
                            {searchFilter.map(coin => <Coin
                                key={coin.id}
                                image={coin.image}
                                symbol={coin.symbol}
                                name={coin.name}
                                price={coin.current_price}
                                marketCap={coin.market_cap}
                                priceChenge={coin.price_change_percentage_24h}
                            />)}
                        </div>
                    </div> :
                    <Loading/>
            }
        </>

    );
};

export default Lander;
