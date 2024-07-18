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
                <a href="https://alternative.me/crypto/fear-and-greed-index" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="https://alternative.me/crypto/fear-and-greed-index.png"
                        alt="Latest Crypto Fear & Greed Index"
                        width={300}
                        height={300}
                    />
                </a>
                <Source name={"Assets By Market Cap"} url={"https://companiesmarketcap.com/assets-by-market-cap"}
                        tag={"Index"} description={"Assets By Market Cap"}/>
                <Source name={"World Stats"} url={"https://tradingeconomics.com/matrix"}
                        tag={"Index"} description={"World Stats"}/>
                <Source name={"Stocks"} url={"https://tradingeconomics.com/stocks"}
                        tag={"Index, Stock"} description={"World Main Stocks"}/>
                <Source name={"Central Bank Rates"} url={"https://en.macromicro.me/central_bank/overview"}
                        tag={"Rate"} description={"Central Bank Rates Overview"}/>
                <Source name={"PMI"} url={"https://tradingeconomics.com/country-list/manufacturing-pmi"}
                        tag={"Index"} description={"Manufacturing PMI"}/>
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
                <Source name={"Ahr999 Index"} url={"https://www.coinglass.com/pro/i/ahr999"}
                        tag={"Index, Crypto"} description={"Bitcoin Ahr999 Index"}/>
                <Source name={"Gas Price Tracker"} url={"https://cointool.app/gasPrice/eth"} tag={"Index"}
                        description={"ETH Gas Price Tracker"}/>
                <a href="https://www.csustan.edu/sites/default/files/groups/Writing%20Program/forgetting_curve.pdf" target="_blank">
                    <Image
                        src="/overcoming_the_curve.png"
                        alt="overcoming the curve"
                        width={500}
                        height={500}
                    />
                </a>
            </div>
            <div style={{display: "flex"}}>

            </div>
        </main>
    );
}
