import React from 'react';
// Style
import style from "../Component-Style/Coin.module.css"

const Coin = ({image, symbol, name, price, marketCap, priceChenge}) => {
    return (
        <div className={style.Detilse}>
            <div className={style.boxImage}><img src={image} alt=""/></div>
            <span className={style.name}>{name}</span>
            <span className={style.symbol}>{symbol.toUpperCase()}</span>
            <span className={style.price}>${price.toLocaleString()}</span>
            <span className={priceChenge > 0 ? style.priceChenge : style.priceRed}>{priceChenge.toFixed(2)}%</span>
            <span className={style.marketCap}>${marketCap.toLocaleString()}M</span>
        </div>
    );
};

export default Coin;
