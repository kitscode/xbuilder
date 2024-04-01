import Link from "next/link";
import Image from 'next/image';
import Coin from "@/app/ui/coin";

export default function Home() {
    return (
        <main>
            <Image
                src="https://alternative.me/crypto/fear-and-greed-index.png"
                alt="Latest Crypto Fear & Greed Index"
                width={300}
                height={300}
            />
            <Link href="/ahr999">ahr999</Link>
            <Coin imageUrl={"/btc.png"}
                  name={"BTC"}
                  price={"70,000"}
                  marketCap={"1,366,254,691,154"}>
            </Coin>
        </main>
    );
}
