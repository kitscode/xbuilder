import Image from 'next/image';

export default function Coin({ imageUrl, name, price, marketCap }: {
    imageUrl: string;
    name: string;
    price: string;
    marketCap: string;
}) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-center p-5 m-2">
            <Image
                src={imageUrl}
                alt={name}
                width={100}
                height={100}
                objectFit="contain"
                className="mx-auto"
            />
            <h2 className="font-bold text-xl mb-2">{name}</h2>
            <p className="text-gray-700 text-base">Price: {price}</p>
            <p className="text-gray-700 text-base">Market Cap: {marketCap}</p>
        </div>
    );
};
