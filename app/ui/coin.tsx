import Image from 'next/image';
import React from 'react';

export default function Coin({imageUrl, name, price, marketCap}: {
    imageUrl: string;
    name: string;
    price: string;
    marketCap: string;
}) {
    return (
        <div className="coin-card">
            <Image
                src={imageUrl}
                alt={name}
                width={100}
                height={100}
                objectFit="contain"
            />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Market Cap: {marketCap}</p>
        </div>
    );
};
