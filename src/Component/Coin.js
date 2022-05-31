import React from 'react';

const Coin = ({image, symbol, name, price, marketCap, priceChenge}) => {
    return (
        <div>
            <img src={image} alt=""/>
            <span>{name}</span>
            <span>{symbol.toUpperCase()}</span>
            <span>$ {price.toLocaleString()}</span>
            <span>{priceChenge}</span>
            <span>$ {marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;
