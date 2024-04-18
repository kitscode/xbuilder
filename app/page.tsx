'use client'
import Image from 'next/image';
import CoinList from "@/app/ui/coinList";

export default function Home() {
    return (
        <main>
            <h1 className="text-3xl font-bold underline">Hello, XBuilder!</h1>
            <Image
                src="https://alternative.me/crypto/fear-and-greed-index.png"
                alt="Latest Crypto Fear & Greed Index"
                width={300}
                height={300}
            />
            <CoinList/>
        </main>
    );
}
