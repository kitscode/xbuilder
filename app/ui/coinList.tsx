import React, {useState, useEffect} from 'react';
import Coin from "@/app/ui/coin";
import {string} from "prop-types";

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=2&page=1&sparkline=false // limited
// https://api.coinlore.net/api/ticker/?id=90,80

const CoinList = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://api.coinlore.net/api/ticker/?id=90,80");
            const data = await response.json();
            setCoins(data);
        };

        fetchData();
    }, []);

    return (
        <div className="display: flex; justify-content: space-between;">
            {coins.map((coin: any, index) => (
                <Coin
                    key={index}
                    imageUrl={"/" + coin.symbol + ".png"}
                    name={coin.symbol}
                    price={coin.price_usd}
                    marketCap={coin.market_cap_usd}
                />
            ))}
        </div>
    );
};

export default CoinList;
