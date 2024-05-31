'use client'
import Image from 'next/image';
import CoinList from "@/app/ui/coinList";
import Link from "next/link";
import Ahr999Chart from "@/app/ui/ahr999Chart";
import FixedTopModule from "@/app/ui/fixedTop";

export default function Home() {
    return (
        <main>
            <FixedTopModule />
            <div style={{display: "flex"}}>
                <Image
                    src="https://alternative.me/crypto/fear-and-greed-index.png"
                    alt="Latest Crypto Fear & Greed Index"
                    width={300}
                    height={300}
                />
                <CoinList/>
            </div>
            {/*<Link href="/ahr999">ahr999</Link>*/}
            <Ahr999Chart/>
        </main>
    );
}
