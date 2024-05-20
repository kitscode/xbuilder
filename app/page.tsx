'use client'
import Image from 'next/image';
import CoinList from "@/app/ui/coinList";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <Image
                src="https://alternative.me/crypto/fear-and-greed-index.png"
                alt="Latest Crypto Fear & Greed Index"
                width={300}
                height={300}
            />
            <CoinList/>
            <Link href="/ahr999">ahr999</Link>
        </main>
    );
}
