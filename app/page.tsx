'use client'
import Image from 'next/image';
import CoinList from "@/app/ui/coinList";
import FixedTop from "@/app/ui/fixedTop";
import Source from "@/app/ui/source";

export default function Home() {
    return (
        <main>
            <div>
                <FixedTop/>
            </div>
            <div style={{display: "flex"}}>
                {/*<Image*/}
                {/*    src="https://alternative.me/crypto/fear-and-greed-index.png"*/}
                {/*    alt="Latest Crypto Fear & Greed Index"*/}
                {/*    width={300}*/}
                {/*    height={300}*/}
                {/*/>*/}
                {/*<CoinList/>*/}
                {/*<Link href="/ahr999">ahr999</Link>*/}
                {/*<Ahr999Chart/>*/}
                <Source name={"CompaniesMarketCap"} url={"https://companiesmarketcap.com/assets-by-market-cap"}
                        tag={"Index"} description={"Bitcoin Ahr999 Index"}/>
                <Source name={"Fear & Greed Index"} url={"https://alternative.me/crypto/fear-and-greed-index"}
                        tag={"Index"} description={"Crypto Fear & Greed Index"}/>
                <Source name={"Ahr999"} url={"https://www.coinglass.com/pro/i/ahr999"} tag={"Index"}
                        description={"Bitcoin Ahr999 Index"}/>
            </div>
        </main>
    );
}
