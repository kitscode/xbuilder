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
                {/* See How The Value Goes */}
                <Image
                    src="https://alternative.me/crypto/fear-and-greed-index.png"
                    alt="Latest Crypto Fear & Greed Index"
                    width={300}
                    height={300}
                />
                <Source name={"Assets By Market Cap"} url={"https://companiesmarketcap.com/assets-by-market-cap"}
                        tag={"Index"} description={"Assets By Market Cap"}/>
                <Source name={"World Stats"} url={"https://tradingeconomics.com/matrix"}
                        tag={"Index"} description={"World Stats"}/>
                <Source name={"Stocks"} url={"https://tradingeconomics.com/stocks"}
                        tag={"Index, Stock"} description={"World Main Stocks"}/>
                <Source name={"Central Bank Rates"} url={"https://en.macromicro.me/central_bank/overview"}
                        tag={"Rate"} description={"Central Bank Rates Overview"}/>
                <Source name={"Ahr999 Index"} url={"https://www.coinglass.com/pro/i/ahr999"}
                        tag={"Index, Crypto"} description={"Bitcoin Ahr999 Index"}/>
                {/*<CoinList/>*/}
                {/*<Ahr999Chart/>*/}
                {/*https://twitter.com/drakefjustin/status/1304064879662227456*/}
            </div>
            <div style={{display: "flex"}}>
                <a href="https://ultrasound.money" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/ultrasound.png"
                        alt="ultrasound money"
                        width={550}
                        height={550}
                    />
                </a>
                <Source name={"Gas Price Tracker"} url={"https://cointool.app/gasPrice/eth"} tag={"Index"}
                        description={"ETH Gas Price Tracker"}/>
            </div>
        </main>
    );
}
